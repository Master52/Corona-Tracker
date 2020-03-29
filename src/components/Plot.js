import React from 'react';
import '../../node_modules/react-vis/dist/style.css';
import {XYPlot,LineSeries} from 'react-vis';
import {HorizontalGridLines,VerticalGridLines} from 'react-vis';
import {XAxis,YAxis} from 'react-vis';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box'
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

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

const Plot = (props) => {
    console.log(props.overall);

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
                <Box display = "flex" flexDirection = "column" >
                    <Typography color  = "textSecondary" variant = "h6" >
                        Total Cases: {props.overall.cases}

                    </Typography>
                    <Divider variant = "middel" />

                    <Typography color  = "primary" variant = "h6" >
                        Today Cases: {props.overall.todayCases}
                    </Typography>
                    <Divider variant = "middel" />

                    <Typography color  = "secondary" variant = "h6" >
                         Total Death: {props.overall.deaths}
                    </Typography>
                    <Divider variant = "middel" />

                    <Typography color  = "secondary" variant = "h6" >
                        Today Death: {props.overall.todayDeaths}
                    </Typography>
                    <Divider variant = "middel" />

                    <Typography color  = "success" variant = "h6" >
                        Recovered:  {props.overall.recovered}
                    </Typography>
                    <Divider variant = "middel" />

                    <Typography color  = "textSPrimary" variant = "h6" >
                        Active:  {props.overall.recovered}
                    </Typography>
                    <Divider variant = "middel" />

                    <Typography color  = "error" variant = "h6" >
                        Critical:  {props.overall.critical}
                    </Typography>
                    <Divider variant = "middel" />


                </Box>
                <Box display = "flex" >
                    <XYPlot xType="time" height = {500} width = {600} >
                        <XAxis tickLabelAngle={-45} />
                        <YAxis tickLabelAngle={-90} />
                        <LineSeries
                          data={getPlottingData(props.history.timeline.cases)} />
                    </XYPlot>
                </Box>
            </Box>
        </div>



    )
}

export default Plot;
