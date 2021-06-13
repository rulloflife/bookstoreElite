import React,{Fragment} from 'react';

const Hbackground = props => {
    return(
        <Fragment>
            <video className="vid vid1" autoPlay loop muted>
                <source src="https://drive.google.com/uc?export=download&id=1w8IIKmjDr8WwpG8kOQ986M9gooLwuPJS" type='video/mp4' />  
            </video>
            <video className="vid vid2" autoPlay loop muted>
                <source src="https://drive.google.com/uc?export=download&id=1s8WIE7FEcOgYSnHa9evvHXcUMUGFQD5L" type='video/mp4' />  
            </video>
            <video className="vid vid3" autoPlay loop muted>
                <source src="https://drive.google.com/uc?export=download&id=1blelunvvyt3OzbEiHu_x8898CKq5siy_" type='video/mp4' />  
            </video>
        </Fragment>
    )
}
export default Hbackground;