# frozen_string_literal: true
# Setzt kurze, sprachspezifische title/description für jekyll-feed
# (Polyglot baut DE und EN getrennt; site.description kommt sonst immer aus _config.yml).

Jekyll::Hooks.register :site, :pre_render do |site|
  lang = site.config["active_lang"] || site.config["default_lang"] || "de"
  head = site.data.dig(lang, "strings", "head")
  next unless head.is_a?(Hash)

  site.config["title"] = head["feed_title"] if head["feed_title"]
  site.config["description"] = head["feed_subtitle"] if head["feed_subtitle"]
end
