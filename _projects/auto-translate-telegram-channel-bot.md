---
layout: project
title: GPT Translator Bot
projectname: Projekte | GPT Translator Bot
description: Telegram-Bot, der Nachrichten aus einem Eingabekanal aufnimmt, übersetzt und an einen Ausgabekanal weiterleitet.
started: 2025
uri: https://github.com/bjkawecki/Telegram-GPT-Translator-Bot
uri_h:
status:
category: Telegram Bot
techstack: Terraform, AWS, Python, Telegram Webhook, OpenAI API
---

**Code**: [github.com/bjkawecki/Telegram-GPT-Translator-Bot]({{ page.uri }})

**Techstack:** {{ page.techstack }}

**Beschreibung**:

- Sobald im Quellkanal ein neuer Beitrag erscheint, wird dieser per Webhook an eine AWS Lambda-Funktion gesendet.
- Die Lambda-Funktion schickt den enthaltenen Text zur Übersetzung an die OpenAI API.
- Der übersetzte Beitrag wird im festgelegten Ausgabekanal veröffentlicht.
