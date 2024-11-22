import { defineStore } from 'pinia';

const useQuestionnaireStore = defineStore("questionnaire", {
  state: () => ({
    userData: null,
    questions: [
      {
        id: 1,
        texte: "Lorsqu'un d\xE9fi complexe survient, pr\xE9f\xE9rez-vous :",
        optionA: "Travailler avec d'autres pour trouver une solution",
        optionB: "Trouver une solution par vous-m\xEAme",
        imageA: "/images/questions/1a.webp",
        imageB: "/images/questions/1b.webp",
        categorie: "forceCollective"
      },
      {
        id: 2,
        texte: "En cas de conflit, privil\xE9giez-vous :",
        optionA: "Une solution juste pour toutes les parties",
        optionB: "Une solution rapide pour apaiser la situation",
        imageA: "/images/questions/2a.webp",
        imageB: "/images/questions/2b.webp",
        categorie: "equite"
      },
      {
        id: 3,
        texte: "Face \xE0 un objectif ambitieux, \xEAtes-vous :",
        optionA: "Excit\xE9 par le d\xE9fi et pr\xEAt \xE0 vous d\xE9passer",
        optionB: "Pr\xE9f\xE9rant travailler sur des objectifs plus r\xE9alistes",
        imageA: "/images/questions/3a.webp",
        imageB: "/images/questions/3b.webp",
        categorie: "engagement"
      },
      {
        id: 4,
        texte: "Lorsqu'une nouvelle proc\xE9dure est mise en place, vous :",
        optionA: "Suivez les consignes scrupuleusement pour \xE9viter les erreurs",
        optionB: "Adaptez la proc\xE9dure en fonction de ce que vous jugez plus pratique",
        imageA: "/images/questions/4a.webp",
        imageB: "/images/questions/4b.webp",
        categorie: "respect"
      },
      {
        id: 5,
        texte: "Pour r\xE9soudre un probl\xE8me, pr\xE9f\xE9rez-vous :",
        optionA: "Explorer de nouvelles id\xE9es ou approches",
        optionB: "Utiliser des m\xE9thodes qui ont d\xE9j\xE0 fait leurs preuves",
        imageA: "/images/questions/5a.webp",
        imageB: "/images/questions/5b.webp",
        categorie: "innovation"
      },
      {
        id: 6,
        texte: "Pendant une s\xE9ance de travail ou un expos\xE9, \xEAtes-vous plut\xF4t :",
        optionA: "Celui qui partage activement ses id\xE9es",
        optionB: "Celui qui \xE9coute attentivement et r\xE9fl\xE9chit avant de r\xE9pondre",
        imageA: "/images/questions/6a.webp",
        imageB: "/images/questions/6b.webp",
        categorie: "convivialite"
      },
      {
        id: 7,
        texte: "Dans un projet, trouvez-vous plus motivant de :",
        optionA: "Collaborer avec d'autres pour atteindre un objectif commun",
        optionB: "R\xE9aliser votre propre contribution ind\xE9pendante",
        imageA: "/images/questions/7a.webp",
        imageB: "/images/questions/7b.webp",
        categorie: "forceCollective"
      },
      {
        id: 8,
        texte: "Pour attribuer des ressources, privil\xE9giez-vous :",
        optionA: "Un partage \xE9quitable entre les membres",
        optionB: "Donner \xE0 ceux qui en ont le plus besoin",
        imageA: "/images/questions/8a.webp",
        imageB: "/images/questions/8b.webp",
        categorie: "equite"
      },
      {
        id: 9,
        texte: "Apr\xE8s une r\xE9ussite, \xEAtes-vous :",
        optionA: "Motiv\xE9 pour relever un d\xE9fi encore plus grand",
        optionB: "Enclin \xE0 savourer le succ\xE8s avant de vous engager dans autre chose",
        imageA: "/images/questions/9a.webp",
        imageB: "/images/questions/9b.webp",
        categorie: "engagement"
      },
      {
        id: 10,
        texte: "Face \xE0 une nouvelle technologie, pr\xE9f\xE9rez-vous :",
        optionA: "Explorer toutes ses fonctionnalit\xE9s",
        optionB: "Apprendre uniquement ce qui est n\xE9cessaire",
        imageA: "/images/questions/10a.webp",
        imageB: "/images/questions/10b.webp",
        categorie: "innovation"
      },
      {
        id: 11,
        texte: "Quand votre id\xE9e est rejet\xE9e, avez-vous tendance \xE0 :",
        optionA: "Persuader avec des arguments suppl\xE9mentaires",
        optionB: "Chercher un compromis ou une alternative",
        imageA: "/images/questions/11a.webp",
        imageB: "/images/questions/11b.webp",
        categorie: "convivialite"
      },
      {
        id: 12,
        texte: "Lors d'une pr\xE9sentation, pr\xE9f\xE9rez-vous :",
        optionA: "Pr\xE9senter en \xE9quipe",
        optionB: "Pr\xE9senter seul pour plus de contr\xF4le",
        imageA: "/images/questions/12a.webp",
        imageB: "/images/questions/12b.webp",
        categorie: "forceCollective"
      },
      {
        id: 13,
        texte: "Dans une \xE9quipe, \xEAtes-vous :",
        optionA: "Soucieux que chacun ait les m\xEAmes opportunit\xE9s",
        optionB: "Concentr\xE9 sur les r\xE9sultats globaux",
        imageA: "/images/questions/13a.webp",
        imageB: "/images/questions/13b.webp",
        categorie: "equite"
      },
      {
        id: 14,
        texte: "Lorsque vous commencez un projet, \xEAtes-vous :",
        optionA: "D\xE9termin\xE9 \xE0 le mener \xE0 bien malgr\xE9 les obstacles",
        optionB: "Pr\xE9f\xE9rant \xE9valuer d'abord les ressources disponibles",
        imageA: "/images/questions/14a.webp",
        imageB: "/images/questions/14b.webp",
        categorie: "engagement"
      },
      {
        id: 15,
        texte: "Face \xE0 une r\xE8gle qui semble ralentir le travail, vous :",
        optionA: "La respectez tout en cherchant \xE0 comprendre pourquoi elle est importante",
        optionB: "Cherchez une alternative plus rapide si cela peut am\xE9liorer les r\xE9sultats",
        imageA: "/images/questions/15a.webp",
        imageB: "/images/questions/15b.webp",
        categorie: "respect"
      },
      {
        id: 16,
        texte: "Dans un projet cr\xE9atif, pr\xE9f\xE9rez-vous :",
        optionA: "Imaginer des solutions originales, m\xEAme si elles impliquent des risques",
        optionB: "Vous concentrer sur des solutions pratiques et \xE9prouv\xE9es",
        imageA: "/images/questions/16a.webp",
        imageB: "/images/questions/16b.webp",
        categorie: "innovation"
      },
      {
        id: 17,
        texte: "Pendant une pause, pr\xE9f\xE9rez-vous :",
        optionA: "Discuter avec vos coll\xE8gues",
        optionB: "Profiter de la pause pour vous isoler",
        imageA: "/images/questions/17a.webp",
        imageB: "/images/questions/17b.webp",
        categorie: "convivialite"
      },
      {
        id: 18,
        texte: "Dans une situation d'urgence, privil\xE9giez-vous :",
        optionA: "La coordination avec l'\xE9quipe",
        optionB: "La prise d'initiative individuelle",
        imageA: "/images/questions/18a.webp",
        imageB: "/images/questions/18b.webp",
        categorie: "forceCollective"
      }
    ],
    departements: {
      "Ressources Humaines": {
        prioritaires: ["respect", "equite"],
        secondaires: ["convivialite"]
      },
      "Production": {
        prioritaires: ["engagement", "innovation", "respect"],
        secondaires: ["forceCollective"]
      },
      "Maintenance": {
        prioritaires: ["engagement", "forceCollective", "respect"],
        secondaires: ["innovation"]
      },
      "Qualit\xE9": {
        prioritaires: ["equite", "respect", "engagement"],
        secondaires: ["convivialite"]
      },
      "Comptabilit\xE9": {
        prioritaires: ["equite", "respect"],
        secondaires: ["engagement"]
      }
    },
    answers: {},
    results: null
  }),
  actions: {
    async preloadImages() {
      const imagePromises = this.questions.flatMap((question) => [
        new Promise((resolve) => {
          const img = new Image();
          img.onload = resolve;
          img.src = question.imageA;
        }),
        new Promise((resolve) => {
          const img = new Image();
          img.onload = resolve;
          img.src = question.imageB;
        })
      ]);
      await Promise.all(imagePromises);
      this.isLoading = false;
    },
    async saveResults() {
      const resultData = {
        id: Date.now(),
        date: (/* @__PURE__ */ new Date()).toISOString(),
        userData: this.userData,
        answers: this.answers,
        results: this.results
      };
      try {
        const response = await fetch("/api/saveResults", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(resultData)
        });
        return await response.json();
      } catch (error) {
        console.error("Erreur lors de la sauvegarde:", error);
        throw error;
      }
    },
    setUserData(data) {
      this.userData = data;
    },
    saveAnswer(questionId, answer) {
      this.answers[questionId] = answer;
    },
    calculateResults() {
      const scores = {
        forceCollective: 0,
        equite: 0,
        engagement: 0,
        respect: 0,
        innovation: 0,
        convivialite: 0
      };
      Object.entries(this.answers).forEach(([questionId, answer]) => {
        const question = this.questions.find((q) => q.id === parseInt(questionId));
        if (question) {
          scores[question.categorie] += answer === "A" ? 2 : 1;
        }
      });
      const departement = this.determinerDepartement(scores);
      const softSkillsTriees = this.getSoftSkillsTriees(scores);
      this.results = {
        scores,
        departement,
        softSkillsTriees
      };
      return this.results;
    },
    getSoftSkillsTriees(scores) {
      return Object.entries(scores).sort(([, a], [, b]) => b - a).map(([skill, score]) => ({
        skill,
        score
      }));
    },
    determinerDepartement(scores) {
      const topSkills = this.getSoftSkillsTriees(scores).slice(0, 2).map(({ skill }) => skill);
      let meilleurMatch = {
        departement: null,
        score: 0
      };
      Object.entries(this.departements).forEach(([departement, criteres]) => {
        let score = 0;
        topSkills.forEach((skill) => {
          if (criteres.prioritaires.includes(skill)) score += 2;
          if (criteres.secondaires.includes(skill)) score += 1;
        });
        if (score > meilleurMatch.score) {
          meilleurMatch = {
            departement,
            score
          };
        }
      });
      return meilleurMatch.departement || "Non d\xE9termin\xE9";
    }
  }
});

export { useQuestionnaireStore as u };
//# sourceMappingURL=questionnaire-bePnfAjy.mjs.map
