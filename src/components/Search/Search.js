import { useRef, useEffect } from 'react'
import './Search.scss'
import { BiSearchAlt } from 'react-icons/bi'
import { getWeatherData } from '../../services'
import { useDispatch } from 'react-redux'
import { setInfo } from '../../redux/weather'
import { useTranslation } from 'react-i18next'
import swal from '../../plugins/swal'

const Search = () => {
    const { t } = useTranslation()
    const inputRef = useRef()
    const dispatch = useDispatch()
    const DEFAULT_CITY = 'Baku'

    const getWeatherByCity = async (cityName) => {
        const cityQueryText = inputRef.current.value || cityName
        const weatherData = await getWeatherData(cityQueryText)
        if (!weatherData || weatherData.cod === '404') {
            swal(t('errors.city_not_exist'))
        } else {
            dispatch(setInfo(weatherData))
        }
        inputRef.current.value = ''
    }

    const handleEnter = (e) => {
        if (e.key === 'Enter') {
            getWeatherByCity()
        }
    }

    useEffect(() => {
        // TODO get default from location api
        getWeatherByCity(DEFAULT_CITY)
    }, [])

    return (
        <div id="input-container">
            <input
                id="city-search"
                minLength="2"
                placeholder={t('placeholder')}
                autoComplete="off"
                ref={inputRef}
                onKeyDown={handleEnter}
            />
            <button
                className="search-button"
                onClick={() => getWeatherByCity()}
            >
                <BiSearchAlt className="search-icon" />
            </button>
        </div>
    )
}

export default Search
