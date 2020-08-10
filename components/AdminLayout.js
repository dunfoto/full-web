import React from "react"
import Header from './Header'
import FooterBar from './FooterBar'
import { BackTop } from 'antd'
import '../assets/styles.css'

const FrontLayout = (props) => (
    <React.Fragment>
        <Header />
        <main id="home-wrap">
            {props.children}
        </main>
        <FooterBar />
        <BackTop />
    </React.Fragment>
)

export default FrontLayout