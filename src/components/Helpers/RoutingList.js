import Home from "../../Pages/Home";
import Login from "../../Pages/Login"
import Register from "../../Pages/Register";
import Web from "../../Routes/Web";

const RoutingList = [
    {
        path: "/login",
        exact: true,
        element: <Login/>
    },
    {
        path: "/register",
        exact: true,
        element: <Register/>
    },
];

export default RoutingList;