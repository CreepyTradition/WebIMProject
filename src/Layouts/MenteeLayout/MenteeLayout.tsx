import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../../components/nav";
import Footer from "../../components/Footer";
import { ReactLenis } from '@studio-freight/react-lenis'
import { useEffect } from "react";
import Page from "../../config/App";


export default function MenteeLayout() {
const { pathname } = useLocation();

useEffect(() => {
    window.scrollTo(0, 0);
}, [pathname]);

    return (
        <main>    
        <ReactLenis root key = {pathname}>
        <Navbar />
        <Outlet />
        <Footer />
        </ReactLenis>
        </main>
    );
}