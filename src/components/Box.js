import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import PropTypes from "prop-types";
import "./my-button.css";
import "./box.css";
import { grey, red } from "@material-ui/core/colors";
import { Gradient } from "@material-ui/icons";

const useStyles = makeStyles({
  root: {
    minWidth: 350,
    borderRadius: 28,
    minHeight: 350,
    // backgroundColor: grey[700],
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 20,
  },

  actions: {
    display: "flex",
    justifyContent: "space-between",
  },
});

export default function SimpleCard({ txtList, buttonText }) {
  const classes = useStyles();

  function renderTexts(txtList) {
    let txtListHtml = [];
    for (let index = 0; index < txtList.length; index++) {
      txtListHtml.push(
        <Typography className={classes.pos} class="text-color">
          {txtList[index]}
        </Typography>
      );
    }
    return txtListHtml;
  }

  return (
    <Grid container justify="center">
      <Card class="box-size" className={classes.root}>
        <CardContent>
          <Typography
            class="title"
            style={{ textAlign: "center" }}
            className={classes.title}
            gutterBottom
          >
            Your Profile
          </Typography>
          <br />
          {renderTexts(txtList)}
        </CardContent>
        <Grid container justify="center">
          <Button
            className={classes.actions}
            style={{ textAlign: "center" }}
            class="rounded-btn-card primary-btn-inverse mb-2"
          >
            {buttonText}
          </Button>
        </Grid>
        <br />
      </Card>
    </Grid>
  );
}

SimpleCard.propTypes = {
  button: PropTypes.string,
};
