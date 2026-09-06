---
layout: blog
title: Blog
permalink: /
lang: en
page_id: blog
pagination:
  enabled: true
  per_page: 5
  sort_field: 'date'
  sort_reverse: true
  locale: en
---

{% assign strings = site.data[site.active_lang].strings %}

{% if paginator and paginator.posts.size > 0 %}
{% assign blog_posts = paginator.posts %}
<section class="mx-auto max-w-3xl space-y-16" aria-label="{{ strings.navigation.blog }}">
  <h1 class="sr-only">{{ strings.navigation.blog }}</h1>
  {% for post in blog_posts %}
  <a href="{{ post.url }}" class="group block space-y-3 transition">
    <article class="space-y-3">
      <p class="text-xs font-medium uppercase tracking-wide text-accent-600 dark:text-accent-400">
        {{ post.date | date: "%d %b %Y" }}
      </p>
      <h2 class="text-2xl font-medium tracking-tight text-gray-900 transition group-hover:text-accent-600 group-focus-visible:text-accent-600 dark:text-gray-100 dark:group-hover:text-accent-400 dark:group-focus-visible:text-accent-400 sm:text-3xl">
        {{ post.title }}
      </h2>
      <p class="text-base leading-relaxed text-gray-700 transition group-hover:text-gray-800 group-focus-visible:text-gray-800 dark:text-gray-300 dark:group-hover:text-gray-200 dark:group-focus-visible:text-gray-200">
        {{ post.excerpt | strip_html | truncate: 200 }}
      </p>
    </article>
  </a>
  {% endfor %}
</section>
{% else %}
<section class="mx-auto max-w-3xl">
  <h1 class="sr-only">{{ strings.navigation.blog }}</h1>
  <p class="text-base text-gray-600 dark:text-gray-300">
    {{ strings.no_entries.blog }}
  </p>
</section>
{% endif %}
