import { useEffect, useState } from "react";

export const useScrollSpy = (sectionIds, offset = 100) => {
    const [activeSection, setActiveSession] = useState('');

    useEffect (() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + offset;
        
            //Find the current section
            for (let i = sectionIds.length -1; i >=0; i--) {
                const section = document.getElementById(sectionIds[i]);
                if (section) {
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.offsetHeight;

                    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                        setActiveSession(sectionIds[i]);
                        break
                    }
                    
                }
            }
        };

        handleScroll();

        window.addEventListener('scroll', handleScroll, { passive: true});

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [sectionIds, offset]);
};

//Smooth scroll to section

export const scrollToSection = (sectionId, offset = 80) => {
    const section = document.getElementById(sectionId);
    if (section) {
        const top = section.offsetTop - offset;
        window.scrollTo({
            top,
            behavior: 'smooth'
        });
    }
};

