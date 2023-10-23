import './CurrentDate.scss'
import { langToLocale } from '../../helpers/utils'
import { useTranslation } from 'react-i18next'

const CurrentDate = () => {
    const { i18n } = useTranslation()
    const currentDate = new Date()
    const date = currentDate.toLocaleDateString(langToLocale(i18n.language))
    return <p className="current-date">{date}</p>
}

export default CurrentDate
