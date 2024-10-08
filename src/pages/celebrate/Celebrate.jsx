import "./Celebrate.css";
function Celebrate() {
  return (
    <div id="celebrate">
      <div className="container">
        <div className="celebrateInfo">
          <h2>Celebrate With A Lot Of Love</h2>
          <p>
            In this holidays, celebrate with much love and peace, offering many
            blessings to our loved ones, friends and neighbors, wishing them a
            good Christmas message.
          </p>
          <button>Send Good Wishes</button>
        </div>
        <img className="desktop" src="/celebrateImg.png" alt="" />
        <img className="mobileImg" src="/celebrateMobileImg.png" alt="" />
      </div>
    </div>
  );
}
export default Celebrate;