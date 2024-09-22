import { useState } from "react";
import "./Gift.css";
function Gift({gifts, giftLike}) {
  return (
    <div id="gifts">
      <div className="container">
        <h2>Share A Gift</h2>
        <div className="cards">
          {gifts.map((gift, index) => {
            return (
              <div key={index} className="card">
                <button onClick={()=>giftLike(index)} className="heart"><i className='fa-regular fa-heart'></i></button>
                <img className="desktop" src={gift.imgDesk} alt="" />
                <img className="mobile" src={gift.imgMbl} alt="" />
                <h3>${gift.price}</h3>
                <p>{gift.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default Gift;