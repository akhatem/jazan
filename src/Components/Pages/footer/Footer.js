import React from "react";
import imgFooter from "../../../images/img-footer.png";
import Facebook from "../../../images/facebook.png";
import Twitter from "../../../images/twitter.png";
import Youtube from "../../../images/youtube.png";
import Instagram from "../../../images/instagram.png";
import "./Footer.css";

const Footer  = () => {
    return( 
    <>
        <div className="footer">
            <div className="container">
                <div className="all-img">
                    <div className="img-footer">
                        <img src={imgFooter} />
                    </div>
                    <ul className="social-media-footer">
                        <li><a href="/"><img src={Facebook} /></a></li>
                        <li><a href="/"><img src={Twitter} /></a></li>
                        <li><a href="/"><img src={Youtube} /></a></li>
                        <li><a href="/"><img src={Instagram} /></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </>
    );
}

export default Footer;