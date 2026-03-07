# frozen_string_literal: true

require 'date'

module SunTime
  # module SunTime::TimeFormatting
  module TimeFormatting
    def self.time_diff(decimal_time1, decimal_time2) # rubocop:disable Metrics/AbcSize,Metrics/MethodLength
      seconds1 = (decimal_time1 * 3600).floor
      seconds2 = (decimal_time2 * 3600).floor
      diff_seconds = (seconds1 - seconds2).abs
      decimal_diff = diff_seconds / 3600.0

      hours   = decimal_diff.floor
      minutes = ((decimal_diff - hours) * 60).floor
      seconds = ((((decimal_diff - hours) * 60) - minutes) * 60).floor

      formatted_hours   = hours.to_s.rjust(2, '0')
      formatted_minutes = minutes.to_s.rjust(2, '0')
      formatted_seconds = seconds.to_s.rjust(2, '0')

      "#{formatted_hours} : #{formatted_minutes} : #{formatted_seconds}"
    end

    def self.convert_decimal_time(decimal_time) # rubocop:disable Metrics/AbcSize,Metrics/MethodLength
      hours   = decimal_time.floor
      minutes = ((decimal_time - hours) * 60).floor
      seconds = ((((decimal_time - hours) * 60) - minutes) * 60).floor

      formatted_hours   = hours.to_s.rjust(2, '0')
      formatted_minutes = minutes.to_s.rjust(2, '0')
      formatted_seconds = seconds.to_s.rjust(2, '0')

      ampm = hours >= 12 ? 'PM' : 'AM'

      if hours > 12
        formatted_hours = (hours - 12).to_s.rjust(2, '0')
      elsif hours.zero?
        formatted_hours = '12'
      end

      "#{formatted_hours}:#{formatted_minutes}:#{formatted_seconds} #{ampm}"
    end
  end

  # class SunTime::Calculator
  class Calculator
    RADIANS_PER_DEGREE = Math::PI / 180.0
    DEGREES_PER_RADIAN = 180.0 / Math::PI
    DAYS_PER_YEAR      = 365
    J2000              = 2_451_545.0009
    SOLAR_NOON_OFFSET  = 12
    MAX_COS_OMEGA      = 1
    MIN_COS_OMEGA      = -1
    SOLAR_ALTITUDE     = -0.83
    EARTH_TILT         = 23.45

    def initialize(date: Date.today)
      @date = date
    end

    def julian_day # rubocop:disable Metrics/AbcSize,Metrics/MethodLength
      month = @date.month
      year = @date.year
      day = @date.day

      a = (14 - month) / 12
      y = year + 4800 - a
      m = month + (12 * a) - 3

      day +
        (((153 * m) + 2) / 5) +
        (DAYS_PER_YEAR * y) +
        (y / 4) -
        (y / 100) +
        (y / 400) -
        32_045
    end

    def sun(latitude, longitude, timezone_offset = nil) # rubocop:disable Metrics/AbcSize,Metrics/MethodLength
      jday = julian_day
      n_star = jday - J2000 - (longitude / 360.0)
      n = (n_star + 0.5).floor
      solar_noon = J2000 - (longitude / 360.0) + n

      mean_anomaly = 356.047 + (0.9856002585 * n)

      center = (1.9148 * Math.sin(mean_anomaly * RADIANS_PER_DEGREE)) +
               (0.02 * Math.sin(2 * mean_anomaly * RADIANS_PER_DEGREE)) +
               (0.0003 * Math.sin(3 * mean_anomaly * RADIANS_PER_DEGREE))

      ecliptic_longitude = (mean_anomaly + 102.9372 + center + 180) % 360

      j_transit = solar_noon +
                  (0.0053 * Math.sin(mean_anomaly * RADIANS_PER_DEGREE)) -
                  (0.0069 * Math.sin(2 * ecliptic_longitude * RADIANS_PER_DEGREE))

      declination = Math.asin(
        Math.sin(ecliptic_longitude * RADIANS_PER_DEGREE) *
        Math.sin(EARTH_TILT * RADIANS_PER_DEGREE)
      ) * DEGREES_PER_RADIAN

      cos_omega = (
        Math.sin(SOLAR_ALTITUDE * RADIANS_PER_DEGREE) -
          (Math.sin(latitude * RADIANS_PER_DEGREE) *
          Math.sin(declination * RADIANS_PER_DEGREE))
      ) /
                  (
                    Math.cos(latitude * RADIANS_PER_DEGREE) *
                      Math.cos(declination * RADIANS_PER_DEGREE)
                  )

      return [nil, -1] if cos_omega > MAX_COS_OMEGA
      return [-1, nil] if cos_omega < MIN_COS_OMEGA

      omega = Math.acos(cos_omega) * DEGREES_PER_RADIAN

      j_set = j_transit + (omega / 360.0)
      j_rise = j_transit - (omega / 360.0)

      utc_set = (24 * (j_set - jday)) + SOLAR_NOON_OFFSET
      utc_rise = (24 * (j_rise - jday)) + SOLAR_NOON_OFFSET

      tz_offset = timezone_offset.nil? ? Time.now.utc_offset / 3600.0 : timezone_offset

      local_rise = (utc_rise + tz_offset) % 24
      local_set = (utc_set + tz_offset) % 24

      [local_rise, local_set]
    end

    def mm_sun_time(latitude, longitude, timezone_offset = nil) # rubocop:disable Metrics/MethodLength
      local_rise, local_set = sun(latitude, longitude, timezone_offset)

      sunrise = 'N/A'
      sunset = 'N/A'
      daytime = 'N/A'

      if !local_rise.nil? && !local_set.nil?
        sunrise = TimeFormatting.convert_decimal_time(local_rise)
        sunset = TimeFormatting.convert_decimal_time(local_set)
        daytime = TimeFormatting.time_diff(local_rise, local_set)
      end

      {
        sunrise: sunrise,
        sunset: sunset,
        daytime: daytime
      }
    end
  end
end
