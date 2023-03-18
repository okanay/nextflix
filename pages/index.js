import {GetStarted} from "../components/Sections/index-sections/getStarted";
import {WatchTV} from "../components/Sections/index-sections/watchTV";
import {DivededFull} from "../components/UI/Index-UI/DivededFull";
import {OfflineWatch} from "../components/Sections/index-sections/offlineWatch";
import {WhereEverYouWant} from "../components/Sections/index-sections/whereEverYouWant";
import {KidsAccount} from "../components/Sections/index-sections/kidsAccount";
import {FrequentlyQuestions} from "../components/Sections/index-sections/frequentlyQuestions";
import {useSelector} from "react-redux";
import {IndexNavigation} from "../components/Sections/index-sections/indexNavigation";
import {IndexFooter} from "../components/Sections/index-sections/IndexFooter";

export default function Home() {

    const language = useSelector(state => state.language.value)

    return (<div className={''}>
            <IndexNavigation/>
            <GetStarted language={language.index.section1}/>
            <DivededFull/>
            <WatchTV language={language.index.section2}/>
            <DivededFull/>
            <OfflineWatch language={language.index.section3}/>
            <DivededFull/>
            <WhereEverYouWant language={language.index.section4}/>
            <DivededFull/>
            <KidsAccount language={language.index.section5}/>
            <DivededFull/>
            <FrequentlyQuestions language={language.index.section6}/>
            <DivededFull/>
            <IndexFooter/>
        </div>
    )
}
