import type { Project } from '../components/projects/project-types'

// Static registry of all projects for seamless compatibility across Vite, Next.js, and Vitest
import proj_1 from '../components/projects/wordpress/911mg'
import proj_2 from '../components/projects/wordpress/adwoods-design '
import proj_3 from '../components/projects/wordpress/alldaymedicalcare'
import proj_4 from '../components/projects/wordpress/aristokrat'
import proj_5 from '../components/projects/wordpress/artdemes'
import proj_6 from '../components/projects/shopify/artezioeu'
import proj_7 from '../components/projects/wordpress/aws-for-ecommerce'
import proj_8 from '../components/projects/wordpress/aws-for-retail'
import proj_9 from '../components/projects/wordpress/aws-migration-services'
import proj_10 from '../components/projects/wordpress/aws-security-service'
import proj_11 from '../components/projects/wordpress/bemol'
import proj_12 from '../components/projects/wordpress/bezalel'
import proj_13 from '../components/projects/wordpress/buhl-de'
import proj_14 from '../components/projects/shopify/cartooniko'
import proj_15 from '../components/projects/wordpress/causetume'
import proj_16 from '../components/projects/wordpress/cloud-delivery-solution'
import proj_17 from '../components/projects/other-cms/elitehealthwarrior'
import proj_18 from '../components/projects/wordpress/exim-property'
import proj_19 from '../components/projects/wordpress/fluffy-ninja'
import proj_20 from '../components/projects/wordpress/front-desk-helpers'
import proj_21 from '../components/projects/other-cms/healthlinespro'
import proj_22 from '../components/projects/wix/isal'
import proj_23 from '../components/projects/wordpress/it-magic'
import proj_24 from '../components/projects/javascript/js-vanilla-simple-todolist'
import proj_25 from '../components/projects/shopify/kidzely'
import proj_26 from '../components/projects/wordpress/kolosochok'
import proj_27 from '../components/projects/wix/lashbouacademy'
import proj_28 from '../components/projects/wix/lashbousalon'
import proj_29 from '../components/projects/wordpress/lellex'
import proj_30 from '../components/projects/wordpress/leo-lardy'
import proj_31 from '../components/projects/shopify/lueiris'
import proj_32 from '../components/projects/wordpress/lunamebel'
import proj_33 from '../components/projects/wordpress/manitoulintimberframes'
import proj_34 from '../components/projects/static/mohavecosmeticsurgery'
import proj_35 from '../components/projects/wordpress/moskitnaya-setka'
import proj_36 from '../components/projects/static/nokyc'
import proj_37 from '../components/projects/wordpress/octobit'
import proj_38 from '../components/projects/wordpress/organic-bed'
import proj_39 from '../components/projects/wordpress/orozco-trucking'
import proj_40 from '../components/projects/other-cms/portagedental'
import proj_41 from '../components/projects/shopify/prezentify'
import proj_42 from '../components/projects/wordpress/psichologonline'
import proj_43 from '../components/projects/react/react-simple-calculator'
import proj_44 from '../components/projects/react/react-simple-cost-accounting'
import proj_45 from '../components/projects/react/react-simple-todo-list'
import proj_46 from '../components/projects/wordpress/rolenconstruction'
import proj_47 from '../components/projects/shopify/secondchancedecor'
import proj_48 from '../components/projects/wordpress/serzak-marketak'
import proj_49 from '../components/projects/javascript/simple-javascript-calculator'
import proj_50 from '../components/projects/javascript/simple-javascript-date-time'
import proj_51 from '../components/projects/javascript/simple-javascript-list-users'
import proj_52 from '../components/projects/javascript/simple-javascript-quiz'
import proj_53 from '../components/projects/javascript/simple-vanilla-calculator'
import proj_54 from '../components/projects/wordpress/sola-dental-spa'
import proj_55 from '../components/projects/other-cms/sportpit24'
import proj_56 from '../components/projects/wordpress/svkus'
import proj_57 from '../components/projects/wix/technicalsupport'
import proj_58 from '../components/projects/wordpress/telecommunication-solutions'
import proj_59 from '../components/projects/wordpress/telefontrainingskoffer'
import proj_60 from '../components/projects/wordpress/tubebeytu'
import proj_61 from '../components/projects/other-cms/umantravel'
import proj_62 from '../components/projects/nextjs/unitrition'
import proj_63 from '../components/projects/wordpress/vikamaster'
import proj_64 from '../components/projects/other-cms/vinenergo'
import proj_65 from '../components/projects/wordpress/vival'
import proj_66 from '../components/projects/static/webart-portfolio-website-v1'
import proj_67 from '../components/projects/static/webart-portfolio-website-v2'
import proj_68 from '../components/projects/react/webart-react-portfolio'
import proj_69 from '../components/projects/wordpress/website-integration-crm'

