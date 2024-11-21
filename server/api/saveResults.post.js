import { writeFile, readFile } from 'fs/promises'
import { resolve } from 'path'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const filePath = resolve('./public/data/results.json')

  try {
    // Lire les données existantes
    let results = []
    try {
      const data = await readFile(filePath, 'utf-8')
      results = JSON.parse(data)
    } catch {
      results = []
    }

    // Ajouter le nouveau résultat
    results.push(body)

    // Sauvegarder le fichier
    await writeFile(filePath, JSON.stringify(results, null, 2))

    return { success: true, id: body.id }
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: 'Erreur lors de la sauvegarde des résultats'
    })
  }
})
