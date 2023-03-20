import '../styles/globals.css'
import store from "../src/redux/store/store";
import {Provider} from "react-redux";
import {Layout} from "../components/Layouts/Main/layout";
import {SessionProvider} from "next-auth/react";

function MyApp({Component, pageProps: { session, ...pageProps },})
{
    return (
        <SessionProvider session={session}>
            <Provider store={store}>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </Provider>
        </SessionProvider>

    )
}

export default MyApp
