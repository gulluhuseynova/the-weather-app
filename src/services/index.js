import swal from '../plugins/swal'

export const getWeatherData = async (cityName) => {
    if (!cityName) {
        swal('Please provide valid city')
    }
    const baseUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${process.env.REACT_APP_API_KEY}&units=metric`
    try {
        const res = await fetch(baseUrl)
        const data = await res.json()
        return data
    } catch (err) {
        swal(err)
    }
}

export const getDaysData = async (cityName) => {
    const baseUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${process.env.REACT_APP_API_KEY}&units=metric`
    try {
        const res = await fetch(baseUrl)
        const data = await res.json()
        return data
    } catch (err) {
        swal(err)
    }
}
