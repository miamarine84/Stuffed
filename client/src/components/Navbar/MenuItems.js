import { Link } from "react-router-dom";
import React from "react";
export const MenuItems = [
    {
        title: "Dashboard",
        url: <Link
            to="/"
            className={window.location.pathname === "/" || window.location.pathname === "/dashboard" ? "nav-link active" : "nav-link"}>
            </Link>,
        cName: "nav-links"
    },
    {
        title: "Matches",
        url: <Link
        to="/discover"
        className={window.location.pathname === "/discover" ? "nav-link active" : "nav-link"}>
        </Link>,
        cName: "nav-links"
    },
    {
        title: "Search",
        url: <Link
        to="/search"
        className={window.location.pathname === "/search" ? "nav-link active" : "nav-link"}>
        </Link>,
        cName: "nav-links"
    },
    {
        title: "Logout",
        url: <Link
        to="/Log Out"
        className={window.location.pathname === "/logOut" ? "nav-link active" : "nav-link"}>
        </Link>,
        cName: "nav-links"
    },
    
]
