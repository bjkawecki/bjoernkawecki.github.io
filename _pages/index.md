---
layout: default
title: Start
permalink: /
---
<h1>Weblog</h1>
{% assign psize = site.posts | size %}
{% if psize == 0 %}
Kein Einträge vorhanden.
{% else %}
{% for post in site.posts %}
<h4>{{ post.category | capitalize }}</h4>
<h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
<p>{{ post.date | date: "%-d.%m.%Y" }}</p>
{% if forloop.last == false %}
---
{% endif %}
{% endfor %}
{% endif %}
