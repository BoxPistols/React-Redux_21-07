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
        <div className='App'>
            <Container maxWidth='lg' className={classes.root}>
                <Typography variant='h1' component='h1'>
                    <FavoriteIcon color='secondary' />
                    <h1>Hello Redux</h1>
                </Typography>

                <Typography variant='body1'>Redux Counter</Typography>

                <Box m={4}>
                    <Typography variant='h2'>{number}</Typography>
                </Box>

                <Box m={4}></Box>

                <ButtonGroup color='primary' aria-label='outlined button group'>
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
                        color='null'
                        onClick={() => {
                            reset(0)
                        }}
                    >
                        Reset
                    </Button>
                </ButtonGroup>
            </Container>
        </div>
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
        },
    }
}

export default connect(mapStateProps, mapDispatchToProps)(App)
