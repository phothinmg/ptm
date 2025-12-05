# frozen_string_literal: true

require 'nokogiri'

module Jekyll
  DEFAULT_MATHJAX = {
    'src' => [
      'https://polyfill.io/v3/polyfill.min.js?features=es6',
      'https://cdn.jsdelivr.net/npm/mathjax@4/tex-mml-chtml.js'
    ],
    'config' => {
      'tex' => {
        'inlineMath' => [['$', '$'], ['\\(', '\\)']],
        'displayMath' => [['$$', '$$'], ['\\[', '\\]']]
      }
    }
  }.freeze

  def self.mathjax_config(site)
    DEFAULT_MATHJAX.merge(site.config.fetch('mathjax', {}))
  end

  def self.inject_mathjax_into(doc, cfg)
    return unless ['.html', '.htm'].include?(doc.output_ext)
    return if doc.output.nil? || doc.output.empty?

    # debug log
    begin
      require 'fileutils'
      FileUtils.mkdir_p(File.join(Dir.pwd, 'tmp'))
      File.open(File.join(Dir.pwd, 'tmp', 'mathjax_plugin.log'), 'a') do |f|
        f.puts "hook invoked for: #{doc.respond_to?(:path) ? doc.path : doc.class}"
      end
    rescue StandardError
    end

    html = doc.output
    tex = cfg.dig('config', 'tex') || {}
    patterns = (tex['inlineMath'] || []) + (tex['displayMath'] || [])
    contains = patterns.any? { |delim| html.match?(Regexp.new(Regexp.escape(delim[0]))) }
    return unless contains

    parsed = Nokogiri::HTML.parse(html)
    head = parsed.at('head')
    return unless head

    # avoid duplicate injection
    return if parsed.css('script[src*="mathjax"]').any? || parsed.at('script:contains("MathJax")')

    config_json = (cfg['config'] || {}).to_json
    head.add_child('<!-- MathJax added by plugin -->')
    head.add_child(%(<script>window.MathJax = #{config_json};</script>))

    srcs = cfg['src']
    srcs = [srcs] if srcs.is_a?(String)
    Array(srcs).each { |src| head.add_child(%(<script src="#{src}"></script>)) }

    doc.output = parsed.to_html

    begin
      File.open(File.join(Dir.pwd, 'tmp', 'mathjax_plugin.log'), 'a') do |f|
        f.puts "injected for: #{doc.respond_to?(:path) ? doc.path : doc.class}"
      end
    rescue StandardError
    end
  rescue StandardError => e
    Jekyll.logger.warn 'MathJax plugin error:', e.message
  end

  Jekyll::Hooks.register :pages, :post_render do |page|
    inject_mathjax_into(page, mathjax_config(page.site))
  end

  Jekyll::Hooks.register :documents, :post_render do |doc|
    inject_mathjax_into(doc, mathjax_config(doc.site))
  end
end
