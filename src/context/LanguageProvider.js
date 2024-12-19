import { createContext, useContext, useState } from "react";

const LanguageContext = createContext();
export default function LanguageProvider({ children }) {
    const [language, setLanguage] = useState("en") // english
    console.log(language)
    return (
        <LanguageContext.Provider value={
            {
                language,
                changeLanguage: setLanguage
            }}
        >
            {children}
        </LanguageContext.Provider>
    )
}

export const useLanguage = () => useContext(LanguageContext)
