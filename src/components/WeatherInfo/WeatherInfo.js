import './WeatherInfo.scss'
import { GoLocation } from 'react-icons/go'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

const WeatherInfo = () => {
    const { t } = useTranslation()
    const MPS_TO_MPH = 2.23694
    const info = useSelector((state) => state.weather.weatherInfo)

    return (
        <>
            {info?.name && (
                <div id="info">
                    <GoLocation />
                    <div id="country-city">
                        {info.name.toUpperCase()},{' '}
                        {info.sys.country.toUpperCase()}
                    </div>
                    <div
                        id="weather-temp"
                        className="text-[40px] sm:text-[50px] md:text-[70px]"
                    >
                        {Math.round(info.main.temp)}
                    </div>
                    <div>
                        {t(
                            `weather.${info.weather[0].description.replaceAll(
                                ' ',
                                ''
                            )}`
                        )}
                    </div>
                    <div id="extra-info">
                        <div id="weather-feels-like">
                            {t('feels_like', {
                                degree: Math.round(info.main.feels_like),
                            })}
                        </div>
                        {/* TODO use kmh in tr */}
                        <div id="weather-wind-speed">
                            {t('wind', {
                                speed: (info.wind.speed * MPS_TO_MPH).toFixed(
                                    2
                                ),
                            })}
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default WeatherInfo
