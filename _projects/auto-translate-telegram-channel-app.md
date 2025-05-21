---
layout: project
title: Telegram GPT Translator App
projectname: Projekte | Telegram GPT Translator App
description: Automatisierte, GPT-gestützte Übersetzung und Veröffentlichung von Inhalten in Telegram-Kanälen.
started: 2025
uri: https://github.com/bjkawecki/Auto-Translate-Telegram-Channel
uri_h:
status:
category: Web App
techstack:
  - Terraform
  - AWS
  - Docker
  - Python
  - Telethon
  - OpenAI API
  - Flask
---

**Code**: [github.com/bjkawecki/Auto-Translate-Telegram-Channel]({{ page.uri }})

**Techstack:**

<ul>
{% for tech in page.techstack %}
<li>{{ tech }}</li>
{% endfor %}
</ul>

**Beschreibung**:

- Telethon-Anwendung, die Beiträge aus einem fremden Telegram-Kanal übersetzt und in einem eigenen Kanal teilt.
- Verwendet OpenAI API zur Übersetzung der Beiträge und nutzt die Telegram-API für die Kommunikation.
