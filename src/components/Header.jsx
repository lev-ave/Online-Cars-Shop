import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Header({ cart }) {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="bg-[#3e0000] text-white">
            <div className="flex items-center justify-between px-5 py-5 md:px-10">
                <h1 className="text-xl font-semibold"> Online Cars Shop </h1>
                <div className="hidden md:flex items-center gap-12 font-semibold text-lg">
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/signin">Sign In</Link>
                    <Link to="/dashboard">Dashboard</Link>
                    <Link to="/cart">Cart</Link>
                </div>
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden flex flex-col gap-1.5 p-2"
                    aria-label="Toggle menu"
                    aria-expanded={menuOpen}
                >
                    <span className="w-7 h-0.5 bg-white"></span>
                    <span className="w-7 h-0.5 bg-white"></span>
                    <span className="w-7 h-0.5 bg-white"></span>
                </button>
            </div>
            {menuOpen && (
                <nav className="md:hidden flex flex-col items-center gap-5 pb-6 font-semibold text-lg">
                    <NavLink to="/" onClick={() => setMenuOpen(false)}>Home</NavLink>
                    <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
                    <Link to="/signin" onClick={() => setMenuOpen(false)}>Sign In</Link>
                    <Link to="/dashboard" onClick={() => setMenuOpen(false)}>Dashboard</Link>
                    <Link to="/cart" onClick={() => setMenuOpen(false)}></Link>
                </nav>
            )}
        </header>
    );
}

export default Header;