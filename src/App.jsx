import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/* Folder exercise */
import Count from './exercise/Count'
import Visible from './exercise/Visible'
import ToDate from './exercise/Date.jsx'
/* Folder props */
import City from './props/City.jsx'
import CityVisible from './props/CityVisible.jsx'
import Click from './props/Click.jsx'
/* Folder maps */
import CityMap from './maps/City.jsx'
import CityFilter from './maps/CityFilter.jsx'
import FilterCity from './maps/filterCity.jsx'
import List from './maps/CitiesMap.jsx'
/* Folder useState - useEffect */
import NextImage from './useState/NextImage.jsx'
import Timer from './useState/Timer.jsx'
import RequestTracker from './useState/RequestTracker.jsx'
import MovingDot from './useState/MovingDot.jsx'
import UploadScore from './useState/UploadScore.jsx'
import NameList from './useState/NameList.jsx'
import Quiz from './useState/Quiz.jsx'
import Picked from './useState/Picked.jsx'

/* Folder Chat */
import Messenger from './chat/Messenger.jsx'

import CocktailList from './api/Api.jsx'
import CocktailDetail from './api/CocktailDetail.jsx';


function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* <Count /> */}
          {/* <Visible /> */}
          {/* <ToDate /> */}

          {/* <City /> */}
          {/* <CityVisible /> */}
          {/* <Click /> */}

          {/* <CityMap /> */}
          {/* <CityFilter /> */}
          {/* <FilterCity /> */}
          {/* <List /> */}

          {/* <NextImage /> */}
          {/* <Timer /> */}
          {/* <RequestTracker /> */}
          {/* <MovingDot /> */}
          {/* <UploadScore /> */}
          {/* <NameList /> */}
          {/* <Quiz /> */}
          {/* <Picked /> */}
          {/* <Messenger /> */}


          {/* Pagina principale con lista */}
          <Route path="/" element={<CocktailList />} />

          {/* Pagina dinamica del dettaglio */}
          <Route path="/cocktail/:id" element={<CocktailDetail />} />
        </Routes>
      </Router>
    </>
  )
}

export default App