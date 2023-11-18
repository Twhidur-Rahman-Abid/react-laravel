/*
    Responsible for rendering home page and it's components

    - receive donors and user from PageController as props 
    - Pass user to the Navber component
    - Passes donors to the DonorTable component
    - responsible for home page styles
*/

import React from "react";
import Navbar from "../components/Navbar";
import DonorTable from "../components/DonorTable";
import SearchDonor from "../components/search/SearchDonor";
import Layout from "../layout/Layout";

const Home = ({ donors, user }) => {
    return (
        <div className="h-[100vh] w-[90%] m-auto">
            <Navbar user={user} />
            <SearchDonor />
            <DonorTable donors={donors} />
        </div>
    );
};

Home.layout = (page) => <Layout children={page} title="Home - lifesyncer" />;

export default Home;
