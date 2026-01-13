import React, { useEffect, useState } from "react";
import {Code, Menu,X } from 'lucide-react';
import { NAV_LINKS, PERSONAL_INFO } from "../../utils/constants";
import { scrollToSection, useScrollSpy } from "../../hooks/useScrollSpy";

const Navbar = () => {

    const [isMenuOpen, setisMenuOpen] = useState(false);
    const [isScrolled, setisScrolled] = useState(false);
    const activeSection = useScrollSpy(NAV_LINKS.map(link => link.id));

    useEffect(() => {
        const handleScroll = () => {
            setisScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (sectionId) => {
        scrollToSection(sectionId);
        setisMenuOpen(false);
    };




    return (
        <div>Navbar</div>
    )
}

export default Navbar