import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { withStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        overflowX: 'hidden'
    },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    insideGrid: {
        padding: theme.spacing(2),
    }
}));

function BubbleSort(props) {
    //const classes = useStyles();
    //const [sorted,setSorted] = React.useEffect([]);
    let x = [...props.arr].map(v=> { return +v});
    var m = new Map();
    let v=[];
    useEffect(() => {
        return () => {
         console.log("hello");
        };
      }, [x]);
    const b_sort = () => {
        let swapp;
        let n = props.arr.length;
        let j=0;
        console.log(x);
        do {
            swapp = false;
            for (let i = 0; i < n; i++) {
                m.set(i,false);
                console.log(x[i],' ',x[i+1]);
                if (x[i] < x[i + 1]) {
                    m.set(i,true);
                    m.set(i+1,true);
                    var temp = x[i];
                    x[i] = x[i + 1];
                    x[i + 1] = temp;
                    swapp = true;
                   
                }
                // v=[...v,x.map(String)];
                console.log(m);
            }
            j++;
            n--;
        } while (swapp);
       
    }
    b_sort();
    return (
        <Grid container style={{ marginLeft: "6%", width: '90%',padding:"4px" }}>
            {  x.map((a, index) => (
                    <Grid
                        item={true}
                        xs={0.5}
                        key={index}
                        style={{padding:"4px" }}
                    >
                        <Paper>
                            <ThemeProvider >
                                <Typography variant="h5" >{a}</Typography>
                            </ThemeProvider>
                        </Paper>
                    </Grid>
                ))}
        </Grid>
    );
}
export default BubbleSort;