import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import en from '../locales/en.json'
import tr from '../locales/tr.json'

const resources = {
    en: { translation: en },
    tr: { translation: tr },
}

i18n.use(initReactI18next)
    .use(LanguageDetector)
    .init({
        resources,
        fallbackLng: ['en', 'tr'],
        detection: { order: ['localStorage'] },
    })

export default i18n
