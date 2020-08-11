import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';

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
                                <div className={classes.textLeftNumber}>#{item.number}</div>
                                <div className={classes.textLeftName}>{item.name}</div>
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
        textAlign: 'left'
    },
    textLeftName: {
        textAlign: 'left',
        fontSize: 20,
        marginTop: 10
    }
  }));

export default ListItem;