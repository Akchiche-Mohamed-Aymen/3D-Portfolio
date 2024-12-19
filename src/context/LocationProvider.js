import { createContext, useContext, useState } from "react";

const Location = createContext();
export default function LocationProvider({ children }) {
    const [country, setCountry] = useState("");
    const [city, setCity] = useState("");
    function changeCountry(cnt){
        setCountry(cnt)
        setCity("")
    }
    return (
        <Location.Provider value={{ country, city, changeCountry, changeCity: setCity }}>
            {children}
        </Location.Provider>
    )
}
export const useLocation = () => useContext(Location)