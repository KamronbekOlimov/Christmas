import './Gifts.css'
function Gifts() {
  return (
    <>
    <section id='gifts'>
        <div className="container">
            <h2>Share A Gift</h2>
            <div className='cards'>
                <div className="card">
                    <img className='heart' src="./heart.svg" alt="" />
                    <img className='desktop' src="/gingerBread.png" alt="" />
                    <img className='mobile' src="/gingerBreadMobile.png" alt="" />
                    <h3>$15</h3>
                    <p>Gingerbread</p>
                </div>
                <div className="card">
                    <img className='heart' src="./heart.svg" alt="" />
                    <img className='desktop' src="/santaClausHat.png" alt="" />
                    <img className='mobile' src="/clausHatMobile.png" alt="" />
                    <h3>$22</h3>
                    <p>Santa Claus Hat</p>
                </div>
                <div className="card">
                    <img className='heart' src="./heart.svg" alt="" />
                    <img className='desktop' src="/candyStick.png" alt="" />
                    <img className='mobile' src="/stickMobile.png" alt="" />
                    <h3>$12</h3>
                    <p>Candy Stick</p>
                </div>
                <div className="card">
                    <img className='heart' src="./heart.svg" alt="" />
                    <img className='desktop' src="/christmasTree.png" alt="" />
                    <img className='mobile' src="/treeMobile.png" alt="" />
                    <h3>$48</h3>
                    <p>Christmas Tree</p>
                </div>
                <div className="card">
                    <img className='heart' src="./heart.svg" alt="" />
                    <img className='desktop' src="/snowman.png" alt="" />
                    <img className='mobile' src="/snowmanMobile.png" alt="" />
                    <h3>$35</h3>
                    <p>Snowman</p>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
export default Gifts