import { useEffect, useState } from "react";
import { useLocation } from "./context/LocationProvider";
import axios from "axios";
import moment from "moment";
import Swal from "sweetalert2";
import "moment/min/locales"
import Loader from "./Loader"
import { useLanguage } from "./context/LanguageProvider";
import { useTranslation } from "react-i18next";
export default function Weather() {
    const { city } = useLocation()
    const [weatherData, setWeatherData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const { language } = useLanguage()
    const { t } = useTranslation()

    useEffect(() => {
        if (city !== "") {
            setIsLoading(true)
            const url = "https://api.openweathermap.org/data/2.5/forecast?q=" + city +
                "&units=imperial&APPID=56866f8407bb1e2d63330f3c046f35af";
            axios.get(url)
                .then((data) => {
                    setWeatherData(data.data.list[0])
                    setTimeout(() => setIsLoading(false), 500)

                })
                .catch(err => {
                    Swal.fire({
                        position: "center",
                        icon: "error",
                        title: "Error in getting the weather of " + city,
                        showConfirmButton: false,
                        timer: 3000
                      });
                });
        }
    }, [city])
    moment.locale(language);
    console.log(weatherData)
    const time = moment().format('MMMM Do YYYY, h:mm:ss a');
    if (weatherData)
        return (
            <>

                {isLoading && <Loader />}
                <div className="card shadow-lg shadow-blue-900">
                    <div className="pl-5 h-fit ">
                        <h1 className="text-5xl pb-4">{city}</h1>
                        <span className="block text-right pr-4">{time}</span>
                        <hr />
                    </div>
                    <div className="content">
                        <div>
                            <h1 className="text-2xl">{Math.round(((weatherData.main.temp) - 32) / 1.8)} <span>°C</span> </h1>
                            <h3 >{weatherData.weather[0].description}</h3>
                            <span>{t("min")} : {Math.round(((weatherData.main.temp_min
                            ) - 32) / 1.8)} <span>°C</span></span> |
                            <span className="pl-2">{t("max")} : {Math.round(((weatherData.main.temp_max
                            ) - 32) / 1.8)} <span>°C</span></span>
                        </div>
                        <div className=" w-32 flex items-center justify-center ">
                            <img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} alt="" />
                        </div>

                    </div>
                </div>
            </>
        )
    else return <></>

}