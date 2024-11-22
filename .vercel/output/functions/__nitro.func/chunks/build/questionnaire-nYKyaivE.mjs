import { ref, computed, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrRenderStyle } from 'vue/server-renderer';
import { u as useQuestionnaireStore } from './questionnaire-bePnfAjy.mjs';
import 'pinia';

const _sfc_main = {
  __name: "questionnaire",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useQuestionnaireStore();
    const userDataSubmitted = ref(false);
    const currentQuestionIndex = ref(0);
    ref(null);
    const formData = ref({
      nom: "",
      prenom: "",
      email: "",
      contact: ""
    });
    const questions = computed(() => store.questions);
    const currentQuestion = computed(() => questions.value[currentQuestionIndex.value]);
    computed(() => currentQuestionIndex.value === questions.value.length - 1);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full h-screen flex items-center justify-center" }, _attrs))}>`);
      if (userDataSubmitted.value) {
        _push(`<nav class="fixed top-0 left-0 right-0 bg-white shadow p-4 z-50"><div class="container mx-auto flex items-center justify-between"><div class="flex items-center space-x-4"><div class="text-sm font-semibold"><p class="bg-orange-600 text-white rounded-full px-2 py-1">${ssrInterpolate(currentQuestionIndex.value + 1)}/${ssrInterpolate(questions.value.length)}</p></div><br><h2 class="text-3xl text-orange-500 drop-shadow-sm font-black">${ssrInterpolate(currentQuestion.value.texte)}</h2></div></div></nav>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div id="red" class="p-0">`);
      if (!userDataSubmitted.value) {
        _push(`<div class="bg-white p-6 rounded-lg shadow"><h2 class="text-2xl font-bold mb-6">Informations Personnelles</h2><form class="space-y-4"><div><label class="block mb-1">Nom</label><input${ssrRenderAttr("value", formData.value.nom)} type="text" required class="w-full border p-2 rounded"></div><div><label class="block mb-1">Pr\xE9nom</label><input${ssrRenderAttr("value", formData.value.prenom)} type="text" required class="w-full border p-2 rounded"></div><div><label class="block mb-1">Email</label><input${ssrRenderAttr("value", formData.value.email)} type="email" required class="w-full border p-2 rounded"></div><div><label class="block mb-1">Contact</label><input${ssrRenderAttr("value", formData.value.contact)} type="tel" required class="w-full border p-2 rounded"></div><button type="submit" class="w-full bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600"> Commencer le questionnaire </button></form></div>`);
      } else {
        _push(`<div class="h-screen flex flex-col"><div id="sabidi" class="flex-1 grid grid-cols-1 md:grid-cols-2 gap-2 p-2"><button class="w-full h-full rounded-lg shadow hover:opacity-90 transition relative overflow-hidden" style="${ssrRenderStyle({ backgroundImage: `url(${currentQuestion.value.imageA})`, backgroundSize: "cover", backgroundPosition: "center" })}"><p class="absolute inset-0 flex items-center justify-center bg-orange-500 bg-opacity-60 rounded drop-shadow-md text-white text-3xl font-black p-2">${ssrInterpolate(currentQuestion.value.optionA)}</p></button><button class="w-full h-full rounded-lg shadow hover:opacity-90 transition relative overflow-hidden" style="${ssrRenderStyle({ backgroundImage: `url(${currentQuestion.value.imageB})`, backgroundSize: "cover", backgroundPosition: "center" })}"><p class="absolute inset-0 flex items-center justify-center bg-lime-800 bg-opacity-60 rounded drop-shadow-md text-white text-3xl font-black p-2">${ssrInterpolate(currentQuestion.value.optionB)}</p></button></div></div>`);
      }
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/questionnaire.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=questionnaire-nYKyaivE.mjs.map
