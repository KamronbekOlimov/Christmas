import { useState } from "react";
import "./Gift.css";
function Gift({gifts, changeHeartGift}) {
  return (
    <div id="gifts">
      <div className="container">
        <h2>Share A Gift</h2>
        <div className="cards">
          {gifts.map((gift, i) => {
            return (
              <div key={i} className="card">
                <button onClick={()=>changeHeartGift(gift.id)} className="heart"><i className={gift.liked?'fa-solid fa-heart':'fa-regular fa-heart'}></i></button>
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