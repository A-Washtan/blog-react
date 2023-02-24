import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>مدونة ابووشطان</h1>
            <div className="links">
                <Link to="/">الرئيسية</Link>
                <Link to="/create">مونة جديدة</Link>
            </div>
        </nav>
    );
}

export default Navbar;