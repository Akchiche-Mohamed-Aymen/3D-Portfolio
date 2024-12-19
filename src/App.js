
import './App.css';
import Button from './Button';

import Countries from './Countries';
import Weather from './Weather';
import { useLanguage } from './context/LanguageProvider';

function App() {
  const { language} = useLanguage()
  
  return (
        <div className="App">
          <div className='container' style={{ direction: (language === "en") ? "ltr" : "rtl" }}>
            <Countries />
            <Weather />
            <Button />
          </div>
        </div>
    
  );

}

export default App;
