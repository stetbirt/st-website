import './Navbar.css'
import {Link} from "react-router-dom"

const Navbar = () => {
    return (
        <nav>

            <div className="navbar">

                <div className="title">
                    <ul className="league-spartan-250 text-4xl">

                        <li>
                            <Link to='/'>SAMI TETBIRT</Link>
                        </li>

                    </ul>
                </div>


                <div className="menu-options">
                    <ul className="flex gap-8 league-spartan-500">

                        <li className="menu-options-links">
                            <Link to='/home'>HOME</Link>
                        </li>

                        <li className="menu-options-links">
                            <Link to='/about'>ABOUT</Link>
                        </li>

                        <li className="menu-options-links">
                            <Link to='/tutorials'>TUTORIALS</Link>
                        </li>

                        <li className="menu-options-links">
                            <Link to='/contactme'>CONTACT ME</Link>
                        </li>

                    </ul>
                </div>

            </div>

        </nav>
    );
};

export default Navbar;