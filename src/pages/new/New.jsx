import { useState } from 'react'
import './New.css'
function New({news, newLike}) {
  return (
    <div id='new'>
        <div className="container">
            <h2>New Gifts</h2>
            <div className="boxes">
                {
                    news.map((news, index)=>{
                        return (
                            <div key={index} className="box">
                            <div className="redCircle">
                            <img src={news.img} alt="" />
                            </div>
                            <div className="boxInfo">
                                <h3>${news.price}</h3>
                                <p>{news.name}</p>
                                <button onClick={()=>newLike(index)}><i className={news.liked?'fa-solid fa-heart':'fa-regular fa-heart'}></i></button>
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