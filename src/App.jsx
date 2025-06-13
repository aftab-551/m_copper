import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ServicePage from "./pages/ServicePage";
import Footer from "./components/Footer";
import ScrollToTop from "./components/utils/ScrollToTop";
import { FaPhone } from "react-icons/fa";

function App() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return (
            <div className="h-screen flex items-center justify-center bg-dark">
                <div className="animate-pulse text-4xl text-primary-600 font-heading font-bold">
                    MARTIKA COPPER
                </div>
            </div>
        );
    }

    return (
        <>
            <a
                href="tel:+61407769293"
                className="bg-[#e9fbf3] w-full h-[70px] fixed left-0 bottom-0 z-[9999] flex justify-center items-center md:hidden"
            >
                <button className="flex items-center gap-3 shadow-none bg-primary-600 border border-primary-700 text-white hover:bg-primary-700 p-3 rounded-md">
                    <span className="flex items-center gap-2">
                        Call Now:
                        <FaPhone className="text-sm" /> +61 4 0776 9293
                    </span>
                </button>
            </a>
            <div className="min-h-screen bg-light">
                <Navbar />
                <main>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route
                            path="/services/:slug"
                            element={<ServicePage />}
                        />
                    </Routes>
                </main>
                <Footer />
                <ScrollToTop />
            </div>
        </>
    );
}

export default App;
