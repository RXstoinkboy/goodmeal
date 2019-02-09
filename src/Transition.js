import posed from 'react-pose';

export const RoutesContainer = posed.div({
    enter: { 
        opacity: 1,
        beforeChildren: true,
    },
    exit: { opacity: 0}
})