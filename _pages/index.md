---
layout: default
title: Start
permalink: /
---
{% assign psize = site.posts | size %}
{% if psize == 0 %}
Kein Einträge vorhanden.
{% else %}
<ul>
    {% for post in site.posts %}
        <li>
        <a href="{{ post.url }}">{{ post.title }}</a>
        </li>
    {% endfor %}
</ul>
{% endif %}