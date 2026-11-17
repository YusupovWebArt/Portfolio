/**
 * Lightweight, zero-dependency project slug-to-ID mappings.
 * Allows App.tsx and URL routing to look up project slugs without eagerly bundling
 * all 70 heavy project case study components into the initial entry JavaScript.
 */

export const PROJECT_SLUG_MAP: Record<string, number> = {
  '911mg': 11000,
  'adwoods-design': 13000,
  'alldaymedicalcare': 14500,
  'aristokrat': 10800,
  'artdemes': 10890,
  'artezioeu': 6950,
  'aws-for-ecommerce': 13500,
  'aws-for-retail': 15000,
  'aws-migration-services': 18500,
  'aws-security-service': 16500,
  'bemol': 10980,
  'bezalel': 10870,
  'buhl-de': 15500,
  'cartooniko': 6750,
  'causetume': 11500,
  'cloud-delivery-solution': 10900,
  'elitehealthwarrior': 8950,
  'exim-property': 10990,
  'fluffy-ninja': 10910,
  'front-desk-helpers': 19000,
  'healthlinespro': 8850,
  'isal': 7850,
  'it-magic': 19500,
  'js-vanilla-simple-todolist': 4850,
  'kidzely': 6700,
  'kolosochok': 10820,
  'lashbouacademy': 7800,
  'lashbousalon': 7750,
  'lellex': 12500,
  'leo-lardy': 10940,
  'lueiris': 6800,
  'lunamebel': 10880,
  'manitoulintimberframes': 12000,
  'mohavecosmeticsurgery': 5850,
  'moskitnaya-setka': 10930,
  'nokyc': 5800,
  'octobit': 18000,
  'organic-bed': 16000,
  'orozco-trucking': 10960,
  'portagedental': 8750,
  'prezentify': 6900,
  'psichologonline': 10810,
  'react-simple-calculator': 3850,
  'react-simple-cost-accounting': 3800,
  'react-simple-todo-list': 3900,
  'rolenconstruction': 17000,
  'secondchancedecor': 6850,
  'serzak-marketak': 14000,
  'simple-javascript-calculator': 4900,
  'simple-javascript-date-time': 4750,
  'simple-javascript-list-users': 4700,
  'simple-javascript-quiz': 4950,
  'simple-vanilla-calculator': 4800,
  'sola-dental-spa': 10970,
  'sportpit24': 8900,
  'svkus': 10850,
  'technicalsupport': 7900,
  'telecommunication-solutions': 10920,
  'telefontrainingskoffer': 17500,
  'tubebeytu': 10950,
  'umantravel': 8800,
  'unitrition': 29000,
  'vikamaster': 10860,
  'vinenergo': 8700,
  'vival': 10830,
  'webart-portfolio-website-v1': 5900,
  'webart-portfolio-website-v2': 5950,
  'webart-react-portfolio': 3950,
  'website-integration-crm': 10840,
  'fullstack-ai-lab': 29100,
  'yusupovartur-nextjs-portfolio': 29500,
  'wpskills': 29100,
}

export const PROJECT_ID_MAP: Record<number, string> = {
  ...Object.fromEntries(
    Object.entries(PROJECT_SLUG_MAP).map(([slug, id]) => [id, slug])
  ),
  29100: 'fullstack-ai-lab',
}

export function getProjectIdBySlug(slug: string): number | undefined {
  return PROJECT_SLUG_MAP[slug.trim().toLowerCase()]
}

export function getProjectSlugById(id: number): string | undefined {
  return PROJECT_ID_MAP[id]
}
