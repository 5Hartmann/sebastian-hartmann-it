import { Link } from "react-router-dom";
import HeroImg from "../assets/FrontAnsicht.png";
function Home() {
    return (
        <div className="MainContainer" >
            <div className="contentBlock">
                <div className="textBlock">
                    <h1>Hi and welcome!</h1>

                    <div className="txt">
                        <h3 className="txtTop">Schön, dass du mich gefunden hast! Aber wen eigentlich? Erlaub mir mich vorzustellen.<br />
                            Mein Name ist Sebastian Hartmann, ich weiß offensichtlich...<br /><br />
                            Ich bin Webentwickler aus der Nähe von Berlin, hab früher mal als KFZ-Mechatroniker
                            gearbeitet<br /> und 2018 eine Umschulung zum Fachinformatiker gemacht.<br />
                            Diese habe ich 2020 erfolgreich abgeschlossen und dann für verschiedene Firmen gearbeitet.
                        </h3>
                        <h3 className="txtBottum">
                            wenn du mehr wissen willst, schau mal unter <br /><br />
                            <div className="btn"><Link to="/About">Über mich</Link></div>
                            <br /><br />
                            alternativ geht's hier zu meinem Lebenslauf.
                            <br /><br />
                            <div className="btn"> <Link to="/CV" >Lebenslauf</Link></div>
                            <br /><br />
                            und wenn dir das alles schon reicht und du Kontakt aufnehmen willst, habe ich hier was für dich!
                            <br /><br />
                            <div className="btn"><Link to="/Kontakt">Kontakt</Link></div>
                        </h3>
                    </div>
                </div>

                <img id="HeroImg" src={HeroImg} alt="its Me!" />

            </div>
        </div>

    )
}

export default Home;