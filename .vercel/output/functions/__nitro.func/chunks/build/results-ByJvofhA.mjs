import { computed, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderStyle } from 'vue/server-renderer';
import { u as useQuestionnaireStore } from './questionnaire-bePnfAjy.mjs';
import { createClient } from '@supabase/supabase-js';
import 'pinia';

const useSupabase = () => {
  const supabase = createClient(
    "https://nbqssxhroavedcnjloys.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5icXNzeGhyb2F2ZWRjbmpsb3lzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzIyODgzNzcsImV4cCI6MjA0Nzg2NDM3N30.nlYK3l6l4wDqeWEEMknBSsBzlt0bLlFLGkFkbaluZj0"
  );
  const saveResults = async (data) => {
    return await supabase.from("questionnaire_results").insert(data);
  };
  return {
    saveResults
  };
};
const _sfc_main = {
  __name: "results",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useQuestionnaireStore();
    const results = computed(() => store.calculateResults());
    useSupabase();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen py-12 px-4 sm:px-6 lg:px-8" }, _attrs))}><div class="max-w-3xl mx-auto"><div id="capture-zone" class="bg-white rounded-2xl shadow-xl p-8">`);
      if (unref(results)) {
        _push(`<div class="space-y-8"><div class="bg-orange-50 rounded-xl p-6 border border-orange-100"><h3 class="text-xl font-semibold text-orange-900 mb-3">D\xE9partement recommand\xE9</h3><p class="text-2xl text-orange-600 font-bold">${ssrInterpolate(unref(results).departement)}</p></div><div class="space-y-6"><h3 class="text-xl font-semibold text-gray-900 mb-6">Vos scores par comp\xE9tence</h3><div class="grid gap-6"><div class="bg-white rounded-lg p-4 border border-gray-200 hover:shadow-md transition-shadow"><div class="flex justify-between items-center mb-2"><span class="text-lg font-medium text-gray-700">Force Collective</span><span class="text-lg font-bold text-orange-600">${ssrInterpolate(unref(results).scores.forceCollective)}/10</span></div><div class="w-full bg-gray-200 rounded-full h-2.5"><div class="bg-orange-500 h-2.5 rounded-full" style="${ssrRenderStyle({ width: `${unref(results).scores.forceCollective / 10 * 100}%` })}"></div></div></div><div class="bg-white rounded-lg p-4 border border-gray-200 hover:shadow-md transition-shadow"><div class="flex justify-between items-center mb-2"><span class="text-lg font-medium text-gray-700">\xC9quit\xE9</span><span class="text-lg font-bold text-orange-600">${ssrInterpolate(unref(results).scores.equite)}/10</span></div><div class="w-full bg-gray-200 rounded-full h-2.5"><div class="bg-orange-500 h-2.5 rounded-full" style="${ssrRenderStyle({ width: `${unref(results).scores.equite / 10 * 100}%` })}"></div></div></div><div class="bg-white rounded-lg p-4 border border-gray-200 hover:shadow-md transition-shadow"><div class="flex justify-between items-center mb-2"><span class="text-lg font-medium text-gray-700">Engagement</span><span class="text-lg font-bold text-orange-600">${ssrInterpolate(unref(results).scores.engagement)}/10</span></div><div class="w-full bg-gray-200 rounded-full h-2.5"><div class="bg-orange-500 h-2.5 rounded-full" style="${ssrRenderStyle({ width: `${unref(results).scores.engagement / 10 * 100}%` })}"></div></div></div><div class="bg-white rounded-lg p-4 border border-gray-200 hover:shadow-md transition-shadow"><div class="flex justify-between items-center mb-2"><span class="text-lg font-medium text-gray-700">Respect</span><span class="text-lg font-bold text-orange-600">${ssrInterpolate(unref(results).scores.respect)}/10</span></div><div class="w-full bg-gray-200 rounded-full h-2.5"><div class="bg-orange-500 h-2.5 rounded-full" style="${ssrRenderStyle({ width: `${unref(results).scores.respect / 10 * 100}%` })}"></div></div></div><div class="bg-white rounded-lg p-4 border border-gray-200 hover:shadow-md transition-shadow"><div class="flex justify-between items-center mb-2"><span class="text-lg font-medium text-gray-700">Innovation</span><span class="text-lg font-bold text-orange-600">${ssrInterpolate(unref(results).scores.innovation)}/10</span></div><div class="w-full bg-gray-200 rounded-full h-2.5"><div class="bg-orange-500 h-2.5 rounded-full" style="${ssrRenderStyle({ width: `${unref(results).scores.innovation / 10 * 100}%` })}"></div></div></div><div class="bg-white rounded-lg p-4 border border-gray-200 hover:shadow-md transition-shadow"><div class="flex justify-between items-center mb-2"><span class="text-lg font-medium text-gray-700">Convivialit\xE9</span><span class="text-lg font-bold text-orange-600">${ssrInterpolate(unref(results).scores.convivialite)}/10</span></div><div class="w-full bg-gray-200 rounded-full h-2.5"><div class="bg-orange-500 h-2.5 rounded-full" style="${ssrRenderStyle({ width: `${unref(results).scores.convivialite / 10 * 100}%` })}"></div></div></div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="mt-10 text-center"><button class="ml-4 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-colors m-4"> Partager mon \xE9valuation </button><button class="ml-4 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-colors m-4"> T\xE9l\xE9charger mon \xE9valuation </button><button class="ml-4 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-colors m-4"> Retourner \xE0 l&#39;accueil </button></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/results.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=results-ByJvofhA.mjs.map
