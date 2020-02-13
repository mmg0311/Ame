import React,{useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { withRouter } from "react-router-dom";


const drawerWidth = 180;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor:"rgb(50,70,70)",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(2),
  },
}));

function PermanentDrawerLeft(props) {
  const classes = useStyles();
  const drawerListNames = Object.keys(props.drawerList);
  const [selectedList, setSelected] = React.useState([]);

  // useEffect(() => {
  //   let temp = [];
  //   for (let i = 0; i < drawerListNames.length; i++) {
  //     temp.push(false);
  //   }
  //   temp[localStorage.getItem("active")] = true;
  //   setSelected([
  //     ...temp
  //   ])
  // }, [])

  const buttonHandler = (text, index) => {
   // localStorage.setItem("active",index);
    props.history.push( "/" + props.drawerList[text][0]);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
             Algorithm Made Easy
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.toolbar} />
        <Divider />
        <List>
          {drawerListNames.map((text, index) => (
            <ListItem button key={text}
            selected={selectedList[index]}
                onClick={()=>{
                    buttonHandler(text,index);
                }}
            >
              <ListItemIcon>{props.drawerList[text][1]}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {props.children}
      </main>
    </div>
  );
}

export default withRouter(PermanentDrawerLeft);