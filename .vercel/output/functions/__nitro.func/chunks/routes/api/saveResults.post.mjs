import { d as defineEventHandler, r as readBody, c as createError } from '../../nitro/nitro.mjs';
import { appendFile, writeFile } from 'fs/promises';
import { resolve } from 'path';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';

const saveResults_post = defineEventHandler(async (event) => {
  var _a, _b, _c, _d;
  const body = await readBody(event);
  const filePath = resolve("./public/data/results.csv");
  try {
    const csvLine = `${body.id},${body.date},${((_a = body.userData) == null ? void 0 : _a.nom) || ""},${((_b = body.userData) == null ? void 0 : _b.prenom) || ""},${((_c = body.userData) == null ? void 0 : _c.email) || ""},${((_d = body.userData) == null ? void 0 : _d.contact) || ""},${body.results.departement},${body.results.scores.forceCollective},${body.results.scores.equite},${body.results.scores.engagement},${body.results.scores.respect},${body.results.scores.innovation},${body.results.scores.convivialite}
`;
    try {
      await appendFile(filePath, csvLine);
    } catch {
      const header = "ID,Date,Nom,Pr\xE9nom,Email,Contact,D\xE9partement,Force Collective,\xC9quit\xE9,Engagement,Respect,Innovation,Convivialit\xE9\n";
      await writeFile(filePath, header + csvLine);
    }
    return { success: true, id: body.id };
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: "Erreur lors de la sauvegarde des r\xE9sultats"
    });
  }
});

export { saveResults_post as default };
//# sourceMappingURL=saveResults.post.mjs.map
