import { Outlet } from "react-router-dom"
import Navbar from "../Component/Header/Navbar/Navbar"

const Root = () => {
  return (
    <div>
        <div>
            <Navbar/>
        </div>
        <Outlet/>
    </div>
  )
}

export default Root