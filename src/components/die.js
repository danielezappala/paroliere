import React, {Fragment} from 'react';
import {Typography, Card} from '@material-ui/core';
import 'fontsource-roboto';

import { makeStyles } from '@material-ui/core/styles';

//import <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />

const useStyles = makeStyles(theme =>({
    root:{
        margin: '5px',
        border: '5px',
        backgroundColor: '#a1887f',
        color: '#efebe9',
        //color: theme.palette.openTitle,
        width: '60px',
        height: '60px',
        borderRadius: '5px',
        display: 'table-cell',
        verticalAlign: 'middle',
        textAlign: 'center'
    }
}))

const Die = ({roll}) => {
    const classes = useStyles()
    return (
    //console.log(`printing die ${props.roll.i} roll `,props.roll)

        <div className={classes.root}>
            <Typography variant='h4'>
                {roll.content}
            </Typography>
        </div>   
    )
}

export default Die