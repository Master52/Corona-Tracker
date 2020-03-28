import React from 'react';
import '../../node_modules/react-vis/dist/style.css';
import {XYPlot,LineMarkSeries} from 'react-vis';
import {HorizontalGridLines,VerticalGridLines} from 'react-vis';
import {XAxis,YAxis} from 'react-vis';

const Plot = (props) => {
    var history = props.history.timeline.cases;
    const data = [];
    var i = 0;
    for(var  date in history )
    {
        data[i] = { x : Date.parse(date), y : history[date] }
        i++;
    }
    console.log(data);



    return(
        <div style = {{ marginLeft: '8%'}} >
            <XYPlot xType="time" height = {400} width = {1000} >
                <VerticalGridLines />
                <HorizontalGridLines />
                <XAxis tickLabelAngle={-45} />
                <YAxis tickLabelAngle={-90} />
                <LineMarkSeries data={data} />

            </XYPlot>
        </div>



    )
}

export default Plot;
