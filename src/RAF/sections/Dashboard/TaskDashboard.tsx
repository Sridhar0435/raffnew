import {
  Card,
  CardContent,
  Grid,
  Typography,
  makeStyles,
  CardHeader,
  IconButton,
  Divider,
  Tooltip,
  Box,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import { dashboard } from "./DataConstants";
import { ProgressBar } from "primereact/progressbar";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";

const useStyles = makeStyles((theme) => ({
  card: {
    margin: theme.spacing(2),
  },
  spacing: {
    margin: theme.spacing(2),
  },
  header: {
    backgroundColor: theme.palette.primary.main,
    color: "white",
  },
  bold: {
    fontWeight: "bold",
  },
  color90: {
    color: theme.palette.primary.main,
  },
  color80: {
    color: "#FFBF00",
  },
  color60: {
    color: "red",
  },
  tool: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.primary.main,
  },
  tabHead: {
    color: theme.palette.primary.main,
    fontWeight: "bold",
    marginLeft: theme.spacing(2),
  },
  progressBar: {
    backgroundColor: "white",
    border: "0.5px solid black",
    height: "10px",
    width: "100%",
    // [theme.breakpoints.down("xs")]: {
    //     width: "100px"
    // },
    // [theme.breakpoints.up("sm")]: {
    //     width: "200px"
    // }
  },
}));
function TaskDashboard() {
  const classes = useStyles();
  const theme = useTheme();
  const small = useMediaQuery(theme.breakpoints.up("md"));
  console.log(dashboard);
  return (
    <div style={{ padding: "10px" }}>
      {/* <Typography variant="body1" color="primary" className={classes.tabHead}>
                Dashboard
            </Typography> */}
      <Grid container>
        {dashboard.map((dash, index) => (
          <Grid item xl={6} lg={6} md={6} xs={12} key={index}>
            <Card className={classes.card}>
              <CardHeader
                title={dash.title}
                action={
                  <Tooltip
                    title="Visit Application"
                    arrow
                    classes={{ tooltip: classes.tool }}
                  >
                    <IconButton size="small">
                      <LabelImportantIcon style={{ color: "white" }} />
                    </IconButton>
                  </Tooltip>
                }
                className={classes.header}
                titleTypographyProps={{ variant: "body1" }}
              />
              <CardContent>
                <Grid item container spacing={2} xs={12}>
                  <Grid item container spacing={2} xs={12}>
                    <Grid item xs={4}>
                      {dash.statuscomplete}
                    </Grid>
                    <Grid item xs={6}>
                      <ProgressBar
                        value={parseInt(dash.statuscompleteval)}
                        showValue={false}
                        className={classes.progressBar}
                        color={
                          parseInt(dash.statuscompleteval) < 90
                            ? parseInt(dash.statuscompleteval) >= 60
                              ? theme.palette.warning.main
                              : theme.palette.error.main
                            : theme.palette.primary.main
                        }
                      />
                    </Grid>
                    <Grid item xs={2}>
                      {dash.statuscompleteval}
                    </Grid>
                  </Grid>

                  <Grid item container spacing={2} xs={12}>
                    <Grid item xs={4}>
                      {dash.reworkcomplete}
                    </Grid>
                    <Grid item xs={6}>
                      <ProgressBar
                        value={parseInt(dash.reworkcompleteval)}
                        showValue={false}
                        className={classes.progressBar}
                        color={
                          parseInt(dash.reworkcompleteval) > 10
                            ? parseInt(dash.reworkcompleteval) > 20
                              ? theme.palette.error.main
                              : theme.palette.warning.main
                            : theme.palette.primary.main
                        }
                      />
                    </Grid>
                    <Grid item xs={2}>
                      {dash.reworkcompleteval}
                    </Grid>
                  </Grid>
                </Grid>
              </CardContent>
              <Divider />
              <CardContent>
                <table width="100%">
                  <tbody>
                    <tr>
                      <td colSpan={2}>
                        <Typography variant="body2" color="primary">
                          <b>My</b>
                        </Typography>
                      </td>
                    </tr>
                    {dash.my.map((myData, index) => {
                      return (
                        <tr key={index}>
                          <td>
                            <Typography variant="body2" color="primary">
                              {myData.text}
                            </Typography>
                          </td>
                          <td align="right">
                            <Typography variant="body2" color="primary">
                              <Link to={myData.link}>{myData.value}</Link>
                            </Typography>
                          </td>
                        </tr>
                      );
                    })}

                    <tr>
                      <td colSpan={2}>
                        <Typography variant="body2" color="primary">
                          <b>My Group</b>
                        </Typography>
                      </td>
                    </tr>
                    {dash.myGroup.map((myData, index) => {
                      return (
                        <tr key={index}>
                          <td>
                            <Typography variant="body2" color="primary">
                              {myData.text}
                            </Typography>
                          </td>
                          <td align="right">
                            <Typography variant="body2" color="primary">
                              <Link to={myData.link}>{myData.value}</Link>
                            </Typography>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default TaskDashboard;
