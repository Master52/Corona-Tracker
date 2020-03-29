import React from 'react';
import AllCountry from "./AllCountry";
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';

const URL = "https://corona.lmao.ninja/countries"

const useStyle = makeStyles((theme) => ({
    paper: {
        display : 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(3),
            width: theme.spacing(700),
            height:theme.spacing(70),
        },
    },
    loading: {
        '& > *': {
            margin: theme.spacing(20),
            marginLeft: '45%',
        },
    }
}));

const App = () => {
    const [data,setData] = React.useState(null);
    const classes = useStyle();

    React.useEffect( () => {
        setTimeout(() => {
            fetch(URL).then(response => {
                if( response.ok ) { return response.json(); }
                else { throw new Error("Something Went Worng"); }
                })
                .then( data => setData(data))
                .catch(error => {console.log(error);})
            },1000);
    });

    return (
        <div >
            <CssBaseline />
            <Container maxWidth='lg' >
                <div className = {classes.paper}>
                    <Paper evaluation = {3} >
                        {
                            (data !== null) ?
                                <AllCountry data={data} /> :
                            <div className = {classes.loading} >
                                <CircularProgress size = {100}/>
                            </div>
                        }
                    </Paper>
                </div>
            </Container>
        </div>

    )
}

export default App;
