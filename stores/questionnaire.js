import { defineStore } from 'pinia'

export const useQuestionnaireStore = defineStore('questionnaire', {
  state: () => ({
    userData: null,
    questions: [
      {
        id: 1,
        texte: "Lorsqu'un défi complexe survient, préférez-vous :",
        optionA: "Travailler avec d'autres pour trouver une solution ?",
        optionB: "Trouver une solution par vous-même ?",
        categorie: "forceCollective"
      },
      // Ajoutez toutes vos questions ici
    ],
    answers: {},
    results: null
  }),

  actions: {
    setUserData(data) {
      this.userData = data
    },

    saveAnswer(questionId, answer) {
      this.answers[questionId] = answer
    },

    getAnswer(questionId) {
      return this.answers[questionId]
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

      // Calcul des scores
      Object.entries(this.answers).forEach(([questionId, answer]) => {
        const question = this.questions.find(q => q.id === parseInt(questionId))
        if (question) {
          scores[question.categorie] += answer === 'A' ? 2 : 1
        }
      })

      this.results = {
        scores,
        departement: this.determinerDepartement(scores)
      }

      return this.results
    },

    determinerDepartement(scores) {
      // Logique de détermination du département
      const scoresTries = Object.entries(scores)
        .sort(([,a], [,b]) => b - a)
        .slice(0, 2)
        .map(([skill]) => skill)

      // Mapping des départements
      const departements = {
        'Ressources Humaines': ['respect', 'equite'],
        'Production': ['engagement', 'innovation'],
        'Maintenance': ['engagement', 'forceCollective'],
        'Qualité': ['equite', 'respect'],
        'Comptabilité': ['equite', 'respect']
      }

      return Object.entries(departements).find(([, skills]) => 
        scoresTries.every(score => skills.includes(score))
      )?.[0] || 'Non déterminé'
    }
  }
})

import { useQuestionnaireStore } from '~/stores/questionnaire'
