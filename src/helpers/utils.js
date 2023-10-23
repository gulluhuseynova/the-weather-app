import { countryMapping } from './constants'

export const getWeekdays = (locale = 'en-GB') => {
    const weekdays = []
    const DAYS_IN_WEEK = 7
    for (let i = 0; i < DAYS_IN_WEEK; i++) {
        // the date below is chosen randomly to pick monday
        const weekday = new Date(2022, 0, 2 + i).toLocaleDateString(locale, {
            weekday: 'short',
        })
        weekdays.push(weekday)
    }
    return weekdays
}

export const langToLocale = (lang) => {
    return countryMapping[lang]
}
