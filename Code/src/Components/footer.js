import React from 'react';
import '../assest/Css/footer.css';
import { Link} from 'react-router-dom';
function Footer() {
    return(

        <div className="footer-basic">
            <footer>

                <ul className="list-inline">
                    <Link to="/">
                    <li className="list-inline-item">Home</li>
                    </Link>
                    <Link to="/products">
                    <li className="list-inline-item">Services</li>
                    </Link>
                    <Link to="/profile">
                    <li className="list-inline-item">Profile</li>
                    </Link>
                    <li className="list-inline-item"><a href="#">Contact Us</a></li>
                </ul>
                <p className="copyright">Cakelance © 2021</p>
            </footer>
        </div>
    )
}
export default Footer;