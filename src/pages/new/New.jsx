import { useState } from "react";
import "./New.css";
function New({ news, newLike }) {
    const [newNumber, setNewNumber] = useState(0)
  return (
    <div id="new">
      <div className="container">
        <h2>New Gifts</h2>
        <div className="boxes">
            <button onClick={()=>newNumber!=0?setNewNumber(newNumber-1):setNewNumber(newNumber)} className="nextBtn"><i className="fa-solid fa-angle-left"></i></button>
          <div className="box">
            <div className="redCircle">
              <img src={news[newNumber].img} alt="" />
            </div>
            <div className="boxInfo">
              <h3>${news[newNumber].price}</h3>
              <p>{news[newNumber].name}</p>
              <button onClick={() => newLike(newNumber)}>
                <i className={news[newNumber].liked ? "fa-solid fa-heart" : "fa-regular fa-heart"}></i></button>
            </div>
          </div>
          <button onClick={()=>newNumber!=3?setNewNumber(newNumber+1):setNewNumber(newNumber)} className="nextBtn"><i className="fa-solid fa-angle-right"></i></button>
        </div>
        <div className="tfr">
          <span className={newNumber==0?'active':''} onClick={()=>setNewNumber(0)}></span>
          <span className={newNumber==1?'active':''} onClick={()=>setNewNumber(1)}></span>
          <span className={newNumber==2?'active':''} onClick={()=>setNewNumber(2)}></span>
          <span className={newNumber==3?'active':''} onClick={()=>setNewNumber(3)}></span>
        </div>
      </div>
    </div>
  );
}
export default New;
