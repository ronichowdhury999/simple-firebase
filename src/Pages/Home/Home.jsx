import { useContext } from "react"
import { AuthContext } from "../../Component/AuthProvider/AuthProvider";

const Home = () => {
    const user = useContext(AuthContext)
    console.log(user);
    return (
        <div>
            <h1>this is home</h1>
        </div>
    )
}

export default Home