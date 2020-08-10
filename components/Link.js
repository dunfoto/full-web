import Link from "next/link"
import classNames from 'classnames'

const LinkComponent = (props) => {
    let className = classNames({
        "nav-link": true,
        "is-active": props.pathname
    })
    return <Link href={props.path}><a className={className}>{props.label}</a></Link>

}
export default LinkComponent