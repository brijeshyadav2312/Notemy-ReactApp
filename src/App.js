import DetailsPage from "./components/DetailsPage";
import LeftSection from "./components/LeftSection";
import RightMainSection from "./components/RightMainSection";
import Updating from "./components/Upating";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";

function App() {
  const them = useSelector(state => state.theme)
  return (
    <div className={them?('Light'):('Dark')}>
      <div className="App">
        <LeftSection/>
        <Routes>
          <Route path="*" element={<RightMainSection/>} />
          <Route path="/Details/:id" element={<DetailsPage/>}/>
          <Route path="/UpateNote/:id" element={<Updating/>} />
        </Routes>
      </div>
      <div className="mobileView">
        <Routes>
          <Route path="/" element={<LeftSection/>} />
          <Route path="*" element={<RightMainSection/>} />
          <Route path="/Details/:id" element={<DetailsPage/>}/>
          <Route path="/UpateNote/:id" element={<Updating/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
