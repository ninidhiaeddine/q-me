import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import "./my-button.css";
import "./box.css";
import { grey, red } from '@material-ui/core/colors';
import { Gradient } from '@material-ui/icons';

const useStyles = makeStyles({
  root: {
    minWidth: 350,
    borderRadius: 28,
    minHeight: 350,
    // backgroundColor: grey[700],
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 20,
  },

  actions: {
    display: "flex",
    justifyContent: "space-between"
  }
});

export default function SimpleCard({ button }) {
  const classes = useStyles();
  return (
    <Grid container justify="center">
      <Card class="box-size" className={classes.root}>
        <CardContent>
          <Typography class="title" style={{ textAlign: "center" }} className={classes.title} gutterBottom>
            Your Profile
        </Typography>
        <br />
          <Typography className={classes.pos} class="text-color" >
            Name:
        </Typography>
        <Typography className={classes.pos} class="text-color">
            Phone Number:
        </Typography>
        <Typography className={classes.pos} class="text-color">
            Password:
        </Typography>
        </CardContent>
        <Grid container justify="center">
          <Button className={classes.actions} style={{ textAlign: "center" }} class="rounded-btn-card primary-btn-inverse mb-2">{button}</Button>
        </Grid>
        <br />
      </Card>
    </Grid>
  );
}

SimpleCard.propTypes = {
  button: PropTypes.string
};