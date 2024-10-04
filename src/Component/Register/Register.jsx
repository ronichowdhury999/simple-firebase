import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Register = () => {
    const { registerUser,setUser } = useContext(AuthContext);
    const [emailError, setEmailError] = useState("")
    const [error, setError] = useState("")
    const handelRegister = (e) => {
        e.preventDefault();
        const name = e.target.name.value
        const photo = e.target.photo.value
        const email = e.target.email.value
        const password = e.target.password.value
        const confirmPassword = e.target.confirmPassword.value
        if (!/^[^\s@]+@gmail\.com$/.test(email)) {
            setEmailError("Please enter a valid @gmail.com email address.")
            return
        }
        else if (password.length < 6) {
            setError("Password must be at least 6 characters long")
            return
        }
        else if (password !== confirmPassword) {
            setError("Please confirm your password")
            return
        } else if (!/[A-Z]/.test(password)) {
            setError("Password must contain at least one uppercase letter.")
            return
        } else if (!/[!@#$%^&*]/.test(password)) {
            setError("Password must contain at least one special character.");
            return
        }
        setEmailError("")
        setError("")
        console.log(name, photo, email, password, confirmPassword);
        registerUser(email, password)
            .then(result => setUser(result.user))
            .catch(error => setError(error.message))
    }
    return (
        <div className="md:w-[40%] w-[80%] mx-auto p-4 rounded-xl border border-red-500">
            <form className="py-2" onSubmit={handelRegister}>
                <div className="mb-4">
                    <p>Name</p>
                    <input name="name" type="text" placeholder="Type here" className="input input-bordered w-full" />
                </div>
                <div className="mb-4">
                    <p>Photo</p>
                    <input name="photo" type="text" placeholder="Type here" className="input input-bordered w-full" />
                </div>
                <div className="mb-4">
                    <p>Email</p>
                    <input name="email" type="text" placeholder="Type here" className="input input-bordered w-full" />
                    {emailError && <span>{emailError}</span>}
                </div>
                <div className="mb-4">
                    <p>Password</p>
                    <input name="password" type="text" placeholder="Type here" className="input input-bordered w-full" />
                </div>
                <div className="mb-4">
                    <p>Confirm Password</p>
                    <input name="confirmPassword" type="text" placeholder="Type here" className="input input-bordered w-full" />
                </div>
                <div className="text-center">
                    {error && <span>{error}</span>}<br/>
                    <button type="submit" className="btn btn-primary">Register</button>
                </div>
            </form>
        </div>
    )
}

export default Register