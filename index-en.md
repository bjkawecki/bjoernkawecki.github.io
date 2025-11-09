---
layout: default
title: About Me
permalink: /
lang: en
page_id: about-me
---

{% include home/hero.html %}
<section class="space-y-6">
  <div class="space-y-3">
    <h2 class="text-2xl font-semibold text-gray-900 md:text-[2rem] dark:text-gray-100">Certificates &amp; profile</h2>
    <p class="max-w-3xl text-sm leading-relaxed text-gray-700 dark:text-gray-300">
      Linguistics background, work with education teams, now full-stack delivery in Berlin covering architecture, operations, and automation end to end.
    </p>
  </div>
  <div class="grid gap-4 md:grid-cols-2">
    <div class="p-5 space-y-3 border rounded-xl border-gray-200 bg-white/70 dark:border-zinc-700 dark:bg-zinc-900/70">
      <ul class="space-y-2 text-sm text-gray-700 dark:text-gray-300">
        <li>• AWS Certified Cloud Practitioner</li>
        <li>• B.A. &amp; M.A. Russian Studies – communication &amp; analytical skills</li>
      </ul>
      <div class="flex flex-wrap gap-2">
        <a
          class="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white transition bg-blue-600 rounded-full hover:bg-blue-700 dark:bg-fuchsia-600 dark:hover:bg-fuchsia-500"
          href="/en/assets/files/bjoern-kawecki-resume-en.pdf"
        >
          Résumé (EN)
        </a>
        <a
          class="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-blue-600 transition border rounded-full border-blue-300 hover:border-blue-500 hover:text-blue-600 dark:border-fuchsia-500 dark:text-fuchsia-200 dark:hover:border-fuchsia-400 dark:hover:text-fuchsia-100"
          href="/assets/files/bjoern-kawecki-resume.pdf"
        >
          Lebenslauf (DE)
        </a>
      </div>
    </div>
    <div class="p-5 border rounded-xl border-gray-200 bg-white/70 dark:border-zinc-700 dark:bg-zinc-900/70">
      <ul class="space-y-2 text-sm text-gray-700 dark:text-gray-300">
        <li><strong>Backend:</strong> Python, Django, FastAPI, Celery</li>
        <li><strong>Frontend:</strong> JavaScript, HTMX, Tailwind CSS</li>
        <li><strong>Automation:</strong> Web scraping, data pipelines, AI integrations</li>
        <li><strong>Infra:</strong> Linux, Docker, Terraform, GitHub Actions, AWS</li>
      </ul>
    </div>
  </div>
</section>

{% include home/contact.html %}
