import './Celebrate.css';
function Celebrate() {
  return (
    <>
    <section id="celebrate">
    <div className="container">
        <div className="celebrateInfo">
            <h2>Celebrate With A Lot Of Love</h2>
            <p>In this holidays, celebrate with much love and peace, offering many blessings to our loved ones, friends and neighbors, wishing them a good Christmas message.</p>
            <button>Send Good Wishes</button>
        </div>
        <img className='desktop' src="./public/celebrateImg.png" alt="" />
        <img className='mobileImg' src="./public/celebrateMobileImg.png" alt="" />
    </div>
    </section>
    </>
  )
}
export default Celebrate