import './Footer.css';

const Footer = () => {
    return (
        <section className="container-fluid footer" >

            <div className="row align-items-center">

                <div className="col-md-4 brand">

                    <a href="#" className="logo"><img src="https://drive.google.com/uc?export=download&id=1mdlI8T8QmyRc2_t8MoBRN1GYodTkxkcj" alt="logo" /></a>

                    <div className="icons">
                        <a href="#" className="fab fa-facebook-square"></a>
                        <a href="#" className="fab fa-twitter-square"></a>
                        <a href="#" className="fab fa-instagram-square"></a>
                        <a href="#" className="fab fa-pinterest-square"></a>
                    </div>

                </div>

                <div className="col-md-4 footer-links">
                    <h3>links:</h3>
                    <a href="#home">home</a>
                    <a href="#special">special</a>
                    <a href="#about">about</a>
                    <a href="#books">books</a>
                    <a href="#contact">contact</a>
                </div>

                <div className="col-md-4 text-center text-md-left letter">
                    <h2>Newsletter</h2>
                    <input type="text" />
                    <br></br>
                    <input type="submit" value="subscribe" />
                </div>

            </div>

            <h1>&copy; copyright @ 2021 by <span>Elite Team</span></h1>

        </section>
    )
}

export default Footer;
