import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Typography from '@material-ui/core/Typography'
import Display from './Plot';


const useStyle = makeStyles((theme) => ({
    gridlayout: {
        display : 'flex',
        flexWrap: 'wrap',
        margin: theme.spacing(1),
        justifyContent: 'space-around',
        overflow: 'hidden',
    },
    gridList: {
        width : 700,
        height : 450,

    },
    heading: {
        margin: theme.spacing(1),
    },
}));


function handleFlagClick(index,data,setData) {
    const url = "https://corona.lmao.ninja/v2/historical/" + data[index].country
    fetch(url).then(response => {
        if( response.ok ) { return response.json() }
        else { throw new Error("Something Went Worng"); }
        })
        .then( d => setData({
            "overall": data,
            "historic": d,
            "index" : index}))
        .catch(error => {console.log(error);})

}

const AllCountry = (props) => {
    const classes = useStyle();
    const [data,setData] = React.useState(null);
    return(
        <div className>
        {
            (data === null) ?
                <div className = {classes.gridlayout}>
                    <Typography className = {classes.heading}
                    variant = "h4"
                    color = "primary">
                        All Country
                    </Typography>
                    <GridList  className = {classes.gridList} cols = {4} spacing = {5}>
                        {
                            props.data.map((d,index) => (
                                <GridListTile key = {d.country.flag} >
                                    <img className = {classes.button}
                                    id = {index}
                                    onClick = {(e)=>{handleFlagClick(e.target.id,props.data,setData);}}
                                    src = {d.countryInfo.flag}  />
                                    <GridListTileBar
                                        title={d.country}
                                        subtitle={<span>{d.countryInfo.iso3}</span>}
                                    />
                                </GridListTile>
                                ))
                        }
                    </GridList>
                </div> :
                <div>
                    <Display index = {data.index} overall = {data.overall} history = {data.historic} />
                </div>

            }
            </div>
    );

}

export default AllCountry;
