import React from "react";
import Header from "../components/Common/Header";
import CredExperience from "../components/CredExperience";
import CredSecurity from "../components/CredSecurity";
import FeelSpecial from "../components/FeelSpecial";
import HeroSection from "../components/HeroSection";
import ProductShowcase from "../components/ProductShowcase";


const HomePage = () => {
    return (
    <> 
    <Header />
    <HeroSection /> 
    <ProductShowcase />
    <FeelSpecial />
    <CredExperience />
    <CredSecurity />
    </>
    );
};

export default HomePage;