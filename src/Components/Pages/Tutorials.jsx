import './Tutorials.css'
import {Link} from "react-router-dom";

export const Tutorials = () => {
    return (
        <div>
            <div className="title">
                <ul className="coming-soon league-spartan-250 text-6xl pt-40">

                    <li>
                        <Link to='/'>COMING SOON</Link>
                    </li>

                </ul>
            </div>
        </div>

    );
};