import images from './assets/images'
import './App.scss'
import Search from './components/Search/Search'
import WeatherInfo from './components/WeatherInfo/WeatherInfo'
import DayForecast from './components/DayForecast/DayForecast'
import Logo from './components/Logo/Logo'
import LangSwitcher from './components/LangSwitcher/LangSwitcher'
import Date from './components/CurrentDate/CurrentDate'

function App() {
    return (
        <div id="app" style={{ backgroundImage: `url(${images.bg})` }}>
            <div className="flex flex-col h-full">
                <div className="p-6 flex justify-between">
                    <Logo />
                    <LangSwitcher />
                </div>
                <div className="flex grow flex-col justify-center sm:mx-20px md:mx-20% lg:mx-30% mx-20px">
                    <Date />
                    <Search />
                    <WeatherInfo />
                </div>
            </div>
            <DayForecast />
        </div>
    )
}
export default App
