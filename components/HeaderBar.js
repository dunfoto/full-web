import Header from './Header'
import React, { Component, Fragment } from 'react'
import Router, { withRouter } from 'next/router'
import NProgress from 'nprogress'
import { Navbar, Nav, NavDropdown } from "react-bootstrap"
import Link from "./Link"

class HeaderBar extends Component {
    constructor(props) {
        super(props)
    }
    toggleSide() {
        this.props.toggleDispatch()
    }

    progress() {
        Router.onRouteChangeStart = (url) => NProgress.start()
        Router.onRouteChangeComplete = () => {
            NProgress.done();
        }
        Router.onRouteChangeError = () => NProgress.done()
    }

    render() {
        this.progress();
        const { pathname } = this.props.router;
        return (
            <Fragment>
                <Header />
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand><Link path="/" label="TaPhuCo" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Link path="/" label="Home" pathname />
                            <Link path="/about-us" label="About Us" pathname />
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <Link path="#action/3.1" label="Action" pathname />
                                <Link path="#action/3.2" label="Another action" pathname />
                                <Link path="#action/3.3" label="Something" pathname />
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Fragment>
        )
    }
}
export default withRouter(HeaderBar)