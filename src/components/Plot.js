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
import AllCountry from './AllCountry';

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
    const [buttonClicked,setState] = React.useState(false)
     var items =  [
        {title: 'Deaths', color: 'red'},
        {title: 'Cases', color: 'blue'},
      ]

    console.log(props);

    return(
        <div >
            {
             (buttonClicked === false) ?
            <Box display = "flex" flexDirection = "row">
                <Box className = {classes.content} display = "flex" flexDirection = "column" >
                    <Typography color = 'primary' variant = 'h3'>
                        {props.overall[props.index].country}
                    </Typography>
                    <br />
                    <Typography color  = "textSecondary" variant = "body1" >
                        Total Cases: {props.overall[props.index].cases}
                    </Typography>
                    <Divider variant = "middel" />

                    <Typography color  = "primary" variant = "body1" >
                        Today Cases: {props.overall[props.index].todayCases}
                    </Typography>
                    <Divider variant = "middel" />

                    <Typography color  = "secondary" variant = "body1" >
                         Total Death: {props.overall[props.index].deaths}
                    </Typography>
                    <Divider variant = "middel" />

                    <Typography color  = "secondary" variant = "body1" >
                        Today Death: {props.overall[props.index].todayDeaths}
                    </Typography>
                    <Divider variant = "middel" />

                    <Typography color  = "success" variant = "body1" >
                        Recovered:  {props.overall[props.index].recovered}
                    </Typography>
                    <Divider variant = "middel" />

                    <Typography color  = "textSPrimary" variant = "body1" >
                        Active:  {props.overall[props.index].active}
                    </Typography>
                    <Divider variant = "middel" />

                    <Typography color  = "error" variant = "body1" >
                        Critical:  {props.overall[props.index].critical}
                    </Typography>
                    <Divider variant = "middel" />
                    <br />
                    <br />
                    <Button onClick  = {() => { setState(true) } } color = 'primary' variant = 'contained' >
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
            </Box> :
            <AllCountry data = {props.overall} />
            }
        </div>



    )
}

export default Plot;
