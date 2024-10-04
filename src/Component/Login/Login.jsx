import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Login = () => {
    const {loginUser} = useContext(AuthContext)
    const handelLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value
        const password = e.target.password.value
        console.log(email, password);
        loginUser(email,password);
    }
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
                <button type="submit" className="btn btn-primary">Register</button>
            </form>
        </div>
    )
}

export default Login