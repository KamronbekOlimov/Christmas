import './Footer.css'
function Footer() {
  return (
    <>
    <footer>
    <img className='orangeMobile' src="./public/orangeToyMobile.png" alt="" />
        <div className="container">
            <img className='greenToy' src="./public/greenToy.png" alt="" />
            <img className='orangeToy' src="./public/orangeToy.png" alt="" />
            <img className='greenMobile' src="./public/greenToyMobile.png" alt="" />
            <div className='footer'>
            <ul className="footerLinks">
                <a className='logo' href=""><img src="./public/logo.svg" alt="" /><span>Christmas</span></a>
                <p>This Christmas give a lot of love</p>
            </ul>
            <ul className="footerLinks">
                <h4>Our Services</h4>
                <li>
                    <a href="">Pricing</a>
                </li>
                <li>
                    <a href="">Discounts</a>
                </li>
                <li>
                    <a href="">Shipping mode</a>
                </li>
            </ul>
            <ul className="footerLinks">
                <h4>Support</h4>
                <li>
                    <a href="">FAQs</a>
                </li>
                <li>
                    <a href="">Support center</a>
                </li>
                <li>
                    <a href="">Contact Us</a>
                </li>
            </ul>
            <ul className="footerLinks">
                <h4>Available On</h4>
                <button>Google Play</button>
                <button>App Store</button>
            </ul>
            </div>
            <p className='hash'>@ Bedimcode. All rigths reserved</p>
        </div>
    </footer>
    </>
  )
}
export default Footer