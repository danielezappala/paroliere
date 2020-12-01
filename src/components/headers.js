import React, {Fragment} from 'react';


function Headers({cols}){
    console.log(`printing headers for ${cols} columns`)
    let content = []
    for (let c = 1; c <= cols; c++){
        content.push(<th>{c}</th> )
       }

    return content
}

export default Headers