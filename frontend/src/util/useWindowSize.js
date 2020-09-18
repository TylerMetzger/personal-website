import { useState, useLayoutEffect } from "react";

const useWindowSize = () => {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
        const updateSize = () => {
            setSize([window.innerWidth, window.innerHeight]);
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
}

const windowSizes = {
    '4k': 2560,
    'laptopL': 1440,
    'laptop': 1024,
    'tablet': 768,
    'mobileL': 425,
    'mobileM': 375,
    'mobileS': 320
}

export {
    useWindowSize,
    windowSizes
};