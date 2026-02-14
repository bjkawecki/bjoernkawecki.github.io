.PHONY: serve build install serve-drafts

# Tailwind läuft im Watch-Modus – CSS wird bei Änderungen automatisch neu gebaut
serve:
	npm run serve

# Dev-Server inkl. Entwürfe (--drafts)
serve-drafts:
	npm run serve_d

# Site bauen (Tailwind + Jekyll)
build:
	npm run build

# Abhängigkeiten installieren (Ruby + Node)
install:
	bundle install && npm install

# Kurzform: "make" startet den Dev-Server
default: serve
