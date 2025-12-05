# phothinmg.github.io

My personal site

## Developer setup — Ruby formatting

This project uses `rufo` as the workspace Ruby formatter and `rubocop` for linting.

Quick setup (recommended):

1. Install Bundler (if you don't have it):

```bash
gem install bundler
```

2. Add `rufo` and `rubocop` to the development group in your project:

```bash
bundle add rufo --group development
bundle add rubocop --group development
bundle install
```

3. Format a file or the whole project:

```bash
# Format a single file
bundle exec rufo a.rb

# Format all Ruby files in the repository
bundle exec rufo .
```

4. Run RuboCop linting:

```bash
bundle exec rubocop
```

VS Code settings

The workspace is configured to use `rufo` on save. If you prefer another formatter, change the `ruby.format` setting in `.vscode/settings.json`.

## Demo and test

1. A demo page is included at `math-demo.md`. Build the site and open `http://localhost:4000/math-demo/` (or inspect `_site/math-demo/index.html`) to see MathJax injection.

2. A quick test script is provided to build the site and assert MathJax was injected:

```bash
# make sure dependencies are installed
bundle install

# run the check (will run `bundle exec jekyll build` and inspect output)
ruby script/check_math_injection.rb
```
