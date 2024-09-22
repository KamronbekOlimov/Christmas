import { useState } from 'react'
import './New.css'
function New({news}) {
  return (
    <div id='new'>
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
                                <button><i className='fa-regular fa-heart'></i></button>
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
    </div>
  )
}
export default New