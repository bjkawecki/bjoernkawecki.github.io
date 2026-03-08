.PHONY: serve build install serve-drafts css

serve:
	npm run serve

# Dev-Server inkl. Entwürfe (--drafts)
serve-drafts:
	npm run serve_d

# Nur Tailwind-CSS neu bauen (Klassen aus HTML/Includes einlesen)
css:
	npx tailwindcss -i ./assets/css/tailwind.css -o ./assets/css/main.css

# Site bauen (Tailwind + Jekyll)
build:
	npm run build

# Abhängigkeiten installieren (Ruby + Node)
install:
	bundle install && npm install

# Kurzform: "make" startet den Dev-Server
default: serve
