# frozen_string_literal: true
# Erzeugt für jedes Eintragspaar in _data/blog_redirects.yml eine Redirect-Seite
# (from → to). Kein jekyll-redirect-from nötig.
#
# Polyglot: Permalinks ohne Sprachprefix (/blog/...), Sprache über page.data["lang"].
# Einträge mit from: /en/... werden auf /... + lang: en normalisiert.

Jekyll::Hooks.register :site, :post_read do |site|
  data = site.data["blog_redirects"]
  next unless data && data["redirects"].is_a?(Array)

  default_lang = site.config["default_lang"] || "de"

  data["redirects"].each_with_index do |entry, idx|
    from = entry["from"].to_s
    to   = entry["to"].to_s
    next if from.empty? || to.empty?

    lang = entry["lang"] || default_lang
    permalink = from

    if from.start_with?("/en/")
      lang = "en"
      permalink = from.sub(%r{\A/en}, "")
    elsif entry["lang"]
      lang = entry["lang"]
    end

    name = "redirect_#{idx}.html"
    page = Jekyll::PageWithoutAFile.new(site, site.source, "", name)
    page.data["layout"]       = "redirect"
    page.data["permalink"]    = permalink
    page.data["redirect_to"]  = to
    page.data["sitemap"]      = false
    page.data["lang"]         = lang
    page.content = ""
    site.pages << page
  end
end
