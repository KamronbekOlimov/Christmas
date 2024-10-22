import { useEffect, useState } from "react";
import "./App.css";
import Celebrate from "./pages/celebrate/Celebrate";
import Contact from "./pages/contact/Contact";
import Footer from "./components/footer/Footer";
import Gift from "./pages/gift/Gift";
import New from "./pages/new/New";
import Home from "./pages/home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";

function App() {
  const [gifts, setGifts] = useState([
    {
      imgDesk: "/gingerBread.png",
      imgMbl: "/gingerBreadMobile.png",
      price: 15,
      name: "Gingerbread",
      liked: false,
      id: Math.floor(Math.random() * 9999),
    },
    {
      imgDesk: "/candyStick.png",
      imgMbl: "/stickMobile.png",
      price: 12,
      name: "Candy Stick",
      liked: false,
      id: Math.floor(Math.random() * 9999),
    },
    {
      imgDesk: "/christmasTree.png",
      imgMbl: "/treeMobile.png",
      price: 48,
      name: "Christmas Tree",
      liked: false,
      id: Math.floor(Math.random() * 9999),
    },
    {
      imgDesk: "/snowman.png",
      imgMbl: "/snowmanMobile.png",
      price: 35,
      name: "Snowman",
      liked: false,
      id: Math.floor(Math.random() * 9999),
    },
  ]);

  const [news, setNews] = useState([
    {
      img: "/christmasWreath.png",
      price: 18,
      name: "Christmas Wreath",
      id: Math.floor(Math.random() * 99999),
      liked: false,
    },
    {
      img: "/reindeer.png",
      price: 95,
      name: "Reindeer",
      id: Math.floor(Math.random() * 99999),
      liked: false,
    },
    {
      img: "/snowGlobe.png",
      price: 20,
      name: "Snow globe",
      id: Math.floor(Math.random() * 99999),
      liked: false,
    },
    {
      img: "/sledge.png",
      price: 75,
      name: "Sledge",
      id: Math.floor(Math.random() * 99999),
      liked: false,
    },
  ]);

  const [moon, setMoon] = useState("/moon.svg");
  const [menu, setMenu] = useState("/menu.svg");
  const [changeMode, setChangeMode] = useState(true);
  const [activeMenu, setActiveMenu] = useState(true);
  const [menuExit, setMenuExit] = useState("/xmark.svg");
  useEffect(() => {
    const savedMode = localStorage.getItem('mode');
    if (savedMode === 'light') {
      setDarkMode(false);
    } else {
      setDarkMode(true);
    }
  }, []);
  const setDarkMode = (isDark) => {
    setChangeMode(isDark);
    setMoon(isDark ? "/moon.svg" : "/sun.svg");
    setMenu(isDark ? "/menu.svg" : "/darkMenu.svg");
    setMenuExit(isDark ? "/xmark.svg" : "/xmarkDark.svg");
    localStorage.setItem('mode', isDark ? 'dark' : 'light');
  };

  const toggleMode = () => {
    setDarkMode(!changeMode);
  };

  const toggleMenu = () => {
    setActiveMenu(!activeMenu);
  };

  const toggleGiftLike = (index) => {
    const updatedGifts = [...gifts];
    updatedGifts[index].liked = !updatedGifts[index].liked;
    setGifts(updatedGifts);
  };
  const toggleNewLike = (index) => {
    const updatedNews = [...news];
    updatedNews[index].liked = !updatedNews[index].liked;
    setNews(updatedNews);
  };
  return (
    <div className={changeMode ? "body" : "body dark"}>
      <BrowserRouter>
        <Navbar
          toggleMode={toggleMode}
          moon={moon}
          menu={menu}
          changeMenu={toggleMenu}
          activeMenu={activeMenu}
          menuExit={menuExit}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/celebrate" element={<Celebrate />} />
          <Route path="/gift" element={<Gift gifts={gifts} giftLike={toggleGiftLike} />} />
          <Route path="/new" element={<New news={news} newLike={toggleNewLike} />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
export default App;