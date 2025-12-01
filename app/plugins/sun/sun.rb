# frozen_string_literal: true

RADIANS_PER_DEGREE = Math::PI / 180.0
DEGREES_PER_RADIAN = 180.0 / Math::PI
DAYS_PER_YEAR = 365
J2000 = 2_451_545.0009
SOLAR_NOON_OFFSET = 12
MAX_COS_OMEGA = 1
MIN_COS_OMEGA = -1
SOLAR_ALTITUDE = -0.83
EARTH_TILT = 23.45

current_date = Time.now
current_month = current_date.month
current_year = current_date.year
current_day = current_date.day

a = ((14 - current_month) / 12).floor
y = current_year + 4800 - a
m = current_month + (12 * a) - 3

J_DAY = current_day +
        (((153 * m) + 2) / 5).floor +
        (DAYS_PER_YEAR * y) +
        (y / 4).floor -
        (y / 100).floor +
        (y / 400).floor -
        32_045
# Sun Equation
module Sun
  def self.daytime(latitude, longitude, timezone = nil) # rubocop:disable Metrics/AbcSize,Metrics/MethodLength
    n_star = J_DAY - J2000 - (longitude / 360.0)
    n = (n_star + 0.5).floor
    solar_noon = J2000 - (longitude / 360.0) + n
    m = 356.047 + (0.9856002585 * n)
    c = (1.9148 * Math.sin(m * RADIANS_PER_DEGREE)) +
        (0.02 * Math.sin(2 * m * RADIANS_PER_DEGREE)) +
        (0.0003 * Math.sin(3 * m * RADIANS_PER_DEGREE))
    l = (m + 102.9372 + c + 180) % 360

    j_transit = solar_noon +
                (0.0053 * Math.sin(m * RADIANS_PER_DEGREE)) -
                (0.0069 * Math.sin(2 * l * RADIANS_PER_DEGREE))

    d = Math.asin(
      Math.sin(l * RADIANS_PER_DEGREE) *
      Math.sin(EARTH_TILT * RADIANS_PER_DEGREE)
    ) * DEGREES_PER_RADIAN

    cos_omega = (Math.sin(SOLAR_ALTITUDE * RADIANS_PER_DEGREE) - (Math.sin(latitude * RADIANS_PER_DEGREE) * Math.sin(d * RADIANS_PER_DEGREE))) / (Math.cos(latitude * RADIANS_PER_DEGREE) * Math.cos(d * RADIANS_PER_DEGREE)) # rubocop:disable Layout/LineLength

    return [nil, -1] unless cos_omega > MAX_COS_OMEGA

    return [-1, nil] unless cos_omega < MIN_COS_OMEGA

    omega = Math.acos(cos_omega) * DEGREES_PER_RADIAN
    j_set = j_transit + (omega / 360.0)
    j_rise = j_transit - (omega / 360.0)

    utc_time_set = (24 * (j_set - J_DAY)) + SOLAR_NOON_OFFSET
    utc_time_rise = (24 * (j_rise - J_DAY)) + SOLAR_NOON_OFFSET

    tz_offset = timezone.nil? ? (-1.0 * Time.now.utc_offset / 3600) : timezone

    local_rise = (utc_time_rise + tz_offset) % 24
    local_set = (utc_time_set + tz_offset) % 24

    [local_rise, local_set]
  end
end
