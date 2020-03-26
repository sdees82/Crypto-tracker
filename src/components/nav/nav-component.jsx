import React from 'react';
import { useHistory} from "react-router-dom";
import "./nav.style.css";


const Nav = () => {
    const history = useHistory();
    return ( 
        <nav>
            <ul>
                <li onClick={()=> history.push("/")}>News</li>
                <li onClick={()=> history.push("/prices")}>Prices</li>
            </ul>
        </nav>
     );
}
 
export default Nav;