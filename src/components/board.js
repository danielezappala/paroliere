import React from 'react';
import Row from './row'
import 'fontsource-roboto';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme =>({
    board:{
        width: '350px',
        margin: '30px 0px',
        border: '5px',
        display: 'flex',
        alignItems: "center",
        justifyContent: "center"
        //color: theme.palette.openTitle,
    }
}))

function Board({ rolls, rowsNum, colsNum }) {

    const classes = useStyles()

    console.log(`printing board with ${rolls.length} rolls in ${colsNum} columns`)
    console.log('rolls length', rolls.length)
    console.log('columns',colsNum)

    let rows = []
    let rowRolls = []
    let rowCounter = 0
    const matrixDimension = rowsNum*colsNum
    rolls = rolls.filter((el,x)=>{
        if (x<matrixDimension){
            return el
        }
    })
    //console.log('reduct rolls',rolls)
    for (let [index,value] of rolls.entries()) {
        //console.log(rowCounter, index+1, value)
            rowRolls.push({
                i:index+1,
                x:rowCounter+1,
                y:(index+1+colsNum)-(colsNum*(rowCounter+1)),
                content: value
            })

             if(rowRolls.length === colsNum) 
            {   
                //console.log(`pushing rowRolls row_${rowCounter} into the board `,rowRolls)
                rows.push(<tr key={rowCounter.toString()}><Row key={rowCounter.toString()} id={rowCounter+1} rowRolls={rowRolls}/></tr>)
                rowRolls = []
                rowCounter++
            } 
           
        }
        //console.log('printing rows',rows)
        return (
            
            <table className={classes.board}>
                    <tbody> 
                        {rows} 
                    </tbody>
                </table>
        )
        
}
export default Board