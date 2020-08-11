import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import '../styles/Item.css';

const ListItem = (props) => {
    const classes = useStyles();
    return (
        <div style={{padding: 20}}>
            <Grid container className={classes.root} spacing={2}>
                <Grid item xs={12}>
                    <Grid container justify="center" spacing={5}>
                    {props.data && props.data.map((item) => (
                        <Grid key={item.id} item>
                            <Paper className={classes.paper} >
                                <Avatar variant='square' className={classes.square} src={item.ThumbnailImage}></Avatar>
                                <div className={classes.containerTitle}>
                                    <div className={classes.textLeftNumber}>#{item.number}</div>
                                    <div className={classes.textLeftName}>{item.name}</div>
                                    <Grid container spacing={2}>
                                        {item.weakness.map((weakness, i) => (
                                            <Grid key={i} item xs={6}>
                                                <div className={weakness}>
                                                    {weakness}
                                                </div>
                                            </Grid>
                                        ))}
                                    </Grid>
                                </div>
                            </Paper>
                        </Grid>
                    ))}
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      width: 200,
    },
    control: {
      padding: theme.spacing(2),
    },
    square: {
        height: 200,
        width: 200,
    },
    textLeftNumber: {
        textAlign: 'left',
        fontWeight: 'bold',
        color: '#939393'
    },
    textLeftName: {
        textAlign: 'left',
        fontSize: 20,
        marginTop: 10,
        fontWeight: 'bold',
    },
    containerTitle: {
        paddingLeft: 10
    },
    containerWeakness: {
        display: 'flex',
        flexDirection: 'row',
        width: 200
    },
    weakness: {
        height: 20,
    },
  }));

export default ListItem;