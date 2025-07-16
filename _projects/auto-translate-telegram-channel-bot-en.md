---
layout: project
lang: en
title: GPT Translator Bot
projectname: Projects | GPT Translator Bot
description: Telegram bot that receives messages from an input channel, translates them, and forwards them to an output channel.
started: 2025
uri: https://github.com/bjkawecki/Telegram-GPT-Translator-Bot
uri_h:
status:
category: Telegram Bot
techstack: Terraform, AWS, Python, Telegram Webhook, OpenAI API
---

**Code**: [github.com/bjkawecki/Telegram-GPT-Translator-Bot]({{ page.uri }})

**Tech Stack:** {{ page.techstack }}

**Description**:

- As soon as a new post appears in the source channel, it is sent via webhook to an AWS Lambda function.
- The Lambda function sends the text to the OpenAI API for translation.
- The translated post is then published in the designated output channel.
