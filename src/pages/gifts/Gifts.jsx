import './Gifts.css'
function Gifts() {
  return (
    <>
    <section id='gifts'>
        <div className="container">
            <h2>Share A Gift</h2>
            <div className='cards'>
                <div className="card">
                    <img className='heart' src="./public/heart.svg" alt="" />
                    <img className='desktop' src="/public/gingerBread.png" alt="" />
                    <img className='mobile' src="/public/gingerBreadMobile.png" alt="" />
                    <h3>$15</h3>
                    <p>Gingerbread</p>
                </div>
                <div className="card">
                    <img className='heart' src="./public/heart.svg" alt="" />
                    <img className='desktop' src="/public/santaClausHat.png" alt="" />
                    <img className='mobile' src="/public/clausHatMobile.png" alt="" />
                    <h3>$22</h3>
                    <p>Santa Claus Hat</p>
                </div>
                <div className="card">
                    <img className='heart' src="./public/heart.svg" alt="" />
                    <img className='desktop' src="/public/candyStick.png" alt="" />
                    <img className='mobile' src="/public/stickMobile.png" alt="" />
                    <h3>$12</h3>
                    <p>Candy Stick</p>
                </div>
                <div className="card">
                    <img className='heart' src="./public/heart.svg" alt="" />
                    <img className='desktop' src="/public/christmasTree.png" alt="" />
                    <img className='mobile' src="/public/treeMobile.png" alt="" />
                    <h3>$48</h3>
                    <p>Christmas Tree</p>
                </div>
                <div className="card">
                    <img className='heart' src="./public/heart.svg" alt="" />
                    <img className='desktop' src="/public/snowman.png" alt="" />
                    <img className='mobile' src="/public/snowmanMobile.png" alt="" />
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