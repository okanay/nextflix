import '../styles/globals.css'
import store from "../src/redux/store/store";
import {Provider} from "react-redux";
import {Layout} from "../components/Layouts/Main/layout";

function MyApp({Component, pageProps}) {
    return (
        <Provider store={store}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </Provider>

    )
}

export default MyApp
