import '../style/index.css'
import App from 'next/app';
import { PersistGate } from 'redux-persist/integration/react'
import { withRouter } from 'next/router'
import { Provider } from 'react-redux'
import FrontLayout from "../components/FrontLayout";
import AdminLayout from "../components/AdminLayout";
import store from "store/store"
import Header from 'components/Header';

class MyApp extends App {
    constructor(props) {
        super(props);
        const { Component, pageProps, router } = props;
        this.state = { Component, pageProps, router };
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.Component !== prevState.Component
            || nextProps.pageProps !== prevState.pageProps
            || nextProps.router !== prevState.router) {
            return {
                Component: nextProps.Component,
                pageProps: nextProps.pageProps,
                router: nextProps.router
            };
        }
        return null;
    }

    componentDidMount() {
        let reallyDocumentTitle;
        document.addEventListener('visibilitychange', event => {
            if (event.target.hidden || event.target.webkitHidden) {
                reallyDocumentTitle = document.title
                document.title = 'TaPhuCoLtd'
            } else {
                document.title = reallyDocumentTitle
            }
        }, false)

        var _hmt = _hmt || [];
        (function () {
            var hm = document.createElement("script");
            hm.src = "https://hm.baidu.com/hm.js?803566e8ccfd1931d9d8d195df3f46fe";
            var s = document.getElementsByTagName("script")[0];
            s.parentNode.insertBefore(hm, s);
        })();
    }


    render() {
        const { Component, pageProps, router } = this.props;
        return (
            <Provider store={store.store}>
                <PersistGate loading={null} persistor={store.persistor}>
                    <Header />
                    {router.pathname.startsWith("/admin/") ? (
                        <AdminLayout>
                            <Component {...pageProps} />
                        </AdminLayout>
                    ) : (
                            <FrontLayout>
                                <Component {...pageProps} />
                            </FrontLayout>
                        )
                    }
                </PersistGate>
            </Provider>
        );
    }

}

export default withRouter(MyApp)
