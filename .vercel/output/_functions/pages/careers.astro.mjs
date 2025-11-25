import { c as createComponent, f as renderComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute } from '../chunks/astro/server_Db4HblM3.mjs';
import 'kleur/colors';
import { $ as $$Page } from '../chunks/Page_DI-YSTEV.mjs';
import { $ as $$OpenPositions } from '../chunks/OpenPositions_DjZvqqY8.mjs';
import { s as styleConfig } from '../chunks/style-config_DFpW0pmm.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const benefits = [
    {
      icon: "fa-solid fa-coins",
      title: "Competitive Salary",
      description: "Market-leading compensation packages with performance bonuses and equity options"
    },
    {
      icon: "fa-solid fa-heart-pulse",
      title: "Health & Wellness",
      description: "Comprehensive health insurance, mental health support, and wellness programs"
    },
    {
      icon: "fa-solid fa-clock",
      title: "Flexible Schedule",
      description: "Work-life balance with flexible hours and remote-first culture"
    },
    {
      icon: "fa-solid fa-graduation-cap",
      title: "Learning & Development",
      description: "Annual learning budget, conferences, and skill development opportunities"
    },
    {
      icon: "fa-solid fa-plane-departure",
      title: "Paid Time Off",
      description: "Generous PTO policy including vacation days, sick leave, and public holidays"
    },
    {
      icon: "fa-solid fa-laptop",
      title: "Latest Equipment",
      description: "Top-tier laptops, monitors, and tools you need to do your best work"
    }
  ];
  const values = [
    {
      title: "Innovation First",
      description: "We embrace cutting-edge technology and encourage creative problem-solving",
      color: "#3b82f6"
    },
    {
      title: "Customer Success",
      description: "Our customers' success drives everything we do",
      color: "#8b5cf6"
    },
    {
      title: "Transparency",
      description: "Open communication, honest feedback, and shared knowledge",
      color: "#06b6d4"
    },
    {
      title: "Continuous Growth",
      description: "Always learning, improving, and pushing boundaries",
      color: "#10b981"
    }
  ];
  return renderTemplate`${renderComponent($$result, "Page", $$Page, { "title": "Careers at Sibera | Join Our Team", "description": "Join Sibera and help build the future of business automation. Explore remote career opportunities in engineering, product, design, and more." }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="relative h-[600px] flex items-center justify-center overflow-hidden"> <!-- Background Image --> <div class="absolute inset-0 z-0"> <img src="https://images.pexels.com/photos/4065133/pexels-photo-4065133.jpeg" alt="Team working together" class="w-full h-full object-cover"> <div class="absolute inset-0 bg-gray-900/70"></div> </div> <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"> <h1${addAttribute(styleConfig.typography.h1 + " text-white mb-6 tracking-tight", "class")}>
Build the Future with <span class="text-blue-400">Sibera</span> </h1> <p class="text-xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed">
Join our mission to empower businesses worldwide with innovative
        automation solutions. We're looking for passionate, talented individuals
        to help shape the future of work.
</p> <div class="flex flex-wrap justify-center gap-8 mb-12"> <div class="text-center"> <div class="text-3xl font-bold text-white mb-1">50+</div> <div class="text-sm text-gray-300 uppercase tracking-wider">
Team Members
</div> </div> <div class="w-px h-12 bg-gray-700 hidden sm:block"></div> <div class="text-center"> <div class="text-3xl font-bold text-white mb-1">Remote</div> <div class="text-sm text-gray-300 uppercase tracking-wider">
First Culture
</div> </div> <div class="w-px h-12 bg-gray-700 hidden sm:block"></div> <div class="text-center"> <div class="text-3xl font-bold text-white mb-1">6</div> <div class="text-sm text-gray-300 uppercase tracking-wider">
Open Positions
</div> </div> </div> <a href="#open-positions"${addAttribute(styleConfig.buttons.primary.replace(
    "from-blue-600 to-blue-500",
    "bg-blue-600 hover:bg-blue-700"
  ), "class")}> <span>View Open Positions</span> <i class="fa-solid fa-arrow-down ml-2"></i> </a> </div> </section>  <section class="py-20 bg-white"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="text-center mb-16"> <h2${addAttribute(styleConfig.typography.h2 + " text-gray-900 mb-4", "class")}>
Our Core Values
</h2> <p class="text-lg text-gray-600">
The principles that guide everything we do
</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"> ${values.map((value) => renderTemplate`<div${addAttribute(
    styleConfig.cards.feature + " hover:shadow-lg transition-all duration-300 group",
    "class"
  )}> <div class="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"> <div class="w-3 h-3 rounded-full"${addAttribute(`background-color: ${value.color}`, "style")}></div> </div> <h3${addAttribute(styleConfig.typography.h3 + " text-gray-900 mb-3", "class")}> ${value.title} </h3> <p class="text-gray-600 leading-relaxed">${value.description}</p> </div>`)} </div> </div> </section>  <section class="py-20 bg-gray-50"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="text-center mb-16"> <h2${addAttribute(styleConfig.typography.h2 + " text-gray-900 mb-4", "class")}>
Why Work at Sibera
</h2> <p class="text-lg text-gray-600">
We invest in our team's success and well-being
</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> ${benefits.map((benefit) => renderTemplate`<div${addAttribute(styleConfig.cards.default + " p-8", "class")}> <div class="w-14 h-14 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center text-2xl mb-6"> <i${addAttribute(benefit.icon, "class")}></i> </div> <h3${addAttribute(styleConfig.typography.h3 + " text-gray-900 mb-3", "class")}> ${benefit.title} </h3> <p class="text-gray-600 leading-relaxed">${benefit.description}</p> </div>`)} </div> </div> </section>  <div id="open-positions"> ${renderComponent($$result2, "OpenPositions", $$OpenPositions, {})} </div>  <section class="py-20 bg-gray-900 text-white"> <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"> <h2${addAttribute(styleConfig.typography.h2 + " mb-6", "class")}>
Don't See the Right Role?
</h2> <p class="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
We're always looking for talented individuals. Send us your resume and
        let us know how you'd like to contribute to Sibera.
</p> <a href="mailto:careers@sibera.work" class="inline-flex items-center gap-3 px-8 py-4 bg-white text-[#333] font-bold rounded-xl hover:bg-gray-100 transition-colors duration-300"> <i class="fa-solid fa-envelope text-[#333]"></i> <span class="text-[#333]">Email Your Resume</span> </a> </div> </section> ` })}`;
}, "C:/Users/Suryansh/Desktop/Projects/Sibera/sibera-astro-js-website/src/pages/careers/index.astro", void 0);

const $$file = "C:/Users/Suryansh/Desktop/Projects/Sibera/sibera-astro-js-website/src/pages/careers/index.astro";
const $$url = "/careers";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
