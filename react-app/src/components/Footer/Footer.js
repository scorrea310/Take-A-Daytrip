import "./Footer.css"
import { AiFillLinkedin } from "react-icons/ai"
import { AiFillGithub } from "react-icons/ai"
import { SiGmail } from "react-icons/si"

const Footer = () => {
    return (
        <div className="footerContainer">
            <div className="aboutLinksSectionFooter">
                <div className="aboutCategory">
                    <div className="contactText">Contact</div>
                    <div className="aboutText" >s.correa@berkeley.edu </div>
                    <div className="aboutText" >(310)894-0493 </div>
                </div>
                <div className="aboutCategory">
                    <div className="aboutCategoryTextFooter" >About</div>
                    <a className="aboutText" href="https://www.linkedin.com/in/steve-correa/">Linkedin </a>
                    <a className="aboutText" href="https://github.com/scorrea310">GitHub </a>
                </div>
                <div className="aboutCategory">
                    <div id="builtWithTextFooter">Built With</div>
                    <div className="javascriptText" >Javascript</div>
                    <div className="technologyText">React</div>
                    <div className="technologyText" >Redux</div>
                    <div className="technologyText" >Python</div>
                    <div className="technologyText" >Flask</div>
                    <div className="technologyText" >SQLalchemy</div>
                    <div className="technologyText" >HTML 5</div>
                    <div className="technologyText" >CSS</div>
                    <div className="technologyText" >Amazon S3</div>
                    <div className="technologyText" >Docker</div>
                </div>
                <div className="aboutCategory">
                    <div className="projectsText" >Projects</div>
                    <a className="aboutText" href="http://udderly-forgetful.herokuapp.com/">Udderly ForgetFul </a>
                    <a className="aboutText" href="https://song-cloud-clone.herokuapp.com/">SongCloud</a>
                    <a className="aboutText" href="https://qwerty2022.herokuapp.com/">Qwerty </a>
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