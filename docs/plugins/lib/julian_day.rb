# frozen_string_literal: true

def is_gregorian(year, month, day) # rubocop:disable Naming/PredicatePrefix
  (year > 1582) || ((year == 1582) && ((month > 10) || ((month == 10) && (day >= 15))))
end

def INT(num) # rubocop:disable Naming/MethodName
  if num.positive?
    num.floor
  elsif num == num.floor
    d
  else
    num.floor - 1
  end
end

# Julian Day Calculation
module JulianDay
  # Convert Gregorian date and time to Julian Day.
  #
  # Args:
  #   year:   Gregorian year.
  #   month: Gregorian month (1-12).
  #   day:   Gregorian day.
  #   hour: Gregorian hour (0-23).
  #   min:   Gregorian minute (0-59).
  #   sec:   Gregorian second (0-59).
  #
  # Returns:
  #   Julian Day.
  #
  # Notes:
  #   This function works with years in the range -4713 to 9999.
  #   The Julian Day is a count of days since November 16, 4713 BCE.
  def self.g2j(year, month, day, hour = 12, min = 0, sec = 0) # rubocop:disable Metrics/AbcSize,Metrics/MethodLength,Metrics/ParameterLists
    if month < 3
      year -= 1
      month += 12
    end
    a = INT(year / 100)
    b = is_gregorian(year, month, day) ? 2 - a + INT(a / 4) : 0
    jd = INT(365.25 * (year + 4716)) + INT(30.6001 * (month + 1)) + day + b - 1524.5
    jd += hour / 24.0
    jd += min / 24.0 / 60.0
    jd += sec / 24.0 / 60.0 / 60.0
    jd
  end
end
