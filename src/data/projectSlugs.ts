/**
 * Lightweight, zero-dependency project slug-to-ID mappings.
 * Allows App.tsx and URL routing to look up project slugs without eagerly bundling
 * all 70 heavy project case study components into the initial entry JavaScript.
 */

export const PROJECT_SLUG_MAP: Record<string, number> = {
  '911mg': 1,
  'adwoods-design': 2,
  'alldaymedicalcare': 3,
  'aristokrat': 4,
  'artdemes': 5,
  'artezioeu': 6,
  'aws-for-ecommerce': 7,
  'aws-for-retail': 8,
  'aws-migration-services': 9,
  'aws-security-service': 10,
  'bemol': 11,
  'bezalel': 12,
  'buhl-de': 13,
  'cartooniko': 14,
  'causetume': 15,
  'cloud-delivery-solution': 16,
  'elitehealthwarrior': 17,
  'exim-property': 18,
  'fluffy-ninja': 19,
  'front-desk-helpers': 20,
  'healthlinespro': 21,
  'isal': 22,
  'it-magic': 23,
  'js-vanilla-simple-todolist': 24,
  'kidzely': 25,
  'kolosochok': 26,
  'lashbouacademy': 27,
  'lashbousalon': 28,
  'lellex': 29,
  'leo-lardy': 30,
  'lueiris': 31,
  'lunamebel': 32,
  'manitoulintimberframes': 33,
  'mohavecosmeticsurgery': 34,
  'moskitnaya-setka': 35,
  'nokyc': 36,
  'octobit': 37,
  'organic-bed': 38,
  'orozco-trucking': 39,
  'portagedental': 40,
  'prezentify': 41,
  'psichologonline': 42,
  'react-simple-calculator': 43,
  'react-simple-cost-accounting': 44,
  'react-simple-todo-list': 45,
  'rolenconstruction': 46,
  'secondchancedecor': 47,
  'serzak-marketak': 48,
  'simple-javascript-calculator': 49,
  'simple-javascript-date-time': 50,
  'simple-javascript-list-users': 51,
  'simple-javascript-quiz': 52,
  'simple-vanilla-calculator': 53,
  'sola-dental-spa': 54,
  'sportpit24': 55,
  'svkus': 56,
  'technicalsupport': 57,
  'telecommunication-solutions': 58,
  'telefontrainingskoffer': 59,
  'tubebeytu': 60,
  'umantravel': 61,
  'unitrition': 62,
  'vikamaster': 63,
  'vinenergo': 64,
  'vival': 65,
  'webart-portfolio-website-v1': 66,
  'webart-portfolio-website-v2': 67,
  'webart-react-portfolio': 68,
  'website-integration-crm': 69,
  'wpskills': 71,
  'yusupovartur-nextjs-portfolio': 70,
}

export const PROJECT_ID_MAP: Record<number, string> = {
  ...Object.fromEntries(
    Object.entries(PROJECT_SLUG_MAP).map(([slug, id]) => [id, slug])
  ),
  29000: 'unitrition',
  29100: 'wpskills',
  29500: 'yusupovartur-nextjs-portfolio',
}

export function getProjectIdBySlug(slug: string): number | undefined {
  return PROJECT_SLUG_MAP[slug.trim().toLowerCase()]
}

export function getProjectSlugById(id: number): string | undefined {
  return PROJECT_ID_MAP[id]
}
