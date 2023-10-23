import { useState } from 'react'
import './LangSwitcher.scss'
import { useTranslation } from 'react-i18next'
import Flag from '../Flag/Flag'

const LangSwitcher = () => {
    const { t, i18n } = useTranslation()
    const [showDropdown, setShowDropdown] = useState(false)

    const handleDropdownClick = () => {
        setShowDropdown(!showDropdown)
    }

    const handleLanguageChange = (lang) => {
        i18n.changeLanguage(lang)
        setShowDropdown(false)
    }

    const availableLanguages = i18n.languages.filter(
        (lang) => lang !== i18n.language
    )
    return (
        <div className="language-selector">
            <button onClick={handleDropdownClick}>
                <Flag lang={i18n.language} />
                {t(i18n.language)}
            </button>
            {showDropdown && (
                <div className="dropdown">
                    {availableLanguages.map((lang) => (
                        <button
                            key={lang}
                            onClick={() => handleLanguageChange(lang)}
                        >
                            <Flag lang={lang} />
                            {t(lang)}
                        </button>
                    ))}
                </div>
            )}
        </div>
    )
}

export default LangSwitcher
