import { useState } from 'react'
import './App.css'
import Celebrate from './pages/celebrate/Celebrate'
import Contact from './pages/contact/Contact'
import Footer from './pages/footer/Footer'
import Gifts from './pages/gifts/Gifts'
import New from './pages/new/New'
function App() {
  const [changeMode, setChangeMode] = useState(false)
  const [moon, setMoon] = useState(`/public/moon.svg`)
  const [menu, setMenu] = useState(`/public/menu.svg`)
  const [changeMenu, setChangeMenu] = useState(false)
  const activeMenu = () => {
    setChangeMenu(!changeMenu)
  }
  return (
    <>
    <div className={changeMode?`body dark`:'body'}>
    <header>
      <nav>
        <div className="container">
          <a className='logo' href=""><img src="/public/logo.svg" alt="Christmas logo icon" /><span>Christmas</span></a>
          <ul className="links">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Celebrate</a>
            </li>
            <li>
              <a href="">Gifts</a>
            </li>
            <li>
              <a href="">New</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
            <button onClick={()=>{
              setChangeMode(!changeMode)
              if (changeMode == true) {
                setMoon(`/public/moon.svg`)
                setMenu('/public/menu.svg')
              }else{
                setMoon('/public/darkMoon.svg')
                setMenu('/public/darkMenu.svg')
              }
            }}><img src={moon} alt="" /></button>
            <button onClick={()=>activeMenu()} className='mobileMenu'><img src={menu} alt="" /></button>
          </ul>
        </div>
        <div className={changeMenu?`menu active`:'menu'}>
          <img className='toys' src="/public/toys.png" alt="" />
          <button onClick={()=>activeMenu()} className='exitMenu'>
            <img className='exitImg' src="/public/xmark.svg" alt="" />
            <img className='exitImgMobile' src="/public/xmarkDark.svg" alt="" />
          </button>
          <div className="container">
          <ul className="menuLinks">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Celebrate</a>
            </li>
            <li>
              <a href="">Gifts</a>
            </li>
            <li>
              <a href="">New</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
          </div>
        </div>
      </nav>
      <div className="hero">
        <div className="container">
          <img className='mainHeroImg' src="/public/heroImg.png" alt="" />
          <img className='mobileHeroImg' src="/public/mobileHeroImg.png" alt="" />
          <div className="heroInfo">
            <h1>Merry Christmas and Happy New Year!</h1>
            <p>Christmas and a new year is about to begin, all good wishes and successes.</p>
            <button>Get Started</button>
          </div>
        </div>
      </div>
    </header>
    <main>
      <Celebrate />
      <Gifts />
      <New />
      <Contact />
    </main>
    <Footer />
    </div>
    </>
  )
}
export default App