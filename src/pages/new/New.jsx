import './New.css'
function New() {
  return (
    <>
    <section id='new'>
        <div className="container">
            <h2>New Gifts</h2>
            <div className="boxes">
                <div className="box">
                    <div className="redCircle">
                    <img src="/public/christmasWreath.png" alt="" />
                    </div>
                    <div className="boxInfo">
                        <h3>$18</h3>
                        <p>Christmas Wreath</p>
                        <button><img src="/public/whiteHeart.svg" alt="" /></button>
                    </div>
                </div>
                <div className="box">
                    <div className="redCircle">
                    <img src="/public/reindeer.png" alt="" />
                    </div>
                    <div className="boxInfo">
                        <h3>$95</h3>
                        <p>Reindeer</p>
                        <button><img src="/public/whiteHeart.svg" alt="" /></button>
                    </div>
                </div>
                <div className="box">
                    <div className="redCircle">
                    <img src="/public/snowGlobe.png" alt="" />
                    </div>
                    <div className="boxInfo">
                        <h3>$20</h3>
                        <p>Snow globe</p>
                        <button><img src="/public/whiteHeart.svg" alt="" /></button>
                    </div>
                </div>
            </div>
            <div className='tfr'>
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