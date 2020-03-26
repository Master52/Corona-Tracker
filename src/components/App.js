import React from 'react';
import '../../node_modules/react-vis/dist/style.css';
import '../App.css'
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';


const useStyle = makeStyles((theme) => ({
    paper: {
        display : 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(5),
            width: theme.spacing(800),
            height:theme.spacing(75),
        },
    },
    gridlayout: {
        display : 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden'
    },
   gridList: {
    width: 256,
    height: 167,
   },

}));

const App = (props) => {
    const classes = useStyle();
    props.data.map((currentValue) => { console.log(currentValue.country);
        console.log(currentValue.countryInfo.flag);

    })
    return(
        <div >
            <CssBaseline />
            <Container maxWidth='lg' >
                <div className = {classes.paper}>
                    <Paper evaluation = {3} >
                        <div className = {classes.gridlayout}>
                            <GridList cellHeight={180}  className={classes.gridList} >
                                <GridListTile key="Subheader" cols = {2} style={{height: 'auto'}}>
                                    <ListSubheader component="div" > All Country </ListSubheader>
                                </GridListTile >
                            </GridList>
                        </div>
                    </Paper>
                </div>
            </Container>
        </div>


    );

}

export default App;
