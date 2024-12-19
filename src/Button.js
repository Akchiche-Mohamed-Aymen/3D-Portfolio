import { useLanguage } from "./context/LanguageProvider"


export default function Button() {
    const { language,changeLanguage } = useLanguage()
    const changeToAnotherLanguage = _=>{
        changeLanguage(language === "en" ? "ar" : "en")
    }
    return (
        <div className="mt-6">
            <button
            onClick={changeToAnotherLanguage}
             className="border-none text-white p-2 bg-green-600 rounded-sm hover:bg-green-700"
             >
               {language === "en" ? "العربية" : "English" }
             </button>
        </div>
    )
}