import {GetStarted} from "../components/Sections/index-sections/getStarted";
import {WatchTV} from "../components/Sections/index-sections/watchTV";
import {DivededFull} from "../components/UI/Index-UI/DivededFull";
import {OfflineWatch} from "../components/Sections/index-sections/offlineWatch";
import {WhereEverYouWant} from "../components/Sections/index-sections/whereEverYouWant";
import {KidsAccount} from "../components/Sections/index-sections/kidsAccount";
import {FrequentlyQuestions} from "../components/Sections/index-sections/frequentlyQuestions";

export default function Home() {
    return (<div className={''}>
            <GetStarted/>
            <DivededFull/>
            <WatchTV/>
            <DivededFull/>
            <OfflineWatch/>
            <DivededFull/>
            {/*<WhereEverYouWant/>*/}
            {/*<DivededFull/>*/}
            {/*<KidsAccount/>*/}
            {/*<DivededFull/>*/}
            {/*<FrequentlyQuestions/>*/}
        </div>
    )
}
