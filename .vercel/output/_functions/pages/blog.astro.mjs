import { c as createComponent, f as renderComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute } from '../chunks/astro/server_Db4HblM3.mjs';
import 'kleur/colors';
import { $ as $$Page } from '../chunks/Page_DI-YSTEV.mjs';
import { b as blogPosts } from '../chunks/blog-data_tH6QxK7Z.mjs';
export { renderers } from '../renderers.mjs';

const $$Blog = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Page", $$Page, { "title": "Blog | Botify Life", "description": "Read the latest articles, tips, and updates from Botify Life.", "pageUrl": "/blog" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="bg-gradient-to-b from-indigo-50 to-white min-h-screen pt-20 pb-12 px-4"> <section class="max-w-6xl mx-auto"> <h1 class="text-3xl font-bold text-gray-900 mb-8 text-center">Blog</h1> <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3"> ${blogPosts.map((post) => renderTemplate`<article class="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-xs flex flex-col h-full"> <img alt=""${addAttribute(post.image, "src")} class="w-full object-cover" style="height:250px;"> <div class="p-4 sm:p-6 flex flex-col flex-1"> <a${addAttribute(`/blog/${post.slug}`, "href")}> <h3 class="text-lg font-medium text-gray-900"> ${post.title} </h3> </a> <time${addAttribute(post.date, "datetime")} class="block text-xs text-gray-400 mt-1"> ${post.displayDate} </time> <p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-500"> ${post.excerpt} </p> <a${addAttribute(`/blog/${post.slug}`, "href")} class="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600">
Find out more
<span aria-hidden="true" class="block transition-all group-hover:ms-0.5 rtl:rotate-180">
&rarr;
</span> </a> </div> </article>`)} </div> </section> </main> ` })}`;
}, "C:/Users/Suryansh/Desktop/Projects/Sibera/sibera-astro-js-website/src/pages/blog.astro", void 0);

const $$file = "C:/Users/Suryansh/Desktop/Projects/Sibera/sibera-astro-js-website/src/pages/blog.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Blog,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
