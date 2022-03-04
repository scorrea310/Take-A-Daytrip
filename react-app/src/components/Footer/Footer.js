import "./Footer.css"
import { AiFillLinkedin } from "react-icons/ai"
import { AiFillGithub } from "react-icons/ai"
import { SiGmail } from "react-icons/si"

const Footer = () => {
    return (
        <div className="footerContainer">
            <div className="aboutLinksSectionFooter">
                <div className="aboutCategory">
                    <div style={{ fontSize: "14px", color: "rgb(34, 34, 34)", fontWeight: "800" }}>Contact</div>
                    <div style={{ textDecoration: "none", color: "black", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", marginTop: "20px", fontSize: "14px" }} >s.correa@berkeley.edu </div>
                    <div style={{ textDecoration: "none", color: "black", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", marginTop: "20px", fontSize: "14px" }} >(310)894-0493 </div>
                </div>
                <div className="aboutCategory">
                    <div style={{ fontSize: "14px", color: "rgb(34, 34, 34)", fontWeight: "800" }}>About</div>
                    <a style={{ textDecoration: "none", color: "black", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", marginTop: "20px", fontSize: "14px" }} href="https://www.linkedin.com/in/steve-correa/">Linkedin <AiFillLinkedin style={{ fontSize: "24px", borderRadius: "12px", marginLeft: "5px" }} /></a>
                    <a style={{ textDecoration: "none", color: "black", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", marginTop: "20px", fontSize: "14px" }} href="https://github.com/scorrea310">GitHub <AiFillGithub style={{ fontSize: "24px", marginLeft: "5px" }} /></a>
                </div>
                <div className="aboutCategory">
                    <div style={{ fontSize: "14px", color: "rgb(34, 34, 34)", fontWeight: "800" }}>Built With</div>
                    <div style={{ marginTop: "5px", fontSize: "14px" }}>Javascript</div>
                    <div style={{ marginTop: "5px", fontSize: "14px" }}>React</div>
                    <div style={{ marginTop: "5px", fontSize: "14px" }}>Redux</div>
                    <div style={{ marginTop: "5px", fontSize: "14px" }}>Python</div>
                    <div style={{ marginTop: "5px", fontSize: "14px" }}>Flask</div>
                    <div style={{ marginTop: "5px", fontSize: "14px" }}>SQLalchemy</div>
                    <div style={{ marginTop: "5px", fontSize: "14px" }}>HTML 5</div>
                    <div style={{ marginTop: "5px", fontSize: "14px" }}>CSS</div>
                    <div style={{ marginTop: "5px", fontSize: "14px" }}>Amazon S3</div>
                    <div style={{ marginTop: "5px", fontSize: "14px" }}>Docker</div>
                </div>
                <div className="aboutCategory">
                    <div style={{ fontSize: "14px", color: "rgb(34, 34, 34)", fontWeight: "800" }}>Projects</div>
                    <a style={{ textDecoration: "none", color: "black", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", marginTop: "20px", fontSize: "14px" }} href="http://udderly-forgetful.herokuapp.com/">Udderly ForgetFul </a>
                    <a style={{ textDecoration: "none", color: "black", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", marginTop: "20px", fontSize: "14px" }} href="https://song-cloud-clone.herokuapp.com/">SongCloud</a>
                    <a style={{ textDecoration: "none", color: "black", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", marginTop: "20px", fontSize: "14px" }} href="https://qwerty2022.herokuapp.com/">Qwerty </a>
                </div>
            </div>

            <div className="bottomSectionFooter">
                <div>© 2022 Take A Daytrip, Inc. · Privacy · Terms · Sitemap</div>
                <div className="englishAndUSDTextContainer" >English(US)  $ USD</div>
            </div>
        </div>
    )
}

export default Footer