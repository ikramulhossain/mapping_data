import React from "react";
import Card from "./Components/Card";
import data from "./data.json";


function App(){
    let items=[];

    for(let x=0;x<data.length;x++)
    //item.push(<Card TodoTittel={data[x].Name} tododesc={data[x].Des}/>)
    //items = data.map((item)=> <Card TodoTittel={item.Name} tododesc={item.Des}/>)
    return <div>
        <h1 className="heading">TO DO APP</h1><div>
        { data.map((item)=> <Card TodoTittel={item.Name} tododesc={item.Des}/>)}
           
            
        </div>
    </div>
}


export default App;