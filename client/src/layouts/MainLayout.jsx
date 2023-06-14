import React from "react"
import Navigation from "../components/Navigation.jsx"
import Footer from "../components/Footer.jsx"
import "../styles/index.css"

const MainLayout = ({ children }) => {
    return (
        <>
            <Navigation />
            <main>{children}</main>
            <Footer />
        </>
    )
}

export default MainLayout
