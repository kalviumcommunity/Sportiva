import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
    colors: {
        primary: '#202023',
    },
    fonts: {
        heading: 'Oswald',
        body: 'Oswald',
    },
    styles: {
        global: {
            h1: { fontFamily: 'Oswald' },
            h2: { fontFamily: 'Oswald' },
            h3: { fontFamily: 'Oswald' },
            h4: { fontFamily: 'Oswald' },
            h5: { fontFamily: 'Oswald' },
            h6: { fontFamily: 'Oswald' },
            body: { fontFamily: 'Oswald' },
        },
    },
})

export default theme