import React from 'react';
import '../../node_modules/react-vis/dist/style.css';
import DiscreteColorLegend from '../../node_modules/react-vis/dist/legends/discrete-color-legend';
import {XYPlot,LineSeries} from 'react-vis';
import {HorizontalGridLines,VerticalGridLines} from 'react-vis';
import {XAxis,YAxis} from 'react-vis';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box'
import Divider from '@material-ui/core/Divider';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

function getPlottingData(history)
{
    const data = [];
    var i = 0;
    for(var  date in history )
    {
        data[i] = { x : Date.parse(date), y : history[date] }
        i++;
    }
    return data
}

const useStyle = makeStyles((theme) => ({
    content: {
        margin: theme.spacing(7),
    },
    graph: {
        marginLeft: theme.spacing(15),
        marginTop: theme.spacing(3),
    }
}));

const Plot = (props) => {
    const classes = useStyle();
     var items =  [
        {title: 'Deaths', color: 'red'},
        {title: 'Cases', color: 'blue'},
      ]
    /*
     * cases: 105726
        todayCases: 1600
        deaths: 1730
        todayDeaths: 34
        recovered: 2538
        active: 101458
        critical: 2494
        casesPerOneMillion: 319
        deathsPerOneMillion: 5
    */


    return(
        <div >
            <Box display = "flex" flexDirection = "row">
                <Box className = {classes.content} display = "flex" flexDirection = "column" >
                    <Typography color  = "textSecondary" variant = "body1" >
                        Total Cases: {props.overall.cases}

                    </Typography>
                    <Divider variant = "middel" />

                    <Typography color  = "primary" variant = "body1" >
                        Today Cases: {props.overall.todayCases}
                    </Typography>
                    <Divider variant = "middel" />

                    <Typography color  = "secondary" variant = "body1" >
                         Total Death: {props.overall.deaths}
                    </Typography>
                    <Divider variant = "middel" />

                    <Typography color  = "secondary" variant = "body1" >
                        Today Death: {props.overall.todayDeaths}
                    </Typography>
                    <Divider variant = "middel" />

                    <Typography color  = "success" variant = "body1" >
                        Recovered:  {props.overall.recovered}
                    </Typography>
                    <Divider variant = "middel" />

                    <Typography color  = "textSPrimary" variant = "body1" >
                        Active:  {props.overall.recovered}
                    </Typography>
                    <Divider variant = "middel" />

                    <Typography color  = "error" variant = "body1" >
                        Critical:  {props.overall.critical}
                    </Typography>
                    <Divider variant = "middel" />
                    <br />
                    <br />
                    <Button color = 'primary' variant = 'contained' >
                        Back
                    </Button>
                </Box>
                <Box display = "flex" className = {classes.graph} >
                    <XYPlot xType="time" height = {500} width = {600} >
                        <XAxis tickLabelAngle={-45} />
                        <YAxis tickLabelAngle={-90} />
                        <VerticalGridLines />
                        <HorizontalGridLines />
                        <LineSeries
                        data={getPlottingData(props.history.timeline.deaths)}
                        strokeWidth = {5}
                        color = 'red'
                        />
                        <LineSeries
                        data={getPlottingData(props.history.timeline.cases)}
                        strokeWidth = {5}
                        />
                    </XYPlot>
                    <DiscreteColorLegend
                      height={100}
                      width={100}
                      items={items}
                    />
                </Box>
            </Box>
        </div>



    )
}

export default Plot;
