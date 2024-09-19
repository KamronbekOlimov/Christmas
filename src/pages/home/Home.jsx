import "./Home.css";
function Home() {
  return (
    <div className="hero">
      <div className="container">
        <img className="mainHeroImg" src="/heroImg.png" alt="" />
        <img className="mobileHeroImg" src="/mobileHeroImg.png" alt="" />
        <div className="heroInfo">
          <h1>Merry Christmas and Happy New Year!</h1>
          <p>
            Christmas and a new year is about to begin, all good wishes and
            successes.
          </p>
          <button>Get Started</button>
        </div>
      </div>
    </div>
  );
}
export default Home;