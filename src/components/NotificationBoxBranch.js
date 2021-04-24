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
import "./notification-box.css";
import { grey, red } from "@material-ui/core/colors";
import { Gradient } from "@material-ui/icons";
import Link from "@material-ui/core/Link";

// const useStyles = makeStyles({
//   root: {
//     minWidth: 350,
//     borderRadius: 28,
//     // backgroundColor: grey[700],
//   },
//   title: {
//     fontSize: 10,
//   },

//   actions: {
//     display: "flex",
//     justifyContent: "space-between",
//   },
// });

export default function NotificationCard({ valuesList }) {
  // const classes = useStyles();

  function renderTexts(txtList) {
    let txtListHtml = [];
    for (let index = 0; index < txtList.length; index++) {
      let str = txtList[index] + " " + valuesList[index] + " is now open.";
      txtListHtml.push(<Typography class="text-color">{str}</Typography>);
    }
    return txtListHtml;
  }

//   function renderLink(myLink) {
//     return (
//       <Grid container justify="center">
//         <Link href="/gqueues" class="link-to-my-queues">
//           {myLink}
//         </Link>
//       </Grid>
//     );
//   }

  let txtList = ["Queue with ID:"];

  return (
    <Grid container justify="center">
      <Card class="notification-box-size">
        <CardContent>
          <Typography class="title" style={{ textAlign: "right" }} gutterBottom>
            5 minutes ago | 10:45 AM
          </Typography>
          {renderTexts(txtList)}
          {/* <Link href="#">
            Go to "My Queues" for Live Tracking... 
          </Link> */}

          {/* {renderLink(myLink)} */}
        </CardContent>
      </Card>
    </Grid>
  );
}