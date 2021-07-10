import './styles.scss'
import { connect } from 'react-redux'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import { Container, Box, Typography, Button, ButtonGroup } from '@material-ui/core'
import FavoriteIcon from '@material-ui/icons/Favorite'

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
        textAlign: 'center',
    },
}))

const App = ({ number, plus, minus, reset }) => {
    const classes = useStyles()
    return (
        <Container maxWidth='lg' className={classes.root}>
            <div className='App'>
                <Typography variant='h1' component='h1'>
                    <FavoriteIcon color='secondary' />
                    <p>Hello Redux</p>
                </Typography>

                <Typography variant='body1'>Redux Counter</Typography>

                <Box m={4}>
                    <Typography variant='h2'>{number}</Typography>
                </Box>

                <Box m={4}></Box>

                <ButtonGroup>
                    <Button
                        variant='contained'
                        color='primary'
                        onClick={() => {
                            plus(10)
                        }}
                    >
                        Plus
                    </Button>

                    <Button
                        variant='contained'
                        color='secondary'
                        onClick={() => {
                            minus(10)
                        }}
                    >
                        Minus
                    </Button>
                    <Button
                        variant='contained'
                        color='default'
                        onClick={() => {
                            reset(0)
                        }}
                    >
                        Reset
                    </Button>
                </ButtonGroup>
            </div>
        </Container>
    )
}

const mapStateProps = (state) => {
    return {
        number: state,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        plus: (count) => {
            dispatch({ type: 'PLUS', payload: { num: count } })
        },
        minus: (count) => {
            dispatch({ type: 'MINUS', payload: { num: count } })
        },
        reset: (count) => {
            dispatch({ type: 'RESET', payload: { num: count } })
    }
}

export default connect(mapStateProps, mapDispatchToProps)(App)
