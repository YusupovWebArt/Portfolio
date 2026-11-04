export interface LegalSection {
  id: string
  title: string
  paragraphs: string[]
  bulletPoints?: string[]
}

export interface CookieTableRow {
  cookie: string
  provider: string
  purpose: string
  expiry: string
  type: string
}

export interface LegalPageData {
  badge: string
  title: string
  subtitle: string
  lastUpdatedLabel: string
  lastUpdatedDate: string
  sections: LegalSection[]
}

export interface CookiePolicyPageData extends LegalPageData {
  tableHeaders: {
    cookie: string
    provider: string
    purpose: string
    expiry: string
    type: string
  }
  tableRows: CookieTableRow[]
  interactiveSettingsLabel: string
  interactiveSettingsDesc: string
  openSettingsBtn: string
}
