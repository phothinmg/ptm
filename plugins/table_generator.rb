module Jekyll
  class TableGenerator < Generator
    safe true
    priority :high

    def generate(site)
      # 1. Your Ruby function to generate the data
      data = generate_table_data()

      # 2. Inject the data into the Jekyll site object
      # The data will be accessible in Liquid via site.data.my_dynamic_table
      site.data["my_dynamic_table"] = data
    end

    private

    def generate_table_data
      # This is where your Ruby logic goes.
      # It should return an array of hashes, which maps well to a table structure.
      [
        { "name" => "Alice", "age" => 30, "city" => "New York" },
        { "name" => "Bob", "age" => 25, "city" => "Los Angeles" },
        { "name" => "Charlie", "age" => 35, "city" => "Chicago" },
      ]
    end
  end
end
