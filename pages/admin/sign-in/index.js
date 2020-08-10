import { useForm } from "react-hook-form";
import "./Login.css";
import Input from "components/Input"
import { postSignIn } from "store/redux/auth"
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

const SignIn = (props) => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        props.postSignIn(data)
    }
    return (
        <div className="Login ">
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input
                    label="Email or User name"
                    id="emailOrUserName"
                    name="id"
                    register={register({
                        required: true
                    })}
                />
                <Input
                    label="Password"
                    id="password"
                    name="password"
                    type="password"
                    register={register({
                        required: true
                    })}
                />
                <button type="submit" className="btn btn-primary w-100">Sign In</button>
            </form>
        </div>
    );
}

const mapDispatchToProps = dispatch => bindActionCreators({
    postSignIn
}, dispatch)
export default connect(null, mapDispatchToProps)(SignIn)