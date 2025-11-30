module Jekyll
  class DynamicTableTag < Liquid::Tag
    def render(context)
      data = generate_table_data()
      html = '<div class="table_wrapper"><table><thead><tr><th>Name</th><th>Age</th><th>City</th></tr></thead><tbody>'

      data.each do |row|
        html += "<tr><td>#{row["name"]}</td><td>#{row["age"]}</td><td>#{row["city"]}</td></tr>"
      end

      html += "</tbody></table></div>"
      html
    end

    private

    def generate_table_data
      # Same data generation logic as before
      [
        { "name" => "Alice", "age" => 30, "city" => "New York" },
        { "name" => "Bob", "age" => 25, "city" => "Los Angeles" },
        { "name" => "Charlie", "age" => 35, "city" => "Chicago" },
      ]
    end
  end
end

# Register the new tag with Liquid
Liquid::Template.register_tag("dynamic_table", Jekyll::DynamicTableTag)
