import { useLocation } from "./context/LocationProvider"
import { useTranslation } from "react-i18next"
export default function Countries({ cities }) {
    const { city, changeCity } = useLocation()
    const {t} = useTranslation()
    return (
        <>
            <label htmlFor="countries">{t("Choose the city")} : </label>
            <select
                id="cities"
                value={city}
                onChange={event => changeCity(event.target.value)}
            >
                {
                    cities.map(cty => <option key={cty} value={cty}>{cty}</option>)
                }
            </select>
        </>
    )
}