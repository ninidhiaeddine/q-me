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

export default function SimpleCard({
  title,
  txtList,
  valuesList,
  btnList,
  onClickList,
  renderDivider,
  doRenderImage,
  base64,
}) {
  const classes = useStyles();

  function renderTexts(txtList, valuesList) {
    let txtListHtml = [];
    for (let index = 0; index < txtList.length; index++) {
      let str = txtList[index] + " " + valuesList[index];
      txtListHtml.push(<Typography class="text-color left">{str}</Typography>);
    }
    return txtListHtml;
  }

  // function renderValues(valuesList) {
  //   let valuesListHtml = [];
  //   for (let index = 0; index < valuesList.length; index++) {
  //     valuesListHtml.push(
  //       <div>
  //         <Grid containter justify="right">
  //           <Typography class="text-color right">
  //             {valuesList[index]}
  //           </Typography>
  //         </Grid>
  //       </div>
  //     );
  //   }
  //   return valuesListHtml;
  // }

  function renderButtons(btnList, onClickList) {
    let btnListHtml = [];

    if (onClickList.length > 0) {
      for (let index = 0; index < btnList.length; index++) {
        btnListHtml.push(
          <Grid container justify="center">
            <Button
              className={classes.actions}
              style={{ textAlign: "center" }}
              class="rounded-btn-card primary-btn-gradient mb-2"
              onClick={onClickList[index]}
            >
              {btnList[index]}
            </Button>
          </Grid>
        );
      }
    } else {
      for (let index = 0; index < btnList.length; index++) {
        btnListHtml.push(
          <Grid container justify="center">
            <Button
              className={classes.actions}
              style={{ textAlign: "center" }}
              class="rounded-btn-card primary-btn-gradient mb-2"
            >
              {btnList[index]}
            </Button>
          </Grid>
        );
      }
    }

    return btnListHtml;
  }

  function renderDivider(renderDivider) {
    if (renderDivider) {
      return <hr class="divider"></hr>;
    }
  }

  function renderImage(doRenderImage, base64) {
    if (doRenderImage) {
      let src =
        "data:image/png;base64," + base64;
        return <img src={src}></img>;
    } else {
      return <div></div>;
    }
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
            {title}
          </Typography>
          <br />
          {renderTexts(txtList, valuesList)}
          {renderDivider(renderDivider)}
          {renderButtons(btnList, onClickList)}
          {renderImage(doRenderImage, base64)}
        </CardContent>
      </Card>
    </Grid>
  );
}

SimpleCard.propTypes = {
  title: PropTypes.string,
};
