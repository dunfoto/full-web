import React from "react"
import HeaderBar from './HeaderBar'
import FooterBar from './FooterBar'
import { BackTop } from 'antd'
import '../assets/styles.css'

const FrontLayout = (props) => (
    <React.Fragment>
        <HeaderBar />
        <main id="home-wrap">
            {props.children}
        </main>
        <FooterBar />
        <BackTop />
    </React.Fragment>
)

export default FrontLayout