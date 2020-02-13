import React from 'react'
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core'
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Bubble from './BubbleSort'

const useStyles = theme => ({
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
});

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

class Sort extends React.Component {
    state = {
        x: [],
        t: -1,
        error: false,
        SortPressed: false,
        sortAlgo: ["Bubble Sort", "Quick Sort", "Merge Sort", "Insertion sort", "Bucket Sort"],
        algo: '',
    }
    handleChange = event => {
        event.preventDefault();
        const temp = (event.target.validity.valid) ? event.target.value : this.state.t;
        if (temp === -1) {
            this.setState({
                ...this.state,
                error: true
            });
        } else {
            this.setState({
                ...this.state,
                t: temp,
                error: false
            })
        }
    }
    handleSubmit = event => {
        event.preventDefault();
        if (!this.state.error) {
            this.state.x.push(this.state.t);
            this.setState({
                ...this.state,
                t: -1
            })
        }
    }
    handleSort = event => {
        event.preventDefault();
        const a = event.target.value;
        event = false;
        let i;
        if (this.state.x.length !== 0) {
            for (i = 0; i < this.state.sortAlgo.length; i++) {
                if (a === this.state.sortAlgo[i]) {
                    this.state.SortPressed = true;
                    break;
                }
            }
            switch (i) {
                case 0:
                    // console.log("hello");
                    // this.bubbleSort();
                    break;
            }
            this.setState({...this.state});
        } else {

        }
    }
    render() {
        const { classes } = this.props;
        let shrink = 0;
        return (
            <React.Fragment>
                <Paper >
                    <Grid container spacing={2} style={{ margin: "auto" }}>
                        <Grid item={true} xs={12}>
                            <FormLabel ><h2 style={{ marginLeft: "40%" }}>Select Sorting Algo</h2></FormLabel>
                            <RadioGroup
                                row
                                name="sorting"
                                aria-label="sorting"
                                onChange={this.handleSort}
                                style={{ padding: "5px", paddingBottom: "5px", marginLeft: "20%" }}
                            >
                                {this.state.sortAlgo.map(value => (
                                    <FormControlLabel
                                        key={value}
                                        value={value.toString()}
                                        control={<Radio />}
                                        // disabled={true}
                                        label={value.toString()}
                                    >
                                    </FormControlLabel>
                                ))}
                            </RadioGroup>
                        </Grid>
                        <Grid item={true} xs={12}>
                            <form onSubmit={this.handleSubmit} style={{ marginLeft: "20%", alignItems: "center" }}>
                                <TextField
                                    label="Enter a number"
                                    id="custom-css-outlined-input"
                                    required
                                    type="number"
                                    style={{ marginLeft: "10%" }}
                                    onInput={this.handleChange}
                                />
                                <Button
                                    variant="outlined"
                                    color="primary"
                                    type="submit"
                                    style={{ marginLeft: "8%", marginTop: "1%" }}
                                >
                                    submit
                                      </Button>
                            </form>
                        </Grid>
                    </Grid>
                </Paper>
                <br /><br />
                <Grid container style={{ marginLeft: "6%", width: '90%' }}>
                    {this.state.x.map((a, index) => (
                        <Grid item={true} xs={0.5} key={index} className={classes.insideGrid}>
                            <Paper className={classes.paper}>
                                <ThemeProvider theme={theme}>
                                    <Typography variant="h5">{a}</Typography>
                                </ThemeProvider>
                            </Paper>
                            {/* {shrink=shrink+0.5}
                           {shrink===6?console.log("hello"):console.log("world")} */}
                        </Grid>
                    ))}
                </Grid>
                {this.state.SortPressed ? <Paper >
                    <Bubble arr={this.state.x} />
                </Paper> : 'hello world'}
                
            </React.Fragment>
        );
    }
}
export default withStyles(useStyles)(Sort);