import './Contact.css';

const Contact = () => {
    return (
        <section className="container-fluid contact">

        <div className="heading text-center">
            <h1><span>contact</span> us</h1>
        </div>

        <div className="row justify-content-center">

            <form action="" className="col-md-7">

                <div className="inputBox">
                    <input type="text" required/>
                    <h3>full name</h3>
                </div>

                <div className="inputBox">
                    <input type="email" required/>
                    <h3>e-mail</h3>
                </div>

                <div className="inputBox">
                    <textarea required name="" id="" cols="30" rows="10"></textarea>
                    <h3>message</h3>
                </div>

                <input type="submit" value="send"/>

            </form>
        </div>
      </section>
    )
}

export default Contact
