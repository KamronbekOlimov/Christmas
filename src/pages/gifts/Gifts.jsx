import { useState } from "react";
import "./Gifts.css";
function Gifts() {
  const [gifts, setGifts] = useState([
    {
      imgDesk: "/gingerBread.png",
      imgMbl: "/gingerBreadMobile.png",
      price: 15,
      name: "Gingerbread ",
    },
    {
      imgDesk: "/santaClausHat.png",
      imgMbl: "/clausHatMobile.png",
      price: 22,
      name: "Santa Claus Hat",
    },
    {
      imgDesk: "/candyStick.png",
      imgMbl: "/stickMobile.png",
      price: 12,
      name: "Candy Stick",
    },
    {
      imgDesk: "/christmasTree.png",
      imgMbl: "/treeMobile.png",
      price: 48,
      name: "Christmas Tree",
    },
    {
      imgDesk: "/snowman.png",
      imgMbl: "/snowmanMobile.png",
      price: 35,
      name: "Snowman",
    },
  ]);
  return (
    <>
      <section id="gifts">
        <div className="container">
          <h2>Share A Gift</h2>
          <div className="cards">
            {
            gifts.map((gift, i) => {
              return (
                <div key={i} className="card">
                  <img className="heart" src="/heart.svg" alt="" />
                  <img className="desktop" src={gift.imgDesk} alt="" />
                  <img className="mobile" src={gift.imgMbl} alt="" />
                  <h3>${gift.price}</h3>
                  <p>{gift.name}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
export default Gifts;