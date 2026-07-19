# Wissensmanagement – Ist-Zustand (für KI)

Aktuell ausgelieferte Seite `/knowledge-management/` (DE und EN) nach Spec [`documentation-engineering.md`](documentation-engineering.md).

**Quellen:** `_pages/wissensmanagement.de|en.html` (`layout: blog`) · `_includes/docs/content.html` · `_data/de|en/strings.yml` → `docs_engineering`  
**Redirects:** `/documentation-engineering/`, `/wissenssysteme/`, `/wissensmanagement/` → `/knowledge-management/`

---

## Meta: Seitenstruktur

| # | Sektion | Inhalt |
|---|---------|--------|
| 1 | Hero | H1 + Subheadline (`text-lg sm:text-xl`, ein Satz: Angebot + Ergebnis); keine Vorstellung (dafür gibt es „Über mich“), keine Grafik, kein CTA |
| 2 | Problem („Unzugängliches Wissen ist ein Risiko“) | H2 + Absätze inkl. Alltagsfragen, Verlust/Onboarding, Kosten, Pflege-Lücke; Chaos-Grafik rechts umflossen |
| 3 | Ansatz + Angebot („Von verstreutem Wissen zu klaren Strukturen“) | H2 + 3 Absätze (Documentation Engineering als Ansatz; Angebot; Ergebnis); kein DocsOps; Order-Grafik rechts umflossen |
| 4 | Wie wir zusammenarbeiten | H2 + 3 Absätze (Einstieg + Ablauf; Blick von außen + Voraussetzungen; Werkzeuge + KI); nur Text |
| 5 | Schluss | Ohne Überschrift: hervorgehobener Satz mit Nutzenhinweis (`text-lg font-medium`) + mailto-Button |

Layout: eine `<section>` pro Block (`aria-labelledby`, Schluss `aria-label`), `max-w-3xl`, Sektionsabstand `space-y-16`, Innenabstände `space-y-5`, keine Trennlinien, keine Listen, keine freistehenden Zitate. H1 `text-3xl sm:text-4xl`, H2 `text-2xl`. Grafik-Sektionen (2, 3): H2 volle Breite, darunter `flow-root`-Container mit `md:float-right`-Figure (~16rem, `md:ml-8`) – der Text umfließt die Grafik und läuft darunter weiter; mobil Grafik zentriert über dem Text.

Strings-Schlüssel: `hero` (mit `lead`), `problem`, `solution` (mit `paragraphs`, `order_alt`), `approach`, `closing`. Entfallen: `method`, `support`, `docsops`, `faq`, `contact`, `resource`, `collaboration`, `quote`/`body`/`outro`.

---

## Meta: Grafiken (eingebunden)

- `assets/img/hero-illustration-chaos.svg` – Problem
- `assets/img/hero-illustration-order.svg` – Ansatz + Angebot  
Nicht auf der Seite: `zettelkasten.svg`, `regal.svg`, `hero-illustration-order-thin.svg`

---

## Texte

Siehe `docs_engineering` in `_data/de/strings.yml` (EN parallel).

**H1:** Machen Sie das Wissen Ihrer Organisation nutzbar  
**Seitentitel / Nav:** Wissensmanagement (EN: Knowledge Management)
