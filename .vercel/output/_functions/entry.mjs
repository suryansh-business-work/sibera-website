import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_RjF2nag_.mjs';
import { manifest } from './manifest_BFXD-2Ju.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/about.astro.mjs');
const _page2 = () => import('./pages/academy.astro.mjs');
const _page3 = () => import('./pages/affiliate.astro.mjs');
const _page4 = () => import('./pages/all-products.astro.mjs');
const _page5 = () => import('./pages/app/_slug_.astro.mjs');
const _page6 = () => import('./pages/blog/_slug_.astro.mjs');
const _page7 = () => import('./pages/blog.astro.mjs');
const _page8 = () => import('./pages/careers/openpositions.astro.mjs');
const _page9 = () => import('./pages/careers.astro.mjs');
const _page10 = () => import('./pages/contact.astro.mjs');
const _page11 = () => import('./pages/copyright.astro.mjs');
const _page12 = () => import('./pages/custom-solutions.astro.mjs');
const _page13 = () => import('./pages/customers.astro.mjs');
const _page14 = () => import('./pages/demo.astro.mjs');
const _page15 = () => import('./pages/errors/404.astro.mjs');
const _page16 = () => import('./pages/faq.astro.mjs');
const _page17 = () => import('./pages/forum.astro.mjs');
const _page18 = () => import('./pages/free-tools.astro.mjs');
const _page19 = () => import('./pages/hire-developers.astro.mjs');
const _page20 = () => import('./pages/partners.astro.mjs');
const _page21 = () => import('./pages/policies/cookies.astro.mjs');
const _page22 = () => import('./pages/policies/data.astro.mjs');
const _page23 = () => import('./pages/policies/privacy.astro.mjs');
const _page24 = () => import('./pages/policies/terms.astro.mjs');
const _page25 = () => import('./pages/pricing.astro.mjs');
const _page26 = () => import('./pages/products/files.astro.mjs');
const _page27 = () => import('./pages/products/invoice.astro.mjs');
const _page28 = () => import('./pages/products/iot.astro.mjs');
const _page29 = () => import('./pages/products/support.astro.mjs');
const _page30 = () => import('./pages/products/tasks.astro.mjs');
const _page31 = () => import('./pages/products/time-tracker.astro.mjs');
const _page32 = () => import('./pages/sitemap.astro.mjs');
const _page33 = () => import('./pages/sitemap.xml.astro.mjs');
const _page34 = () => import('./pages/startups.astro.mjs');
const _page35 = () => import('./pages/support.astro.mjs');
const _page36 = () => import('./pages/test.astro.mjs');
const _page37 = () => import('./pages/trial.astro.mjs');
const _page38 = () => import('./pages/webinar.astro.mjs');
const _page39 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/about.astro", _page1],
    ["src/pages/academy.astro", _page2],
    ["src/pages/affiliate.astro", _page3],
    ["src/pages/all-products.astro", _page4],
    ["src/pages/app/[slug].astro", _page5],
    ["src/pages/blog/[slug].astro", _page6],
    ["src/pages/blog.astro", _page7],
    ["src/pages/careers/OpenPositions.astro", _page8],
    ["src/pages/careers/index.astro", _page9],
    ["src/pages/contact.astro", _page10],
    ["src/pages/copyright.astro", _page11],
    ["src/pages/custom-solutions.astro", _page12],
    ["src/pages/customers.astro", _page13],
    ["src/pages/demo.astro", _page14],
    ["src/pages/errors/404.astro", _page15],
    ["src/pages/faq.astro", _page16],
    ["src/pages/forum.astro", _page17],
    ["src/pages/free-tools.astro", _page18],
    ["src/pages/hire-developers.astro", _page19],
    ["src/pages/partners.astro", _page20],
    ["src/pages/policies/cookies.astro", _page21],
    ["src/pages/policies/data.astro", _page22],
    ["src/pages/policies/privacy.astro", _page23],
    ["src/pages/policies/terms.astro", _page24],
    ["src/pages/pricing.astro", _page25],
    ["src/pages/products/files.astro", _page26],
    ["src/pages/products/invoice.astro", _page27],
    ["src/pages/products/iot.astro", _page28],
    ["src/pages/products/support.astro", _page29],
    ["src/pages/products/tasks.astro", _page30],
    ["src/pages/products/time-tracker.astro", _page31],
    ["src/pages/sitemap.astro", _page32],
    ["src/pages/sitemap.xml.astro", _page33],
    ["src/pages/startups.astro", _page34],
    ["src/pages/support.astro", _page35],
    ["src/pages/test.astro", _page36],
    ["src/pages/trial.astro", _page37],
    ["src/pages/webinar.astro", _page38],
    ["src/pages/index.astro", _page39]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "c317841d-e0a5-4039-b317-9e832e423134",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
