import Link from 'next/link'
import React, { Component, Fragment } from 'react'
import Icon from "@ant-design/icons"


class MobileSide extends Component {
    render() {
        const { pathname, blogPath, sideShow, toggle } = this.props;
        return (
            <Fragment>
                <main className={`mobile-memu-wrap ${sideShow ? 'menu-display' : ''}`}>
                    <div className='menu-mask mobile-show' onClick={toggle}></div>
                    <aside className='mobile-menu mobile-show'>
                        <ul>
                            <li>
                                <Link href="/">
                                    <a><Icon type="icon-home" />HOME</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog">
                                    <a className={blogPath.indexOf(pathname) > -1 ? 'link-active' : ''}><Icon type="icon-demo" />BLOG</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/life">
                                    <a className={pathname == '/life' ? 'link-active' : ''}><Icon type="icon-life" />LIFE</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/about">
                                    <a className={pathname == '/about' ? 'link-active' : ''}><Icon type="icon-guanyuwo" />ABOUT</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/board">
                                    <a className={pathname == '/board' ? 'link-active' : ''}><Icon type="icon-liuyanban" />BOARD</a>
                                </Link>
                            </li>
                        </ul>
                    </aside>
                </main>
            </Fragment>
        )
    }
}

export default MobileSide