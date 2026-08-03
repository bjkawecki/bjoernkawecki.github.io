# Blog-Writer – Referenz

## Frontmatter-Vorlage

```yaml
---
layout: post
title: "Klarer Titel mit Suchbegriff, wo sinnvoll"
description: "150–160 Zeichen: Nutzen/These, ohne Clickbait."
date: YYYY-MM-DD
lang: de          # bzw. en
locale: de        # bzw. en
page_id: gemeinsamer-schluessel
category: Documentation Engineering
---
```

- `description` steuert u. a. `og:description` im Post-Layout.
- `page_id` muss in DE und EN identisch sein.
- Dateiname-Slug nach dem Datum = Eintrag in `_data/post_translations.yml`.

## post_translations.yml

```yaml
mein-page-id:
  de: deutscher-slug-ohne-datum
  en: english-slug-without-date
```

Beispiel bestehend: `strukturierte-dokumentation` → DE `strukturierte-dokumentation`, EN `why-structured-documentation`.

## Interne Link-Ziele (häufig)

- `/knowledge-management/` (EN parallel unter `/en/…` bzw. relativ wie in bestehenden Texten)
- `/software-development/`
- `/projects/docs-ops/`, `/projects/filingo/`
- Verwandte Blogposts (nach Recherche in `_drafts/` / `_posts/`)

Links im Markdown wie in bestehenden Drafts: absolute Pfade ab Root, z. B. `[Wissensmanagement](/knowledge-management/)`.

## Stilfeinschliff

| Vermeiden | Stattdessen |
|-----------|----------------|
| Gedankenstrich `—` | Punkt, Komma, oder Bindestrich in Komposita |
| „nicht X, sondern Y“ | Zwei klare Aussagen oder eine positive Formulierung |
| „man“ / Genderstern / Doppelpunktinnen | Generisches Maskulinum |
| Agentur-Floskeln, Feature-Listen als Verkauf | Konkrete Situation, Entscheidung, Folge |

## Qualität vor Publish

- [ ] These im ersten Bildschirm klar
- [ ] `description` 150–160 Zeichen, trifft den Inhalt
- [ ] 1–2 interne Links gesetzt
- [ ] DE und EN mit gleichem `page_id`
- [ ] `post_translations.yml` aktualisiert
- [ ] Reader-Test-Fragen aus dem Text allein beantwortbar
- [ ] Dateien liegen in `_drafts/`, nicht ungebeten in `_posts/`