export interface ProjectRegistryItem {
  slug: string
  project: Project
}

export const projectRegistry: ProjectRegistryItem[] = [
  { slug: '911mg', project: proj_1 },
  { slug: 'adwoods-design', project: proj_2 },
  { slug: 'alldaymedicalcare', project: proj_3 },
  { slug: 'aristokrat', project: proj_4 },
  { slug: 'artdemes', project: proj_5 },
  { slug: 'artezioeu', project: proj_6 },
  { slug: 'aws-for-ecommerce', project: proj_7 },
  { slug: 'aws-for-retail', project: proj_8 },
  { slug: 'aws-migration-services', project: proj_9 },
  { slug: 'aws-security-service', project: proj_10 },
  { slug: 'bemol', project: proj_11 },
  { slug: 'bezalel', project: proj_12 },
  { slug: 'buhl-de', project: proj_13 },
  { slug: 'cartooniko', project: proj_14 },
  { slug: 'causetume', project: proj_15 },
  { slug: 'cloud-delivery-solution', project: proj_16 },
  { slug: 'elitehealthwarrior', project: proj_17 },
  { slug: 'exim-property', project: proj_18 },
  { slug: 'fluffy-ninja', project: proj_19 },
  { slug: 'front-desk-helpers', project: proj_20 },
  { slug: 'healthlinespro', project: proj_21 },
  { slug: 'isal', project: proj_22 },
  { slug: 'it-magic', project: proj_23 },
  { slug: 'js-vanilla-simple-todolist', project: proj_24 },
  { slug: 'kidzely', project: proj_25 },
  { slug: 'kolosochok', project: proj_26 },
  { slug: 'lashbouacademy', project: proj_27 },
  { slug: 'lashbousalon', project: proj_28 },
  { slug: 'lellex', project: proj_29 },
  { slug: 'leo-lardy', project: proj_30 },
  { slug: 'lueiris', project: proj_31 },
  { slug: 'lunamebel', project: proj_32 },
  { slug: 'manitoulintimberframes', project: proj_33 },
  { slug: 'mohavecosmeticsurgery', project: proj_34 },
  { slug: 'moskitnaya-setka', project: proj_35 },
  { slug: 'nokyc', project: proj_36 },
  { slug: 'octobit', project: proj_37 },
  { slug: 'organic-bed', project: proj_38 },
  { slug: 'orozco-trucking', project: proj_39 },
  { slug: 'portagedental', project: proj_40 },
  { slug: 'prezentify', project: proj_41 },
  { slug: 'psichologonline', project: proj_42 },
  { slug: 'react-simple-calculator', project: proj_43 },
  { slug: 'react-simple-cost-accounting', project: proj_44 },
  { slug: 'react-simple-todo-list', project: proj_45 },
  { slug: 'rolenconstruction', project: proj_46 },
  { slug: 'secondchancedecor', project: proj_47 },
  { slug: 'serzak-marketak', project: proj_48 },
  { slug: 'simple-javascript-calculator', project: proj_49 },
  { slug: 'simple-javascript-date-time', project: proj_50 },
  { slug: 'simple-javascript-list-users', project: proj_51 },
  { slug: 'simple-javascript-quiz', project: proj_52 },
  { slug: 'simple-vanilla-calculator', project: proj_53 },
  { slug: 'sola-dental-spa', project: proj_54 },
  { slug: 'sportpit24', project: proj_55 },
  { slug: 'svkus', project: proj_56 },
  { slug: 'technicalsupport', project: proj_57 },
  { slug: 'telecommunication-solutions', project: proj_58 },
  { slug: 'telefontrainingskoffer', project: proj_59 },
  { slug: 'tubebeytu', project: proj_60 },
  { slug: 'umantravel', project: proj_61 },
  { slug: 'unitrition', project: proj_62 },
  { slug: 'vikamaster', project: proj_63 },
  { slug: 'vinenergo', project: proj_64 },
  { slug: 'vival', project: proj_65 },
  { slug: 'webart-portfolio-website-v1', project: proj_66 },
  { slug: 'webart-portfolio-website-v2', project: proj_67 },
  { slug: 'webart-react-portfolio', project: proj_68 },
  { slug: 'website-integration-crm', project: proj_69 },
]

export const allProjects: Project[] = projectRegistry
  .map((item) => item.project)
  .sort((a, b) => b.id - a.id)
