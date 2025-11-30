# frozen_string_literal: true

require_relative 'sun'
require_relative 'cities_data'
def time_diff(decimal_time1, decimal_time2) # rubocop:disable Metrics/AbcSize,Metrics/MethodLength
  seconds1 = (decimal_time1 * 3600).floor
  seconds2 = (decimal_time2 * 3600).floor
  diff_seconds = (seconds1 - seconds2).abs
  decimal_diff = diff_seconds.to_f / 3600
  hours = decimal_diff.floor
  minutes = ((decimal_diff - hours) * 60).floor
  seconds = ((((decimal_diff - hours) * 60) - minutes) * 60).floor
  formatted_hours = hours.to_s.rjust(2, '0')
  formatted_minutes = minutes.to_s.rjust(2, '0')
  formatted_seconds = seconds.to_s.rjust(2, '0')
  "#{formatted_hours} : #{formatted_minutes} : #{formatted_seconds}"
end

def convert_decimal_time(decimal_time) # rubocop:disable Metrics/AbcSize,Metrics/MethodLength
  hours = decimal_time.floor
  minutes = ((decimal_time - hours) * 60).floor
  seconds = ((((decimal_time - hours) * 60) - minutes) * 60).floor

  formatted_hours = hours.to_s.rjust(2, '0')
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

def mm_sun_time(latitude, longitude, timezone) # rubocop:disable Metrics/MethodLength
  local_rise, local_set = Sun.daytime(latitude, longitude, timezone)
  sunrise = 'N/A'
  sunset = 'N/A'
  daytime = 'N/A'
  if !local_rise.nil? && !local_set.nil?
    sunrise = convert_decimal_time(local_rise)
    sunset = convert_decimal_time(local_set)
    daytime = time_diff(local_rise, local_set)
  end
  {
    sunrise: sunrise,
    sunset: sunset,
    daytime: daytime
  }
end

# Cities Day Times
module CitiesDayTimes
  def self.daytime
    CITIES_DATA.map do |city|
      mmst = mm_sun_time(city[:latitude], city[:longitude], city[:timezone])
      {
        city: city[:city],
        state: city[:state],
        sunrise: mmst[:sunrise],
        sunset: mmst[:sunset],
        daytime: mmst[:daytime]
      }
    end
  end
end
