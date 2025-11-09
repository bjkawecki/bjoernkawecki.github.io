---
layout: default
title: Über mich
permalink: /
lang: de
page_id: about-me
---

{% include home/hero.html %}
{% include home/skills.html %}
{% include home/blog.html %}

<section class="space-y-6">
  <div class="space-y-4">
    <h2 class="text-2xl font-semibold text-gray-900 lg:text-3xl dark:text-gray-100">Know-how im Überblick</h2>
    <p class="max-w-3xl text-base leading-relaxed text-gray-700 dark:text-gray-300">
      Ich kombiniere fundierte Sprach- und Kulturkompetenz mit praxisnaher Softwareentwicklung. So entstehen Lösungen, die auf Unterrichtsalltag und Infrastruktur abgestimmt sind.
    </p>
  </div>
  <div class="grid gap-6 md:grid-cols-2">
    <div class="p-6 border rounded-2xl border-gray-200 bg-white/80 shadow-sm dark:border-zinc-700 dark:bg-zinc-900/70">
      <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100">Technologien</h3>
      <ul class="mt-3 space-y-2 text-sm text-gray-700 dark:text-gray-300">
        <li><strong>Sprachen:</strong> Python, JavaScript, Bash</li>
        <li><strong>Frontend:</strong> HTML, CSS, Tailwind, HTMX</li>
        <li><strong>Backend:</strong> Django, FastAPI, aiogram</li>
        <li><strong>DevOps:</strong> Linux, Docker, AWS, GitHub, Coolify</li>
      </ul>
    </div>
    <div class="p-6 space-y-4 border rounded-2xl border-gray-200 bg-white/80 shadow-sm dark:border-zinc-700 dark:bg-zinc-900/70">
      <div>
        <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100">Zertifikate</h3>
        <a
          class="inline-flex items-center gap-1 mt-2 text-sm font-semibold text-blue-600 transition hover:text-blue-800 dark:text-fuchsia-400 dark:hover:text-fuchsia-300"
          href="https://www.credly.com/badges/444a285b-5e6a-43ca-83ac-da3be1002422"
          target="_blank"
          rel="noopener noreferrer"
        >
          AWS Certified Cloud Practitioner
          <svg
            class="w-4 h-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path
              d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"
            />
          </svg>
        </a>
      </div>
      <div>
        <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100">Abschlüsse</h3>
        <ul class="mt-2 space-y-2 text-sm text-gray-700 dark:text-gray-300">
          <li>B.A. Russlandstudien/Philosophie, Universität Freiburg</li>
          <li>M.A. Russlandstudien, Universität Freiburg / RGGU Moskau</li>
        </ul>
      </div>
      <a
        class="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition hover:text-blue-800 dark:text-fuchsia-400 dark:hover:text-fuchsia-300"
        href="/assets/files/bjoern-kawecki-resume.pdf"
      >
        <span>Resume als PDF</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-4 h-4"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path
            d="M5,20H19V18H5V20M19,14H15V4H9V14H5L12,21L19,14Z"
          />
        </svg>
      </a>
    </div>
  </div>
</section>

{% include home/journey.html %}

{% include home/contact.html %}
