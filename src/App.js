import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Context } from "./Context";
import Header from "./visualcomponents/Header";
import Home from "./components/home/Home";
import Footer from "./visualcomponents/Footer";
import GallerySingle from "./components/gallery/GallerySingle";
import Gallery from "./components/gallery/Gallery";
import About from "./components/about/About";
import Auctions from "./components/auctions/Auctions";
import { useEffect, useState } from "react";
import { cars, color, fonts } from "./allLists";
import Logistics from './components/logistics/Logistics' 
import Contact from "./components/contact/Contact";
import Sign from './visualcomponents/Sign'
import Settings from './visualcomponents/Settings'
import AOS from "aos";
import "aos/dist/aos.css";
import Favorite from "./visualcomponents/Favorite";
import AuctionsGame from "./components/auctions/AuctionsGame";
import Register from './visualcomponents/Register';


function App() {
  const [actualSingle, setActualSingle] = useState(cars[0]);
  const [ActualCar, setActualCar] = useState(cars[0]);
  const [filterCarName, setFilterCarName] = useState("");
  const [filtered, setFiltered] = useState(cars);
  const [select, setSelect] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [favorite, setFavorite] = useState([]);
  const [local,setLocal] = useState([]);
  const [forloader, setforloader] = useState(false);
  const [settings,setSettings] = useState(false);
  const [cubicbeizer,setCubicbeizer] = useState(false);
  const [bgcolor,setBgColor] = useState(true);
  const [color_list,setColor_list] = useState([]);
  const [webfonts,setWebfonts] = useState(true);
  const [fonts_lsit,setFonts_list] = useState([]);
  const [field,setField] = useState({
      username : '',
      password : '',
      email : ''
  });

  const realFilter = (carname) => {
    let filter = cars.filter((car) => car.carbrand == carname);
    setFiltered(filter);
  };

  const stylesbackground = {
    background: new Date().getHours() >= 13 && new Date().getHours() < 19 ? 'lime' : 'Darkred',
  }

  const stylesevents = {
    pointerEvents: new Date().getHours() >= 13 && new Date().getHours() < 19 ? 'unset' : 'none',
  }

  const favoriteAdding = (item) => setFavorite([...favorite, item]);
  const favoriteRemoveing = (x) =>
    setFavorite([...favorite.filter((item) => item.id !== x)]);

  const properties = {
    actualSingle, setActualSingle,
    filterCarName, setFilterCarName,
    filtered, setFiltered,
    realFilter, select,
    setSelect, currentPage,
    setCurrentPage, favorite,
    setFavorite, favoriteAdding,
    favoriteRemoveing,
    stylesbackground, stylesevents,
    local,setLocal,
    forloader, setforloader,
    settings,setSettings,
    cubicbeizer,setCubicbeizer,
    bgcolor,setBgColor,
    color_list,setColor_list,
    webfonts,setWebfonts,
    fonts_lsit,setFonts_list,
    ActualCar, setActualCar,
    field,setField
  };

  useEffect(() => {
    setActualSingle(JSON.parse(localStorage.getItem("auctionSingle")));
    setActualCar(JSON.parse(localStorage.getItem("actualcar")));
    AOS.init({
      duration: 500,
    });
  }, []);


  useEffect(() => {
      let loader = document.querySelector('.loader');
      loader.style.display = 'flex';
      setTimeout(() => {
        loader.style.display = 'none';
      }, Math.round(Math.random() * 4000));
  },[forloader]);

  window.onload = () => setforloader(!forloader);

  return (
    <Context.Provider value={properties}>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Single" element={<GallerySingle />}></Route>
          <Route path="/Gallery" element={<Gallery />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Auction" element={<Auctions />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
          <Route path="/Favorite" element={<Favorite />}></Route>
          <Route path="/Sign" element={<Sign />}></Route>
          <Route path="/Settings" element={<Settings />}></Route>
          <Route path="/AuctionGame" element={<AuctionsGame />}></Route>
          <Route path="/SignUP" element={<Register/>}></Route>
          <Route path="/Logistics" element={<Logistics/>}></Route>
        </Routes>
        <Footer />
        <div className="loader">
            <div className="loading"></div>
        </div>
        <Settings/>
        
      </div>
     
    </Context.Provider>
  );
}

export default App;





 