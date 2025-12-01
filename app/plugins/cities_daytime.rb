# frozen_string_literal: true

require_relative 'sun/mm_daytime'
module Jekyll
  # class Jekyll::MyanmarCitiesDaytimeTable
  class MyanmarCitiesDaytimeTable < Liquid::Tag
    def render(context) # rubocop:disable Metrics/MethodLength
      data = CitiesDayTimes.daytime() # rubocop:disable Style/MethodCallWithoutArgsParentheses
      html = '<div class="table_wrapper">'
      html += '<h3>Sunrise and sunset times for capitals of states and regions in Myanmar</h3>'
      html += '<table><thead><tr>'
      html += '<th scope="col">City</th><th scope="col">State/Region</th>'
      html += '<th scope="col">Sunrise</th><th scope="col">Sunset</th>'
      html += '<th scope="col">Day Length</th>'
      html += '</tr></thead><tbody>'

      data.each do |row|
        html += "<tr><td>#{row['city']}</td><td>#{row['state']}</td><td>#{row['sunrise']}</td>"
        html += "<td>#{row['sunset']}</td><td>#{row['daytime']}</td></tr>"
      end
      html += '</tbody></table></div>'
      html
    end
  end
end

# Register the new tag with Liquid
Liquid::Template.register_tag('cities_daytime', Jekyll::MyanmarCitiesDaytimeTable)
