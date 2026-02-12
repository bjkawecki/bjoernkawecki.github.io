# frozen_string_literal: true
# Erzeugt für jedes Eintragspaar in _data/blog_redirects.yml eine Redirect-Seite
# (from → to). Kein jekyll-redirect-from nötig.

Jekyll::Hooks.register :site, :post_read do |site|
  data = site.data["blog_redirects"]
  next unless data && data["redirects"].is_a?(Array)

  data["redirects"].each_with_index do |entry, idx|
    from = entry["from"].to_s
    to   = entry["to"].to_s
    next if from.empty? || to.empty?

    # Eindeutiger Dateiname pro Redirect, damit keine Konflikte (mehrere → gleiche Ausgabedatei)
    name = "redirect_#{idx}.html"
    page = Jekyll::PageWithoutAFile.new(site, site.source, "", name)
    page.data["layout"]       = "redirect"
    page.data["permalink"]   = from
    page.data["redirect_to"] = to
    page.data["sitemap"]     = false
    page.content = ""
    site.pages << page
  end
end
