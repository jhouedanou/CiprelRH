import { defineStore } from 'pinia'

export const useQuestionnaireStore = defineStore('questionnaire', {
  state: () => ({
    userData: null,
    questions: [
      {
        id: 1,
        texte: "Lorsqu'un défi complexe survient, préférez-vous :",
        optionA: "Travailler avec d'autres pour trouver une solution",
        optionB: "Trouver une solution par vous-même",
        imageA:"/images/questions/1a.webp",
        imageB:"/images/questions/1b.webp",
        categorie: "forceCollective"
      },
      {
        id: 2,
        texte: "En cas de conflit, privilégiez-vous :",
        optionA: "Une solution juste pour toutes les parties",
        optionB: "Une solution rapide pour apaiser la situation",
        imageA:"/images/questions/2a.webp",
        imageB:"/images/questions/2b.webp",
        categorie: "equite"
      },
      {
        id: 3,
        texte: "Face à un objectif ambitieux, êtes-vous :",
        optionA: "Excité par le défi et prêt à vous dépasser",
        optionB: "Préférant travailler sur des objectifs plus réalistes",
        imageA:"/images/questions/3a.webp",
        imageB:"/images/questions/3b.webp",
        categorie: "engagement"
      },
      {
        id: 4,
        texte: "Lorsqu'une nouvelle procédure est mise en place, vous :",
        optionA: "Suivez les consignes scrupuleusement pour éviter les erreurs",
        optionB: "Adaptez la procédure en fonction de ce que vous jugez plus pratique",
        imageA:"/images/questions/4a.webp",
        imageB:"/images/questions/4b.webp",
        categorie: "respect"
      },
      {
        id: 5,
        texte: "Pour résoudre un problème, préférez-vous :",
        optionA: "Explorer de nouvelles idées ou approches",
        optionB: "Utiliser des méthodes qui ont déjà fait leurs preuves",
        imageA:"/images/questions/5a.webp",
        imageB:"/images/questions/5b.webp",
        categorie: "innovation"
      },
      {
        id: 6,
        texte: "Pendant une séance de travail ou un exposé, êtes-vous plutôt :",
        optionA: "Celui qui partage activement ses idées",
        optionB: "Celui qui écoute attentivement et réfléchit avant de répondre",
        imageA:"/images/questions/6a.webp",
        imageB:"/images/questions/6b.webp",
        categorie: "convivialite"
      },
      {
        id: 7,
        texte: "Dans un projet, trouvez-vous plus motivant de :",
        optionA: "Collaborer avec d'autres pour atteindre un objectif commun",
        optionB: "Réaliser votre propre contribution indépendante",
        imageA:"/images/questions/7a.webp",
        imageB:"/images/questions/7b.webp",
        categorie: "forceCollective"
      },
      {
        id: 8,
        texte: "Pour attribuer des ressources, privilégiez-vous :",
        optionA: "Un partage équitable entre les membres",
        optionB: "Donner à ceux qui en ont le plus besoin",
        imageA:"/images/questions/8a.webp",
        imageB:"/images/questions/8b.webp",
        categorie: "equite"
      },
      {
        id: 9,
        texte: "Après une réussite, êtes-vous :",
        optionA: "Motivé pour relever un défi encore plus grand",
        optionB: "Enclin à savourer le succès avant de vous engager dans autre chose",
        imageA:"/images/questions/9a.webp",
        imageB:"/images/questions/9b.webp",
        categorie: "engagement"
      },
      {
        id: 10,
        texte: "Face à une nouvelle technologie, préférez-vous :",
        optionA: "Explorer toutes ses fonctionnalités",
        optionB: "Apprendre uniquement ce qui est nécessaire",
        imageA:"/images/questions/10a.webp",
        imageB:"/images/questions/10b.webp",
        categorie: "innovation"
      },
      {
        id: 11,
        texte: "Quand votre idée est rejetée, avez-vous tendance à :",
        optionA: "Persuader avec des arguments supplémentaires",
        optionB: "Chercher un compromis ou une alternative",
        imageA:"/images/questions/11a.webp",
        imageB:"/images/questions/11b.webp",
        categorie: "convivialite"
      },
      {
        id: 12,
        texte: "Lors d'une présentation, préférez-vous :",
        optionA: "Présenter en équipe",
        optionB: "Présenter seul pour plus de contrôle",
        imageA:"/images/questions/12a.webp",
        imageB:"/images/questions/12b.webp",
        categorie: "forceCollective"
      },
      {
        id: 13,
        texte: "Dans une équipe, êtes-vous :",
        optionA: "Soucieux que chacun ait les mêmes opportunités",
        optionB: "Concentré sur les résultats globaux",
        imageA:"/images/questions/13a.webp",
        imageB:"/images/questions/13b.webp",
        categorie: "equite"
      },
      {
        id: 14,
        texte: "Lorsque vous commencez un projet, êtes-vous :",
        optionA: "Déterminé à le mener à bien malgré les obstacles",
        optionB: "Préférant évaluer d'abord les ressources disponibles",
        imageA:"/images/questions/14a.webp",
        imageB:"/images/questions/14b.webp",
        categorie: "engagement"
      },
      {
        id: 15,
        texte: "Face à une règle qui semble ralentir le travail, vous :",
        optionA: "La respectez tout en cherchant à comprendre pourquoi elle est importante",
        optionB: "Cherchez une alternative plus rapide si cela peut améliorer les résultats",
        imageA:"/images/questions/15a.webp",
        imageB:"/images/questions/15b.webp",
        categorie: "respect"
      },
      {
        id: 16,
        texte: "Dans un projet créatif, préférez-vous :",
        optionA: "Imaginer des solutions originales, même si elles impliquent des risques",
        optionB: "Vous concentrer sur des solutions pratiques et éprouvées",
        imageA:"/images/questions/16a.webp",
        imageB:"/images/questions/16b.webp",
        categorie: "innovation"
      },
      {
        id: 17,
        texte: "Pendant une pause, préférez-vous :",
        optionA: "Discuter avec vos collègues",
        optionB: "Profiter de la pause pour vous isoler",
        imageA:"/images/questions/17a.webp",
        imageB:"/images/questions/17b.webp",
        categorie: "convivialite"
      },
      {
        id: 18,
        texte: "Dans une situation d'urgence, privilégiez-vous :",
        optionA: "La coordination avec l'équipe",
        optionB: "La prise d'initiative individuelle",
        imageA:"/images/questions/18a.webp",
        imageB:"/images/questions/18b.webp",
        categorie: "forceCollective"
      }      
    ],
    departements: {
      'Ressources Humaines': {
        prioritaires: ['respect', 'equite'],
        secondaires: ['convivialite']
      },
      'Production': {
        prioritaires: ['engagement', 'innovation', 'respect'],
        secondaires: ['forceCollective']
      },
      'Maintenance': {
        prioritaires: ['engagement', 'forceCollective', 'respect'],
        secondaires: ['innovation']
      },
      'Qualité': {
        prioritaires: ['equite', 'respect', 'engagement'],
        secondaires: ['convivialite']
      },
      'Comptabilité': {
        prioritaires: ['equite', 'respect'],
        secondaires: ['engagement']
      }
    },
    answers: {},
    results: null
  }),

  actions: {

    async preloadImages() {
      const imagePromises = this.questions.flatMap(question => [
        new Promise((resolve) => {
          const img = new Image()
          img.onload = resolve
          img.src = question.imageA
        }),
        new Promise((resolve) => {
          const img = new Image()
          img.onload = resolve
          img.src = question.imageB
        })
      ])
      
      await Promise.all(imagePromises)
      this.isLoading = false
    },

    async saveResults() {
      const resultData = {
        id: Date.now(),
        date: new Date().toISOString(),
        userData: this.userData,
        answers: this.answers,
        results: this.results
      }

      try {
        const response = await fetch('/api/saveResults', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(resultData)
        })
        return await response.json()
      } catch (error) {
        console.error('Erreur lors de la sauvegarde:', error)
        throw error
      }
    },

    setUserData(data) {
      this.userData = data
    },

    saveAnswer(questionId, answer) {
      this.answers[questionId] = answer
    },

    calculateResults() {
      const scores = {
        forceCollective: 0,
        equite: 0,
        engagement: 0,
        respect: 0,
        innovation: 0,
        convivialite: 0
      }

      Object.entries(this.answers).forEach(([questionId, answer]) => {
        const question = this.questions.find(q => q.id === parseInt(questionId))
        if (question) {
          scores[question.categorie] += answer === 'A' ? 2 : 1
        }
      })

      const departement = this.determinerDepartement(scores)
      const softSkillsTriees = this.getSoftSkillsTriees(scores)

      this.results = {
        scores,
        departement,
        softSkillsTriees
      }

      return this.results
    },

    getSoftSkillsTriees(scores) {
      return Object.entries(scores)
        .sort(([,a], [,b]) => b - a)
        .map(([skill, score]) => ({
          skill,
          score
        }))
    },

    determinerDepartement(scores) {
      const topSkills = this.getSoftSkillsTriees(scores)
        .slice(0, 2)
        .map(({skill}) => skill)

      let meilleurMatch = {
        departement: null,
        score: 0
      }

      Object.entries(this.departements).forEach(([departement, criteres]) => {
        let score = 0
        topSkills.forEach(skill => {
          if (criteres.prioritaires.includes(skill)) score += 2
          if (criteres.secondaires.includes(skill)) score += 1
        })

        if (score > meilleurMatch.score) {
          meilleurMatch = {
            departement,
            score
          }
        }
      })

      return meilleurMatch.departement || 'Non déterminé'
    }
  }
})
