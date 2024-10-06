import { useContext, useEffect } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
    const { loginUser, googleLogin, setUser, facebookLogin, user } = useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate();
    const handelLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value
        const password = e.target.password.value
        loginUser(email, password);
    }
    const handelGoogleSign = () => {
        googleLogin()
            .then(result => setUser(result.user))
    }
    const handelFacebookLogin = () => {
        facebookLogin()
            .then(result => setUser(result.user))
    }
    useEffect(() => {
        if (user) {
            navigate(location.state)
        }
    }, [user])

    return (

        <div className="md:w-[40%] w-[80%] mx-auto p-4 rounded-xl border border-red-500">
            <form onSubmit={handelLogin}>
                <div>
                    <p>Email</p>
                    <input name="email" type="text" placeholder="Type here" className="input input-bordered w-full" />
                </div>
                <div>
                    <p>Password</p>
                    <input name="password" type="text" placeholder="Type here" className="input input-bordered w-full" />
                </div>
                <div className="text-center space-x-4 py-4">
                    <button type="submit" className="btn btn-primary">Login</button>
                    <button onClick={handelGoogleSign} className="btn btn-primary">Goolge</button>
                    <button onClick={handelFacebookLogin} className="btn btn-primary">Facebook</button>
                </div>
            </form>
        </div>
    )
}

export default Login