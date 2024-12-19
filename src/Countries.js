import axios from "axios"
import { useEffect, useMemo, useState } from "react"
import { useLocation } from "./context/LocationProvider"
import Cities from "./Cities"
import { useTranslation } from "react-i18next"
import { useLanguage } from "./context/LanguageProvider"
export default function Countries() {
    const [countries, setCountries] = useState([])
    const {t,i18n} = useTranslation()
    const {language} = useLanguage()
    const { country, changeCountry } = useLocation()
    useEffect(()=>{
        i18n.changeLanguage(language)
    },[language])
    useEffect(() => {
        axios.get("https://countriesnow.space/api/v0.1/countries")
            .then(data => {
                setCountries(data.data.data);
            })
            .catch(() => alert(404))
    }, [])

    
  
    const cities = useMemo(() => {
        for (const item of countries) {
            if (item.country === country)
                return item.cities
        }
        return []
    }, [country])
    return (
        <>
            <label htmlFor="countries" >{t("Choose the country")} : </label>
            <select
                id="countries"
                value={country}
                onChange={event => changeCountry(event.target.value)}
            >
                {
                    countries.map(cnt => <option key={cnt.iso3} value={cnt.country}>{cnt.country}</option>)
                }

            </select>
              { cities.length > 0 && < Cities cities={cities} /> }
        </>
    )
}