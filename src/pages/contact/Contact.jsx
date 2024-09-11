import './Contact.css'

function Contact() {
  return (
    <>
    <section id='contact'>
        <div className="container">
            <div className="contactForm">
            <h2>Send Good Wishes!</h2>
            <form action="">
                <input required type="text" placeholder='Write your message' />
                <button>Send Message</button>
            </form>
            </div>
            <img className='desktop' src="./public/letter.png" alt="" />
            <img className='mobile' src="./public/letterMobile.png" alt="" />
        </div>
    </section>
    </>
  )
}

export default Contact