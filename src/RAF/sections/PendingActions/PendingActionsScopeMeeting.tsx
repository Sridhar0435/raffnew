import {
  Typography,
  Grid,
  styled,
  Button,
  useTheme,
  useMediaQuery,
  Dialog,
} from '@material-ui/core'

import { Link, useHistory, useLocation } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import { teal } from '@material-ui/core/colors'
import { useStyles } from './styles'
import DialogHeader from '../../../RangeChangeManagement/components/DialogHeader/DialogHeader'

function PendingActionsScopeMeeting() {
  const classes = useStyles()
  const theme = useTheme()
  const small = useMediaQuery(theme.breakpoints.up('xs'))
  const history = useHistory()
  const location = useLocation<any>()

  const [eventDetails, setEventDetails] = useState<any>()
  const [eventId, setEventId] = useState<any>()
  const [uploadedFile, setUploadedFile] = useState<any>()

  const [rejectDialogOpen, setRejectDialogOpen] = useState(false)

  useEffect(() => {
    console.log(location.state.data)
    const data = location.state.data
    setEventDetails([data])
    setEventId(data['uniqueId'])
  }, [location])

  const Input = styled('input')({
    display: 'none',
  })

  const goBack = () => {
    history.goBack()
  }

  const handleFileUpload = (event: any) => {
    setUploadedFile(event.target.files[0])
  }
  const handleComplete = () => {
    history.push('/commercial-webapp/taskdashboard')
  }

  const handleRejectDialogOpen = () => {
    setRejectDialogOpen(true)
  }

  const handleRejectDialogClose = () => {
    setRejectDialogOpen(false)
  }

  const rejectDialog = (
    <Dialog
      open={rejectDialogOpen}
      onClose={handleRejectDialogClose}
      fullWidth
      classes={{ paperFullWidth: classes.previewDialog }}
    >
      <DialogHeader
        title="Reject to Rework"
        onClose={handleRejectDialogClose}
      />
      <Grid container style={{ padding: 2 }}>
        <Grid item xs={12}>
          hello
        </Grid>
      </Grid>
    </Dialog>
  )

  return (
    <>
      <Grid container style={{ justifyContent: 'center' }}>
        <Grid item container xs={10} spacing={2}>
          <Grid
            item
            container
            xl={12}
            lg={12}
            md={12}
            sm={12}
            xs={12}
            spacing={2}
            style={{
              paddingTop: '30px',
              paddingBottom: '20px',
            }}
          >
            <Grid item xl={11} lg={11} md={11} sm={9} xs={9}>
              <Typography variant="h5">
                Pending Action - Scoping Meeting
              </Typography>
            </Grid>

            <Grid
              item
              xl={1}
              lg={1}
              md={1}
              sm={3}
              xs={3}
              style={{
                textAlign: 'right',
              }}
            >
              <button className="backButton" onClick={goBack}>
                <svg
                  className="MuiSvgIcon-root"
                  focusable="false"
                  viewBox="0 0 34 34"
                  aria-hidden="true"
                >
                  <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path>
                </svg>
                Back
              </button>
            </Grid>
          </Grid>
          <Grid item container xs={12}>
            <Grid item xs={12}>
              <Typography variant="subtitle2">Comments</Typography>
            </Grid>
            <Grid item container xs={12}>
              <Grid item sm={8} xs={12}>
                <textarea
                  rows={6}
                  style={{
                    width: '100%',
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item container xs={12}>
            <Grid item xs={12}>
              <Typography variant="subtitle2">
                Upload Reference Document
              </Typography>
            </Grid>
            <Grid item container xs={12}>
              <Grid item container sm={8} xs={12}>
                <Grid item xs={8}>
                  <input
                    type="text"
                    value={uploadedFile ? uploadedFile.name : ''}
                    onClick={() =>
                      document.getElementById('selectedFile')!.click()
                    }
                    className={classes.uploadTextfield}
                    placeholder="No file selected"
                    readOnly
                  />
                </Grid>
                <Grid item xs={4}>
                  <Input
                    type="file"
                    id="selectedFile"
                    accept=".csv, application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                    onChange={handleFileUpload}
                    required
                  />
                  <button
                    type="button"
                    onClick={() =>
                      document.getElementById('selectedFile')!.click()
                    }
                    className={classes.uploadButton}
                  >
                    Browse...
                  </button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            container
            sm={8}
            xs={12}
            spacing={2}
            style={{
              justifyContent: small ? 'right' : 'center',
              paddingTop: '30px',
            }}
          >
            <Grid
              item
              xl={2}
              lg={3}
              md={3}
              sm={4}
              xs={6}
              style={{
                textAlign: !small ? 'right' : 'center',
              }}
            >
              <Button
                // type="submit"
                variant="contained"
                color="primary"
                className={classes.greenButtons}
                // onClick={handleAssignToMe}
                onClick={handleRejectDialogOpen}
              >
                Reject
              </Button>
            </Grid>
            <Grid
              item
              xl={2}
              lg={3}
              md={3}
              sm={4}
              xs={6}
              style={{
                textAlign: !small ? 'right' : 'center',
              }}
            >
              <Button
                // type="submit"
                variant="contained"
                color="primary"
                className={classes.greenButtons}
                // onClick={handleAssignToMe}
              >
                Cancel
              </Button>
            </Grid>
            <Grid
              item
              xl={2}
              lg={3}
              md={3}
              sm={4}
              xs={6}
              style={{
                textAlign: !small ? 'right' : 'center',
              }}
            >
              <Button
                // type="submit"
                variant="contained"
                color="primary"
                className={classes.greenButtons}
                onClick={handleComplete}
              >
                Complete
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {rejectDialog}
    </>
  )
}
export default PendingActionsScopeMeeting
