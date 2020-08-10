import '../style/index.css'
import App from 'next/app';
import { withRouter } from 'next/router'
import { Provider } from 'react-redux'
import withReduxStore from '../store/with-redux-store'
import FrontLayout from "../components/FrontLayout";

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
        const { Component, pageProps, router, reduxStore } = this.props;
        return (
            <Provider store={reduxStore}>
                <FrontLayout>
                    <Component {...pageProps} />
                </FrontLayout>
            </Provider>
        );
    }

}

export default withReduxStore(withRouter(MyApp))
