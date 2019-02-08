import posed from 'react-pose';

export const RoutesContainer = posed.div({
    enter: { 
        opacity: 1,
        beforeChildren: true,
        staggerChildren: 100,
        stagerDirection: -1,
        transition: {
            duration: 500
        }
    },
    exit: { opacity: 0,
        staggerChildren: 100,
        transition: {
            duration: 500
        }
    }
})