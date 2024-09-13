import { useState } from 'react'
import './New.css'
function New() {
    const [news, setNews] = useState([
        {
            img: '/christmasWreath.png',
            price: 18,
            name: 'Christmas Wreath',
        },
        {
            img: '/reindeer.png',
            price: 95,
            name: 'Reindeer',
        },
        {
            img: '/snowGlobe.png',
            price: 20,
            name: 'Snow globe',
        },
        {
            img: '/sledge.png',
            price: 75,
            name: 'Sledge',
        },
    ])
  return (
    <>
    <section id='new'>
        <div className="container">
            <h2>New Gifts</h2>
            <div className="boxes">
                {
                    news.map((news, i)=>{
                        return (
                            <div key={i} className="box">
                            <div className="redCircle">
                            <img src={news.img} alt="" />
                            </div>
                            <div className="boxInfo">
                                <h3>${news.price}</h3>
                                <p>{news.name}</p>
                                <button><img src="/whiteHeart.svg" alt="" /></button>
                            </div>
                        </div>
                        )
                    })
                }
            </div>
            <div className='tfr'>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    </section>
    </>
  )
}
export default New