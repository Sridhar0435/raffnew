import { makeStyles } from '@material-ui/core'
import { teal } from '@material-ui/core/colors'

export const useStyles = makeStyles((theme) => {
  return {
    mainContainer: {
      padding: '15px',
      width: '100%',
    },
    uploadTextfield: {
      width: '100%',
      height: '32px',
      cursor: 'pointer',
    },
    uploadButton: {
      width: '100%',
      height: '32px',
      cursor: 'pointer',
      backgroundColor: teal[900],
      color: 'white',
    },
    greenButtons: {
      height: 35,
      [theme.breakpoints.up('sm')]: {
        '&:hover': {
          fontSize: '0.97rem',
        },
        // width: "200px",
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: '0.6rem',
        // height: 50,
        padding: '1px',
      },
      width: '100%',
    },
    // redButtons: {
    //     width: "auto",
    //     backgroundColor: theme.palette.error.main,
    //     color: "white",
    //     height: 40,
    //     "&:hover": {
    //         backgroundColor: theme.palette.error.main,
    //         color: "white",
    //     },
    // },
    whiteButton: {
      borderColor: theme.palette.primary.main,
      border: '1px solid',
      backgroundColor: 'white',
      color: theme.palette.primary.main,
      '&:hover': {
        color: 'white',
        backgroundColor: teal[900],
      },
      // marginBottom: '10px',
      // marginRight: '10px',
    },
    previewDialog: {
      'max-width': '50%',
    },
    searchDialog: {
      [theme.breakpoints.up('md')]: {
        'max-width': '65%',
      },
      [theme.breakpoints.down('md')]: {
        'max-width': '75%',
      },
      padding: '8px',
    },
    globalSearch: {
      [theme.breakpoints.up('sm')]: {
        width: '100%',
      },
      [theme.breakpoints.down('sm')]: {
        width: '80%',
      },
    },
    errorDialog: {
      color: theme.palette.primary.error,
    },

    root: {
      display: 'flex',
      flex: 1,
      flexDirection: 'column',
      height: '100%',
      color: theme.palette.background.paper,
    },
    value: {
      flex: 1,
    },
    selectField: {
      [theme.breakpoints.up('sm')]: {
        width: '100%',
      },
      [theme.breakpoints.down('sm')]: {
        width: '100%',
      },
      padding: '8px',
      height: 38,
      fontSize: '12px',
    },
    muiSelect: {
      fontSize: '12px',
    },
  }
})
