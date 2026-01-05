# Terser plugin

This repository includes a small Jekyll plugin that minifies JavaScript and emits source maps during site builds.

Location

- Plugin file: `_plugins/terser.rb`

What it does

- Minifies `.js` files from your source JS directory (by default `app/assets/js` or `assets/js`) into the site output (default `_site/assets/js`).
- Produces `.map` source-map files when enabled.
- Uses the `terser` Ruby gem when available; otherwise falls back to an external `terser` CLI (`bundle exec terser` or `terser`).
- Runs after Jekyll finishes writing files so minified outputs are not overwritten.

Configuration
Configure the plugin via the `terser:` section in `_config.yml`. Example settings and defaults:

```
terser:
  enabled: true           # disable to skip minification
  output_dir: assets/js   # destination directory under site dest
  compress: true          # enable compression
  mangle: true            # enable name mangling
  source_map: true        # produce .map files
  exclude:
    - '**/*.min.js'       # glob patterns (relative to source dir) to skip
```

Usage

- Ensure gems are installed:

```bash
bundle install
```

- Build the site (this will trigger minification):

```bash
bundle exec jekyll build
# or
make build
```

Notes

- If you prefer not to use the Ruby `terser` gem, the plugin will try an external `terser` binary. Installing the gem is recommended for portability (the Gemfile already includes `terser`).
- You can disable the plugin during development by setting `terser.enabled: false` in `_config.yml`, or enhance the plugin to skip minification when `JEKYLL_ENV` is not `production`.

Contact

- If you want additional features (per-file options, custom terser flags, or a dry-run mode), tell me what you want and I can add it.
