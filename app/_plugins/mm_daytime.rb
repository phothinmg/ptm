# frozen_string_literal: true

require 'date'
require_relative '../lib/suntime'

module Jekyll
  # class Jekyll::MmDaytimeGenerator
  class MmDaytimeGenerator < Generator
    safe true
    priority :normal

    def generate(site) # rubocop:disable Metrics/AbcSize,Metrics/MethodLength
      cities = site.data['mm_daytime_cities'] || []
      calculator = SunTime::Calculator.new(date: Date.today)

      rows = cities.map do |city|
        result = calculator.mm_sun_time(
          city['latitude'],
          city['longitude'],
          city['timezone']
        )

        {
          'city' => city['city'],
          'state' => city['state'],
          'sunrise' => result[:sunrise],
          'sunset' => result[:sunset],
          'daytime' => result[:daytime]
        }
      end

      site.data['mm_daytime'] = {
        'today' => Date.today.strftime('%a, %b %d, %Y'),
        'rows' => rows
      }
    end
  end
end
