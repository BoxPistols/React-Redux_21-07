import { createMuiTheme } from '@material-ui/core/styles'

// サイトのベースとなる独自のテーマを作成する
const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#3376b2',
        },
        secondary: {
            main: '#cc334e',
        },
        background: {
            default: '#234',
        },
    },
    typography: {
        fontFamily: ['sans-serif'].join(','),
        fontSize: 12,
        h1: {
            fontSize: '1.75rem',
        },
        h2: {
            fontSize: '1.5rem',
        },
        h3: {
            fontSize: '1.25rem',
        },
        h4: {
            fontSize: '1.125rem',
        },
        h5: {
            fontSize: '1rem',
        },
        h6: {
            fontSize: '1rem',
        },
    },
})

export default theme
