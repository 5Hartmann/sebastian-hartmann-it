import HeroImg from "../assets/Bewerbung.jpg";
function Home() {
    return (
        <div className="MainContainer" >
            <div className="contentBlock">
                <div className="textBlock">
                    <h1>Hi and welcome!</h1>

                    <div className="txt">
                        <h3 className="txtTop">Schön das du mich gefunden hast! aber wen eigentlich? erlaub mir mich vorzustellen.<br />
                            Mein Name ist Sebastian Hartmann, ich weis offensichtlich...<br /><br />
                            Ich bin Webentwickler aus der nähe von Berlin, hab früher mal als KFZ-mechatroniker
                            gearbeitet<br /> und 2018 eine umschulung zum Fachinformatiker gemacht.<br />
                            Diese habe ich 2020 erfolgreich abgeschlossen und dan für verschiede Firmen gearbeitet.
                        </h3>
                        <h3 className="txtBottum">
                            wenn du mehr wissen willst schau mal unter <br /><br />
                            <div className="btn"><a href="/About">Über mich</a></div>
                            <br /><br />
                            alternativ geht's heir zu meinem lebenslauf.
                            <br /><br />
                            <div className="btn"> <a href="/CV" >Lebenslauf</a></div>
                            <br /><br />
                            und wenn dir das alles schon reicht und du kontakt aufnehmen willst hab ich hier was für dich!
                            <br /><br />
                            <div className="btn"><a href="/Kontakt">Kontakt</a></div>
                        </h3>
                    </div>
                </div>

                <img id="HeroImg" src={HeroImg} alt="its Me!" />

            </div>
        </div>

    )
}

export default Home;