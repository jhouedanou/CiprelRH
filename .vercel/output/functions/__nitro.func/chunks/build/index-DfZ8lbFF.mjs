import { _ as __nuxt_component_0 } from './nuxt-link-B2eMa8L8.mjs';
import { mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent } from 'vue/server-renderer';
import { p as publicAssetsURL } from '../routes/renderer.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import './server.mjs';
import 'pinia';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';

const _imports_0 = publicAssetsURL("/images/logo.webp");
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen flex flex-col items-center justify-center px-4" }, _attrs))}><div class="max-w-3xl w-full bg-white rounded-2xl shadow-xl p-8 text-center"><img${ssrRenderAttr("src", _imports_0)} alt="CIPREL Logo" class="h-24 mx-auto mb-8"><h1 class="text-3xl font-bold text-gray-900 mb-4">Questionnaire d&#39;orientation - CIPREL</h1><p class="text-lg text-gray-600 mb-8">D\xE9couvrez le d\xE9partement qui correspond le mieux \xE0 vos comp\xE9tences</p>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/questionnaire",
    class: "inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-white bg-orange-500 hover:bg-orange-700 focus:ring-4 focus:ring-orange-200 transition-colors"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Commencer le questionnaire `);
      } else {
        return [
          createTextVNode(" Commencer le questionnaire ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-DfZ8lbFF.mjs.map
