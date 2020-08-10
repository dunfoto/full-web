import { withRouter } from "next/router"

const Id = (props) => {
    console.log(props.router.query)
    return (
        <div>About Us with param</div>
    )
}
export default withRouter(Id)