import { Link } from "react-router-dom";


function clearLocalStorage () {
    localStorage.clear();
}

function Logout () {
    return (
        <Link to='/'>
            <button onClick={clearLocalStorage}>Logout</button>
        </Link>
        )
}

export default Logout;