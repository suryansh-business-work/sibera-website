import { c as createComponent, f as renderComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute } from '../chunks/astro/server_Db4HblM3.mjs';
import 'kleur/colors';
import { $ as $$Page } from '../chunks/Page_CwCVTAVJ.mjs';
import { s as styleConfig } from '../chunks/style-config_DFpW0pmm.mjs';
export { renderers } from '../renderers.mjs';

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Page", $$Page, { "title": "Contact Us | Sibera", "description": "Get in touch with Sibera. Our team is here to help with sales, support, and general inquiries." }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="bg-white py-20 px-4 border-b border-gray-200"> <div class="max-w-7xl mx-auto text-center"> <h1 class="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
Get in Touch
</h1> <p class="text-xl text-gray-600 max-w-3xl mx-auto">
Have a question or need assistance? We're here to help. Choose how you'd
        like to reach us.
</p> </div> </section>  <section class="py-16 px-4 bg-gray-50"> <div class="max-w-7xl mx-auto"> <div class="grid lg:grid-cols-3 gap-8 mb-16"> <!-- Contact Methods --> <div class="lg:col-span-1"> <h2 class="text-2xl font-bold text-gray-900 mb-8">
Contact Information
</h2> <div class="space-y-6"> <!-- Email --> <div class="bg-white rounded-xl p-6 border-2 border-gray-100 hover:border-blue-500 transition-colors"> <div class="flex items-start gap-4"> <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0"> <i class="fa-solid fa-envelope text-blue-600 text-xl"></i> </div> <div> <h3 class="font-bold text-gray-900 mb-1">Email Us</h3> <p class="text-sm text-gray-600 mb-2">
For general inquiries
</p> <a href="mailto:hello@sibera.work" class="text-blue-600 hover:underline font-medium">
hello@sibera.work
</a> </div> </div> </div> <!-- Sales --> <div class="bg-white rounded-xl p-6 border-2 border-gray-100 hover:border-blue-500 transition-colors"> <div class="flex items-start gap-4"> <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0"> <i class="fa-solid fa-briefcase text-green-600 text-xl"></i> </div> <div> <h3 class="font-bold text-gray-900 mb-1">Sales</h3> <p class="text-sm text-gray-600 mb-2">
Questions about pricing
</p> <a href="mailto:sales@sibera.work" class="text-blue-600 hover:underline font-medium">
sales@sibera.work
</a> </div> </div> </div> <!-- Support --> <div class="bg-white rounded-xl p-6 border-2 border-gray-100 hover:border-blue-500 transition-colors"> <div class="flex items-start gap-4"> <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0"> <i class="fa-solid fa-headset text-purple-600 text-xl"></i> </div> <div> <h3 class="font-bold text-gray-900 mb-1">Support</h3> <p class="text-sm text-gray-600 mb-2">Technical assistance</p> <a href="mailto:support@sibera.work" class="text-blue-600 hover:underline font-medium">
support@sibera.work
</a> </div> </div> </div> <!-- Phone --> <div class="bg-white rounded-xl p-6 border-2 border-gray-100 hover:border-blue-500 transition-colors"> <div class="flex items-start gap-4"> <div class="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0"> <i class="fa-solid fa-phone text-orange-600 text-xl"></i> </div> <div> <h3 class="font-bold text-gray-900 mb-1">Phone</h3> <p class="text-sm text-gray-600 mb-2">Mon-Fri, 9am-6pm EST</p> <a href="tel:+1234567890" class="text-blue-600 hover:underline font-medium">
+1 (234) 567-890
</a> </div> </div> </div> </div> <!-- Quick Links --> <div class="mt-8 bg-white rounded-xl p-6 border-2 border-gray-100"> <h3 class="font-bold text-gray-900 mb-4">Quick Links</h3> <ul class="space-y-3"> <li> <a href="/support" class="text-gray-600 hover:text-blue-600 flex items-center gap-2"> <i class="fa-solid fa-arrow-right text-xs"></i>
Support Center
</a> </li> <li> <a href="/faq" class="text-gray-600 hover:text-blue-600 flex items-center gap-2"> <i class="fa-solid fa-arrow-right text-xs"></i>
FAQ
</a> </li> <li> <a href="/demo" class="text-gray-600 hover:text-blue-600 flex items-center gap-2"> <i class="fa-solid fa-arrow-right text-xs"></i>
Schedule a Demo
</a> </li> <li> <a href="/trial" class="text-gray-600 hover:text-blue-600 flex items-center gap-2"> <i class="fa-solid fa-arrow-right text-xs"></i>
Start Free Trial
</a> </li> </ul> </div> </div> <!-- Contact Form --> <div class="lg:col-span-2"> <div class="bg-white rounded-xl p-8 md:p-12 border-2 border-gray-100 shadow-sm"> <h2 class="text-3xl font-bold text-gray-900 mb-2">
Send Us a Message
</h2> <p class="text-gray-600 mb-8">
Fill out the form below and we'll get back to you within 24 hours.
</p> <form class="space-y-6" name="contact" method="POST" data-netlify="true"> <input type="hidden" name="form-name" value="contact"> <div class="grid md:grid-cols-2 gap-6"> <div> <label for="first-name" class="block text-sm font-semibold text-gray-700 mb-2">
First Name *
</label> <input type="text" id="first-name" name="first-name" required class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition" placeholder="John"> </div> <div> <label for="last-name" class="block text-sm font-semibold text-gray-700 mb-2">
Last Name *
</label> <input type="text" id="last-name" name="last-name" required class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition" placeholder="Doe"> </div> </div> <div> <label for="email" class="block text-sm font-semibold text-gray-700 mb-2">
Email Address *
</label> <input type="email" id="email" name="email" required class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition" placeholder="john@company.com" autocomplete="email"> </div> <div> <label for="company" class="block text-sm font-semibold text-gray-700 mb-2">
Company Name
</label> <input type="text" id="company" name="company" class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition" placeholder="Your Company Inc."> </div> <div> <label for="topic" class="block text-sm font-semibold text-gray-700 mb-2">
Topic *
</label> <select id="topic" name="topic" required class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"> <option value="">Select a topic</option> <option value="sales">Sales & Pricing</option> <option value="support">Technical Support</option> <option value="billing">Billing & Accounts</option> <option value="features">Features & Feedback</option> <option value="partnership">Partnership Opportunities</option> <option value="other">Other</option> </select> </div> <div> <label for="message" class="block text-sm font-semibold text-gray-700 mb-2">
Your Message *
</label> <textarea id="message" name="message" rows="6" required class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition resize-vertical" placeholder="Tell us how we can help you..."></textarea> </div> <div class="text-sm text-gray-600">
By submitting this form, you agree to our
<a href="/policies/terms" class="text-blue-600 hover:underline font-medium">Terms of Service</a>
and
<a href="/policies/privacy" class="text-blue-600 hover:underline font-medium">Privacy Policy</a>.
</div> <button type="submit"${addAttribute(styleConfig.buttons.primary + " w-full py-4 text-lg", "class")}>
Send Message
<i class="fa-solid fa-paper-plane ml-2"></i> </button> </form> </div> </div> </div> <!-- Office Locations (if applicable) --> <div class="bg-white rounded-xl p-8 border-2 border-gray-100"> <h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">
Our Office
</h2> <div class="max-w-2xl mx-auto"> <div class="flex items-start gap-6"> <div class="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0"> <i class="fa-solid fa-location-dot text-blue-600 text-2xl"></i> </div> <div> <h3 class="text-xl font-bold text-gray-900 mb-2">Headquarters</h3> <p class="text-gray-600 leading-relaxed">
123 Business Street<br>
San Francisco, CA 94102<br>
United States
</p> <p class="text-sm text-gray-500 mt-3">
Office Hours: Monday - Friday, 9:00 AM - 6:00 PM PST
</p> </div> </div> </div> </div> </div> </section>  <section class="py-16 px-4 bg-white border-t border-gray-200"> <div class="max-w-4xl mx-auto text-center"> <h2 class="text-3xl font-bold text-gray-900 mb-4">Connect With Us</h2> <p class="text-gray-600 mb-8">
Follow us on social media for updates and news
</p> <div class="flex justify-center gap-4"> ${[
    {
      icon: "twitter",
      name: "Twitter",
      url: "https://twitter.com/sibera"
    },
    {
      icon: "linkedin-in",
      name: "LinkedIn",
      url: "https://linkedin.com/company/sibera"
    },
    {
      icon: "facebook-f",
      name: "Facebook",
      url: "https://facebook.com/sibera"
    },
    {
      icon: "github",
      name: "GitHub",
      url: "https://github.com/sibera"
    }
  ].map((social) => renderTemplate`<a${addAttribute(social.url, "href")} target="_blank" rel="noopener noreferrer" class="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all"${addAttribute(social.name, "aria-label")}> <i${addAttribute(`fab fa-${social.icon} text-xl`, "class")}></i> </a>`)} </div> </div> </section> ` })}`;
}, "C:/Users/Suryansh/Desktop/Projects/Sibera/sibera-astro-js-website/src/pages/contact.astro", void 0);

const $$file = "C:/Users/Suryansh/Desktop/Projects/Sibera/sibera-astro-js-website/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
