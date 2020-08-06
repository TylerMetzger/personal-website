import { useWindowSize, windowSizes } from "../../util/useWindowSize.js"

const windowWidth = useWindowSize()[0];

const columnSizing = () => { //this is for different sizings among rendering layouts
    if (windowWidth >= windowSizes.laptopL) {
        return {
            col1: '400px',
            col2: '900px',
            gutter: 0,
            titleSize: 72,
            descSize: 18,
            picStyle: {
                height: '400px',
                width: '400px',
                position: 'absolute',
                bottom: '-10vh',
                animationName: 'pictureOfMeAnimation'
            }
        }
    }
    else if (windowWidth >= windowSizes.laptop) {
        return {
            col1: '325px',
            col2: '650px',
            gutter: 0,
            titleSize: 62,
            descSize: 18,
            picStyle: {
                height: '325px',
                width: '325px',
                position: 'absolute',
                bottom: '-10vh',
                animationName: 'pictureOfMeAnimation',
                transform: 'translateX(-50%)',
                left: '50vw'
            }
        }
    } else if (windowWidth >= windowSizes.tablet) {
        return {
            col1: '325px',
            col2: '400px',
            gutter: 0,
            titleSize: 62,
            descSize: 18,
            picStyle: {
                height: '325px',
                width: '325px',
                position: 'absolute',
                bottom: '-10vh',
                animationName: 'pictureOfMeAnimation',
                transform: 'translateX(-50%)',
                left: '50vw'
            }
        }
    } else {
        return {
            col1: '250px',
            col2: '475px',
            gutter: 0,
            titleSize: 56,
            descSize: 18,
            picStyle: {
                height: `min(${windowWidth - 40}px, 450px)`,
                width: `min(${windowWidth - 40}px, 450px)`,
                position: 'relative',
                animationDelay: '0.5s',
                animationName: 'pictureOfMeAnimationMobile',
                opacity: '0%',
                left: '50vw',
                transform: 'translate(-50%, 90%)'
            }
        }
    }
}

export {
    columnSizing
}