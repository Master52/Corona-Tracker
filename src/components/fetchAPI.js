import React from 'react';
import App from "./App";


const URL = "https://corona.lmao.ninja/countries"

const GetData = () => {
    const [data,setData] = React.useState(null);

    React.useEffect( () => {
        setTimeout(() => {
            fetch(URL).then(response => {
                if( response.ok ) { return response.json(); }
                else { throw new Error("Something Went Worng"); }
                })
                .then( data => setData(data))
                .catch(error => {console.log(error);})
            },5000);
    });

    return (
        <div >
            {
            (data !== null) ? <App data = {data} /> : <h1> Waitin..</h1>
            }
        </div>


    )
}

export default GetData;
