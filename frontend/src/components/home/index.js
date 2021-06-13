import Hbackground from './Hbackground';

const index = () => {
    return (
        <section className="container-fluid home">

        <div className="row min-vh-100 align-items-center">

            <div className="col-md-8 ml-md-5 text-md-left text-center content">
                <h1>Books that can make you more creative</h1>
                <h2>enjoy the marvelous books</h2>
            </div>

            <div className="video-container">
                <Hbackground/>
            </div>

            <div className="controls">
                <div className="dots dot1"></div>
                <div className="dots dot2"></div>
                <div className="dots dot3"></div>
            </div>
        </div>
      </section>
    )
}

export default index;
