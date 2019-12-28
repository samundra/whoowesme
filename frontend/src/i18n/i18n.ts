import I18n from 'i18n-js'
import en from './languages/en'
import ne from './languages/ne'
I18n.locale = 'en'
I18n.fallbacks = true
I18n.translations = {en, ne}
