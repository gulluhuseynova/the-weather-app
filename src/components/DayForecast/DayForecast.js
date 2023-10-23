import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import images from '../../assets/images'
import './DayForecast.scss'
import { WiHumidity } from 'react-icons/wi'
import { getWeekdays, langToLocale } from '../../helpers/utils'
import { iconMapping } from '../../helpers/constants'
import { getDaysData } from '../../services'
import { useTranslation } from 'react-i18next'

const FIVE_DAY_INTERVAL = 8
const fetchWeatherData = async (cityName) => {
    try {
        const data = await getDaysData(cityName)
        return data.list.filter((_, i) => i % FIVE_DAY_INTERVAL === 0)
    } catch (err) {
        // TODO show meaningful error to user
        console.error(err)
    }
}

const DayForecast = () => {
    const { t, i18n } = useTranslation()
    const [dailyData, setDailyData] = useState([])
    const info = useSelector((state) => state.weather.weatherInfo)
    const days = getWeekdays(langToLocale(i18n.language))
    const currentWeekDay = new Date().getDay()

    // TODO cache for same inputs using useMemo
    useEffect(() => {
        const fetchData = async () => {
            if (info.name) {
                const data = await fetchWeatherData(info.name)
                if (data) {
                    setDailyData(data)
                }
            } else {
                setDailyData([])
            }
        }
        fetchData()
    }, [info.name])

    /**
     * Returns day of week depending to offset
     * days:['Mon','Tue','Wed',...]
     * if currentWeekDay == 0 and offset:
     *  0 => 'Mon'
     *  1 => 'Tue'
     * if currentWeekDay == 6 and offset:
     *  0 => 'Sun'
     *  1 => 'Mon'
     */
    function getDay(offset) {
        const DAYS_IN_WEEK = 7
        return days[(currentWeekDay + offset) % DAYS_IN_WEEK]
    }

    return (
        <>
            {dailyData.length && (
                <div className="footer">
                    {dailyData.map((day, i) => (
                        <div className="inner" key={day.dt}>
                            <div className="week-day text-[14px] sm:text-[18px]">
                                {getDay(i)}
                            </div>
                            <img
                                className="icon"
                                src={images[iconMapping[day.weather[0].main]]}
                                alt={day.weather[0].main}
                                width={60}
                                height={60}
                            />
                            <div className="footer-degree">
                                {Math.round(day.main.temp)}
                            </div>
                            <div className="footer-description">
                                {t(
                                    `weather.${day.weather[0].description.replaceAll(
                                        ' ',
                                        ''
                                    )}`
                                )}
                            </div>
                            <div className="humidity-degree">
                                <WiHumidity />
                                {Math.round(day.main.humidity)} %
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </>
    )
}

export default DayForecast
