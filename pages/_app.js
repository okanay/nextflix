import '../styles/globals.css'
import store from "../src/redux/store/store";
import {Provider} from "react-redux";
import {Layout} from "../components/Layouts/Main/layout";
import {AnimatePresence, motion} from "framer-motion";

function MyApp({Component, pageProps}) {
    return (
        <AnimatePresence mode='wait'>
            <Provider store={store}>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </Provider>
        </AnimatePresence>

    )
}

export default MyApp
