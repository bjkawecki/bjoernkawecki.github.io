---
name: blog-writer
description: >-
  Guides co-authoring of bilingual Jekyll blog posts for this site through a
  three-stage workflow (context, section drafting, reader testing). Use when
  the user wants to write, draft, outline, or co-author a blog post, article,
  or Fachbeitrag; mentions Blogpost, Beitrag, _drafts, or post frontmatter.
---

# Blog-Writer (dieses Repo)

Aktiver Guide für Blogposts: Kontext → Abschnitte → Reader-Test. Ausgabe immer unter `_drafts/`.

## Wann anbieten

Trigger: „Blogpost“, „Beitrag schreiben“, „Artikel“, „draft“, „outline“, Co-Authoring.

Kurz die drei Stufen nennen und fragen, ob der Workflow starten soll. Ablehnung → freeform; Zustimmung → Stufe 1.

## Stil (verbindlich)

- Deutsch zuerst entwerfen; Englisch als Pendant, nicht als wörtliche Übersetzung
- Kein Gedankenstrich `—` (Bindestrich oder Satz umbauen)
- Kein „nicht …, sondern …“
- Generisches Maskulinum (keine Doppelformen, kein Genderstern)
- Fach-Essay: zeigen statt verkaufen; keine Landingpage-Blöcke, keine Lead-Magnet-CTAs
- Kurze Absätze; eine Idee pro Absatz

Details und Frontmatter: [reference.md](reference.md)

## SEO (leicht)

- Frontmatter-Feld `description:`: ca. 150–160 Zeichen, suchrelevant, inhaltstreu
- Im Text 1–2 interne Links (z. B. `/knowledge-management/`, verwandte Posts, Projekte)
- Kein Pflicht-FAQ, kein TL;DR-Zwang, keine Meta-Keyword-Stuffing-Listen

## Ausgabe

1. DE und EN als Markdown unter `_drafts/`
2. Dateinamen: `YYYY-MM-DD-slug.md` (Slug sprachspezifisch, siehe bestehende Drafts)
3. Frontmatter inkl. `page_id` (gemeinsam für DE/EN)
4. Eintrag in `_data/post_translations.yml` vorbereiten oder anlegen
5. Nicht nach `_posts/` verschieben, außer der User verlangt es ausdrücklich

---

## Stufe 1: Kontext

**Ziel:** Lücke zwischen User-Wissen und Agent schließen.

Meta-Fragen (Kurzantworten ok):

1. Thema / Arbeitstitel?
2. Primäre Sprache zuerst (meist DE)?
3. Zielgruppe und gewünschte Wirkung?
4. Kategorie (z. B. Documentation Engineering) oder neu?
5. Schon Material (Notizen, Links, ältere Posts)?

Danach zum Info-Dump einladen: These, Beispiele, Abgrenzung, offene Fragen. Nicht sortieren lassen.

Nach dem Dump 5–10 gezielte Rückfragen zu Lücken. Exit: Trade-offs und Randfälle sind klar, ohne Basics nachfragen zu müssen.

Übergang: Noch Kontext, oder weiter zu Stufe 2?

---

## Stufe 2: Struktur und Abschnitte

**Ziel:** Abschnitt für Abschnitt bauen.

1. Gliederung vorschlagen (3–6 H2, passend zur These). User bestätigt oder ändert.
2. Scaffold-Datei(en) unter `_drafts/` mit Frontmatter und Platzhaltern anlegen.
3. Pro Abschnitt:
   - kurze Klärfragen
   - 5–15 Bullet-Optionen brainstormen
   - User kuratiert (behalten / streichen / zusammenlegen)
   - Abschnitt schreiben
   - chirurgische Edits nach Feedback (`StrReplace`, nicht ganzen Text neu dumpfen)
4. Zusammenfassung und Einstieg zuletzt schärfen.
5. Gegen Ende Gesamtlektur: Fluss, Redundanz, Widersprüche, generischer Fülltext.

Reihenfolge: oft mit dem Kernabschnitt (These/Argument) starten, Meta/`description` und Schlusslinks am Schluss setzen.

Bei bilingualem Auftrag: DE zuerst fertig strukturieren; EN parallel oder direkt danach mit gleichem `page_id`.

---

## Stufe 3: Reader-Test

**Ziel:** Blindstellen finden, bevor der Text „fertig“ wirkt.

1. 5–8 realistische Leserfragen formulieren (Wonach würde jemand suchen?).
2. Frischen Blick simulieren:
   - wenn Subagent/`Task` verfügbar: Dokument + Frage ohne Chat-Kontext stellen
   - sonst: Fragen auflisten; User testet in neuer Session oder Agent beantwortet streng nur aus dem Draft-Text
3. Prüfen: Mehrdeutigkeiten, stillschweigende Voraussetzungen, Widersprüche.
4. Lücken in Stufe 2 nachziehen; erneut testen, bis die Fragen aus dem Text allein tragfähig beantwortbar sind.

## Abschluss

- User liest final selbst
- Fakten, Links, `description`-Länge prüfen
- Erinnern: Veröffentlichung = Datei nach `_posts/` + Build; Draft bleibt Draft

## Tipps

- User-Agentur: Stufen überspringbar, wenn ausdrücklich gewünscht
- Frustration: Tempo anbieten (weniger Optionen, kürzere Runden)
- Bestehende Posts/Drafts und `/knowledge-management/` als Ton- und Link-Referenz lesen, bevor der erste Abschnitt entsteht
