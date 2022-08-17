import { Divider, Typography, makeStyles } from '@material-ui/core'
import React from 'react'
import Dashboard from '../../sections/Dashboard/Dashboard'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    height: '100%',
  },
  value: {
    flex: 1,
  },
  container: {
    height: '100%',
  },
}))
function DashboardMain() {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      {/*<div>
        <Typography variant="h6" color="primary" align="center">
          Commercial Web Application - Task Dashboard
        </Typography>
        <Divider />
      </div>*/}
      <div className={classes.value}>
        <Dashboard />
      </div>
    </div>
  )
}

export default DashboardMain
