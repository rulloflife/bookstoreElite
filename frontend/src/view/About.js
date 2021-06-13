import './About.css'

const About = () => {
    return (
        <section className="container about">

                <div className="heading text-center">
                    <h1><span>about</span> us</h1>
                </div>

                <div class="row min-vh-100">

                    <div className="col-md-6 text-center text-md-left align-self-center content">
                    <p>Elite Bookstore is an online bookstore with a mission to financially support local, independent bookstores.</p>
                    <p>We believe that bookstores are essential to a healthy culture. They’re where authors can connect with readers, where we discover new writers, where children get hooked on the thrill of reading that can last a lifetime. They’re also anchors for our downtowns and communities.</p>
                    <p>As more and more people buy their books online, we wanted to create an easy, convenient way for you to get your books and support bookstores at the same time.</p>
                    <p>We hope that Elite Bookstore can help strengthen the fragile ecosystem and margins around bookselling and keep local bookstores an integral part of our culture and communities.</p>
                    	<p>Bookshop is a benefit corporation - a corporation dedicated to the public good.</p>
                    <a href="#"><button>learn more</button></a>
                </div>

                <div className="col-md-6 image">
                    <img src="https://drive.google.com/uc?export=download&id=1ce2oR28J1wnzGdLGGDWG6qcSFCHJwKxs" alt=""/>
                </div>
            </div>
        </section>
    )
}

export default About;
