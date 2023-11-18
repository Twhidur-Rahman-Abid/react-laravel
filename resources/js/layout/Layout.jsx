import { Head } from "@inertiajs/inertia-react";
import React from "react";
import Navbar from "../components/Navbar";

const Layout = ({ title, children }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>

            {children}
        </>
    );
};

export default Layout;
