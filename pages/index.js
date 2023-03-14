import {GetStarted} from "../components/Sections/index-sections/getStarted";
import {WatchTV} from "../components/Sections/index-sections/watchTV";
import {DivededFull} from "../components/UI/Index-UI/DivededFull";

export default function Home() {
    return (<div className={''}>
            <GetStarted/>
            <DivededFull/>
            <WatchTV/>
            <DivededFull/>
            <section id={'offline-watch'}>
                <p>Çevrimdışı izlemek için içerikleri indirin.</p>
            </section>
            <section id={'location-watch'}>
                <p>İstediğiniz her yerde izleyin.</p>
            </section>
            <section id={'kids-account'}>
                <p>Çocuklarınız için profiller oluşturun.</p>
            </section>
            <section id={'questions'}>
                <p>Sıkça Sorulan Sorular</p>
            </section>
        </div>
    )
}
