---
lang: en
layout: project
title: GPT Translator App
projectname: Projects | GPT Translator App
description: Automated content translation and distribution in Telegram channels using GPT technology.
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

**Tech Stack:**

<ul>
{% for tech in page.techstack %}
<li>{{ tech }}</li>
{% endfor %}
</ul>

**Description**:

- Telethon-based application that translates posts from a third-party Telegram channel and shares them in your own channel.
- Uses the OpenAI API for translating the posts and the Telegram API for communication.
