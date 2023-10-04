import React from 'react';
import Die from './die'


function Row({id,rowRolls}) {
    
    console.log('Row')
    //console.log(`printing rowRolls ${id}`,rowRolls)

    let diceInRow = []

    for (let roll of rowRolls) {
        //console.log(`sending die index ${roll.i} letter ${roll.content}` )
        diceInRow.push(<td key={roll.i.toString()}><Die key={roll.i.toString()} roll={roll}/></td>)
    }
    
    return diceInRow
}

export default Row