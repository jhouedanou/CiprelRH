import { writeFile, appendFile } from 'fs/promises'
import { resolve } from 'path'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const filePath = resolve('./public/data/results.csv')

  try {
    const csvLine = `${body.id},${body.date},${body.userData?.nom || ''},${body.userData?.prenom || ''},${body.userData?.email || ''},${body.userData?.contact || ''},${body.results.departement},${body.results.scores.forceCollective},${body.results.scores.equite},${body.results.scores.engagement},${body.results.scores.respect},${body.results.scores.innovation},${body.results.scores.convivialite}\n`

    // Créer l'en-tête si le fichier n'existe pas
    try {
      await appendFile(filePath, csvLine)
    } catch {
      const header = 'ID,Date,Nom,Prénom,Email,Contact,Département,Force Collective,Équité,Engagement,Respect,Innovation,Convivialité\n'
      await writeFile(filePath, header + csvLine)
    }

    return { success: true, id: body.id }
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: 'Erreur lors de la sauvegarde des résultats'
    })
  }
})
