import { Column } from 'primereact/column'
import { DataTable } from 'primereact/datatable'
import React, { useEffect, useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import {
  Buyers,
  BuyingAssistants,
  manageEventPublishCols,
  manageTaskPublishCols,
  manageTaskPublishRows,
  Merchandisers,
  OwnBrandManagers,
  RangeResetManagers,
  SeniorBuyingManagers,
  SupplyChainSpecialists,
  CategoryDirectors,
  classOptions,
  resetTypes,
  groups,
  categories,
  departments,
  wastageRanges,
  yesOrNo,
  userGroupOptions,
} from './DataConstants'
import {
  Grid,
  useTheme,
  Typography,
  Button,
  TextField,
  Box,
  Dialog,
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
  useMediaQuery,
  MenuItem,
  Select,
  OutlinedInput,
  Paper,
} from '@material-ui/core'
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'
import { Autocomplete } from '@material-ui/lab'
import AutocompleteSelect from '../../components/AutoCompleteSelect/AutocompleteSelect'
import DialogHeader from '../../components/DialogHeader/DialogHeader'
import { ConfirmedBodyStyle, ConfirmedHeaderStyle, useStyles } from './styles'
import { routes } from '../../../util/Constants'
import { allMessages } from '../../../util/Messages'
import {
  getProductHierarchyListAPI,
  getUsersAPIByEmailAndRole,
  getUsersAPIByRole,
  getEventDetailsById,
} from '../../../api/Fetch'
import SearchSelect from '../../components/SearchSelect/SearchSelect'
import ConfirmCheckSign from '../../components/ConfirmCheck/ConfirmCheckSign'
import { connect } from 'react-redux'
import {
  resetErrorFile,
  resetFile,
  setFile,
} from '../../../redux/Actions/FileUpload'

function ManageEventCreate(props: any) {
  const { fileErrorData, resetErrorFile } = props

  const location = useLocation<any>()
  const history = useHistory()
  const theme1 = useTheme()
  const aboveSm = useMediaQuery(theme1.breakpoints.up('sm'))
  const classes = useStyles()

  const { DEFAULT, RANGEAMEND_EVENTDASH, RANGEAMEND_MANAGE } = routes

  const [eventId, setEventId] = useState<any>(null)
  const [eventDetails, setEventDetails] = useState<any>()
  const [resetType, setResetType] = useState<any>('')
  const [resetTypeError, setResetTypeError] = useState<any>('')
  const [rafDueDate, setRafDueDate] = useState<any>(null)
  const [rafDueDateError, setRafDueDateError] = useState<any>('')
  const [launchDate, setLaunchDate] = useState<any>(null)
  const [launchDateError, setLaunchDateError] = useState<any>('')
  const [eventName, setEventName] = useState<any>('')
  const [group, setGroup] = useState<any>('')
  const [category, setCategory] = useState<any>('')
  const [department, setDepartment] = useState<any>('')
  const [taskDetails, setTaskDetails] = useState<any>(manageTaskPublishRows)
  const [singleTask, setSingleTask] = useState<any>()
  const [selectTasks, setSelectTasks] = useState<any>()
  const [classValues, setClassValues] = useState<any>()
  const [classConfirmed, setClassConfirmed] = useState<any>()
  const [userGroup, setUserGroup] = useState<any>()
  const [userGroupValue, setUserGroupValue] = useState<any>()
  const [buyer, setBuyer] = useState<any>('')
  const [buyerValue, setBuyerValue] = useState<any>('')
  const [buyerConfirmed, setBuyerConfirmed] = useState<any>(false)
  const [buyingAssistant, setBuyingAssistant] = useState<any>('')
  const [buyingAssistantValue, setBuyingAssistantValue] = useState<any>('')
  const [buyingAssistantConfirmed, setBuyingAssistantConfirmed] =
    useState<any>(false)
  const [ownBrandManager, setOwnBrandManager] = useState<any>('')
  const [ownBrandManagerValue, setOwnBrandManagerValue] = useState<any>('')
  const [ownBrandManagerConfirmed, setOwnBrandManagerConfirmed] =
    useState<any>(false)
  const [seniorBuyingManager, setSeniorBuyingManager] = useState<any>('')
  const [seniorBuyingManagerValue, setSeniorBuyingManagerValue] =
    useState<any>('')
  const [seniorBuyingManagerConfirmed, setSeniorBuyingManagerConfirmed] =
    useState<any>(false)
  const [merchandiser, setMerchandiser] = useState<any>('')
  const [merchandiserValue, setMerchandiserValue] = useState<any>('')
  const [merchandiserConfirmed, setMerchandiserConfirmed] = useState<any>(false)
  const [rangeResetManager, setRangeResetManager] = useState<any>('')
  const [rangeResetManagerValue, setRangeResetManagerValue] = useState<any>('')
  const [rangeResetManagerConfirmed, setRangeResetManagerConfirmed] =
    useState<any>(false)
  const [categoryDirector, setCategoryDirector] = useState<any>('')
  const [categoryDirectorValue, setCategoryDirectorValue] = useState<any>('')
  const [categoryDirectorConfirmed, setCategoryDirectorConfirmed] =
    useState<any>(false)
  const [supplyChainSpecialist, setSupplyChainSpecialist] = useState<any>('')
  const [supplyChainSpecialistValue, setSupplyChainSpecialistValue] =
    useState<any>('')
  const [supplyChainSpecialistConfirmed, setSupplyChainSpecialistConfirmed] =
    useState<any>(false)

  const [classOpen, setClassOpen] = useState(false)
  const [groupsOpen, setGroupsOpen] = useState(false)

  const [productHierValues, setProductHierValues] = useState<any>([])
  const [groupOptions, setGroupOptions] = useState<any>([])
  const [categoryOptions, setCategoryOptions] = useState<any>([])
  const [departmentOptions, setDepartmentOptions] = useState<any>([])

  useEffect(() => {
    return () => resetErrorFile()
  }, [])

  useEffect(() => {
    if (!fileErrorData) {
      history.push(`${DEFAULT}${RANGEAMEND_MANAGE}`)
    } else {
      console.log(fileErrorData)
      setEventName(fileErrorData.name)
      setEventId(fileErrorData.id)
    }
  }, [])

  useEffect(() => {
    if (eventId) {
      getEventDetailsById &&
        getEventDetailsById(eventId)
          .then((res: any) => {
            const eventData = res.data.eventDetailsList[0].rangeEventRequest
            console.log('EVENTID', eventData)
            const milestoneData = res.data.eventDetailsList[0].milestones

            // Below original API CALL

            // const eventData = res.eventDetailsList[0].rangeEventRequest
            // console.log('EVENTID', eventData)

            const manageList = [
              {
                resetType: eventData.eventHeader.resetType,
                category: eventData.eventHeader.eventHierarchy.category,
                department: eventData.eventHeader.eventHierarchy.department,
                tradeGroup: eventData.eventHeader.eventHierarchy.tradingGroup,
                eventId: eventData.eventId,
                targetDate: eventData.eventHeader.eventLaunchDate,
                appDueDate: eventData.eventHeader.rafAppDueDate,
                eventName: eventData.eventHeader.eventName,
                planogramClass: {
                  className: [
                    eventData.eventHeader.inventoryControl.planogramClass,
                  ],
                },
                clearancePriceCheck:
                  eventData.eventHeader.inventoryControl.clearancePriceApplied,
                orderStopDateCheck:
                  eventData.eventHeader.inventoryControl
                    .orderStopDateCheckRequired,
                stopOrder:
                  eventData.eventHeader.inventoryControl.stopOrderStockRundown,
                wastageRange:
                  eventData.eventHeader.inventoryControl.storeWastetiming,
                buyerEmailId: '',
                buyerAssistantEmailId: '',
                ownBrandManagerEmailId: '',
                seniorBuyingManagerEmailId: '',
                merchandiserEmailId: '',
                rangeResetManagerEmailId: '',
                categoryDirectorEmailId: '',
                supplyChainAnalystEmailId: '',
              },
            ]
            eventData.eventHeader.eventTeam.team.map((val: any) => {
              // if (val.roles[0].roleId === 'Buyer') {
              //   manageList[0].buyerEmailId = val.details.emailId
              // }
              // if (val.roles[0].roleId === 'Buying Assistant') {
              //   manageList[0].buyerAssistantEmailId = val.details.emailId
              // }
              if (val.persona === 'Buyer') {
                manageList[0].buyerEmailId = val.details.emailId
              }
              if (val.persona === 'Buying Assistant') {
                manageList[0].buyerAssistantEmailId = val.details.emailId
              }
              if (val.persona === 'Range Reset Manager') {
                manageList[0].rangeResetManagerEmailId = val.details.emailId
              }

              if (val.persona === 'Own Brand Manager') {
                manageList[0].ownBrandManagerEmailId = val.details.emailId
              }
              if (val.persona === 'Senior Buying Manager') {
                manageList[0].seniorBuyingManagerEmailId = val.details.emailId
              }
              if (val.persona === 'Merchandiser') {
                manageList[0].merchandiserEmailId = val.details.emailId
              }
              if (val.persona === 'Category Director') {
                manageList[0].categoryDirectorEmailId = val.details.emailId
              }
              if (val.persona === 'Supply Chain Specialist') {
                manageList[0].supplyChainAnalystEmailId = val.details.emailId
              }
            })

            const manageTask = milestoneData.map((milestone: any) => {
              return {
                taskId: milestone.taskName,
                task: milestone.taskDescription,
                dueDate: milestone.dueDate,
                notifiedDate: milestone.notifyDate,
                assignedUserGroup: milestone.assigneeRole,
                name: milestone.assigneeDetails.name,
                userId: milestone.assigneeDetails.userId,
                visibility: milestone.visibility,
              }
            })
            console.log(manageList)
            console.log(manageTask)
            setTaskDetails(manageTask)
            setEventDetails(manageList)
          })
          .catch((err: any) => console.log('EVENTID', err))
    }
  }, [eventId])

  // useEffect(() => {
  //   if (eventDetails && eventDetails.length > 0) {
  //     setResetType(eventDetails[0].resetType)
  //     setRafDueDate(eventDetails[0].appDueDate)
  //     setLaunchDate(eventDetails[0].targetDate)
  //     setGroup(eventDetails[0].tradeGroup)
  //     setCategory({
  //       category: eventDetails[0].category,
  //       categoryId: eventDetails[0].categoryId,
  //     })
  //     setDepartment({
  //       department: eventDetails[0].department,
  //       departmentId: eventDetails[0].departmentId,
  //     })
  //     setBuyer({
  //       buyer: eventDetails[0].buyer,
  //       buyerEmailId: eventDetails[0].buyerEmailId,
  //       buyerId: eventDetails[0].buyerId,
  //     })
  //   }
  // }, [])

  // useEffect(() => {
  //   setEventDetails([
  //     {
  // uniqueId: uniqueId,
  // resetType: resetType,
  // tradeGroup: group,
  // categoryId: category.categoryId,
  // category: category.category,
  // department: department.department,
  // departmentId: department.departmentId,
  // targetDate: launchDate ? `${launchDate} ${'01:00:00.00'}` : null,
  // appDueDate: rafDueDate ? `${rafDueDate} ${'01:00:00.00'}` : null,
  // eventName: eventName,
  // planogramClass: {
  //   className: classFormData ? classFormData : [''],
  // },
  // storeWasteProcessTiming: storeWasteProcess.value
  //   ? storeWasteProcess.value
  //   : '',
  // buyer: buyer,
  // buyerId: buyer.userId,
  // buyerEmailId: buyer.emailId,
  // buyer: buyer.buyer,
  // buyerAssistantId: buyingAssistantValue.userId,
  // buyerAssistantEmailId: buyingAssistantValue.emailId,
  // buyerAssistant: buyingAssistantValue.middleName
  //   ? `${buyingAssistantValue.firstName} ${buyingAssistantValue.middleName} ${buyingAssistantValue.lastName}`
  //   : `${buyingAssistantValue.firstName} ${buyingAssistantValue.lastName}`,
  // ownBrandManagerId: ownBrandManagerValue.userId,
  // ownBrandManagerEmailId: ownBrandManagyterValue.emailId,
  // ownBrandManager: ownBrandManagerValue.middleName
  //   ? `${ownBrandManagerValue.firstName} ${ownBrandManagerValue.middleName} ${ownBrandManagerValue.lastName}`
  //   : `${ownBrandManagerValue.firstName} ${ownBrandManagerValue.lastName}`,
  // seniorBuyingManagerId: seniorBuyingManagerValue.userId,
  // seniorBuyingManagerEmailId: seniorBuyingManagerValue.emailId,
  // seniorBuyingManager: seniorBuyingManagerValue.middleName
  //   ? `${seniorBuyingManagerValue.firstName} ${seniorBuyingManagerValue.middleName} ${seniorBuyingManagerValue.lastName}`
  //   : `${seniorBuyingManagerValue.firstName} ${seniorBuyingManagerValue.lastName}`,
  // merchandiserId: merchandiserValue.userId,
  // merchandiserEmailId: merchandiserValue.emailId,
  // merchandiser: merchandiserValue.middleName
  //   ? `${merchandiserValue.firstName} ${merchandiserValue.middleName} ${merchandiserValue.lastName}`
  //   : `${merchandiserValue.firstName} ${merchandiserValue.lastName}`,
  // rangeResetManagerId: rangeResetManagerValue.userId,
  // rangeResetManagerEmailId: rangeResetManagerValue.emailId,
  // rangeResetManager: rangeResetManagerValue.middleName
  //   ? `${rangeResetManagerValue.firstName} ${rangeResetManagerValue.middleName} ${rangeResetManagerValue.lastName}`
  //   : `${rangeResetManagerValue.firstName} ${rangeResetManagerValue.lastName}`,
  // categoryDirectorId: categoryDirectorValue.userId,
  // categoryDirectorEmailId: categoryDirectorValue.emailId,
  // categoryDirector: categoryDirectorValue.middleName
  //   ? `${categoryDirectorValue.firstName} ${categoryDirectorValue.middleName} ${categoryDirectorValue.lastName}`
  //   : `${categoryDirectorValue.firstName} ${categoryDirectorValue.lastName}`,
  // supplyChainAnalystId: supplyChainSpecialistValue.userId,
  // supplyChainAnalystEmailId: supplyChainSpecialistValue.emailId,
  // supplyChainAnalyst: supplyChainSpecialistValue.supplyChainAnalyst,
  // clearancePriceApplied: clearancePriceApplied,
  // orderStopDateCheck: orderStopDateCheck,
  // stopOrder: stopOrder,
  //     },
  //   ])
  // }, [
  //   resetType,
  //   launchDate,
  //   rafDueDate,
  //   group,
  //   category,
  //   department,
  //   buyer,
  //   eventName,
  // ])

  // useEffect(() => {
  //   getProductHierarchyListAPI &&
  //     getProductHierarchyListAPI('department')
  //       .then((res: any) => {
  //         const hierarchyList = res.data.hierarchyNode.map((item: any) => {
  //           return {
  //             groupId: item.group,
  //             groupName: item.groupName,
  //             categoryId: item.category,
  //             categoryName: item.categoryName,
  //             departmentId: item.department,
  //             departmentName: item.departmentName,
  //           }
  //         })
  //         setProductHierValues(hierarchyList)
  //         console.log(hierarchyList)
  //       })
  //       .catch((err: any) => setProductHierValues([]))
  // }, [])
  // useEffect(() => {
  //   if (productHierValues) {
  //     let data: any = []
  //     productHierValues.map((item: any) => {
  //       if (!data) {
  //         data.push({
  //           value: item.groupId,
  //           label: item.groupName,
  //           groupId: item.groupId,
  //           groupName: item.groupName,
  //         })
  //       } else if (
  //         data.findIndex((d: any) => d.groupId === item.groupId) === -1
  //       ) {
  //         data.push({
  //           value: item.groupId,
  //           label: item.groupName,
  //           groupId: item.groupId,
  //           groupName: item.groupName,
  //         })
  //       }
  //     })
  //     console.log(data)
  //     setGroupOptions(data)
  //   }
  // }, [productHierValues])

  // useEffect(() => {
  //   if (group) {
  //     let data: any = []
  //     productHierValues.map((item: any) => {
  //       if (
  //         data.findIndex((d: any) => d.categoryId === item.categoryId) === -1
  //       ) {
  //         if (group.groupId === item.groupId) {
  //           data.push({
  //             value: item.categoryId,
  //             label: item.categoryName,
  //             categoryId: item.categoryId,
  //             categoryName: item.categoryName,
  //           })
  //         }
  //       }
  //     })
  //     console.log(data)
  //     setCategoryOptions(data)
  //   }
  // }, [group])

  // useEffect(() => {
  //   if (category) {
  //     let data: any = []
  //     productHierValues.map((item: any) => {
  //       if (
  //         data.findIndex((d: any) => d.departmentId === item.departmentId) ===
  //         -1
  //       ) {
  //         if (item.categoryId === category.categoryId) {
  //           data.push({
  //             value: item.departmentId,
  //             label: item.departmentName,
  //             departmentId: item.departmentId,
  //             departmentName: item.departmentName,
  //           })
  //         }
  //       }
  //     })
  //     console.log(data)
  //     setDepartmentOptions(data)
  //   }
  // }, [category])

  useEffect(() => {
    getProductHierarchyListAPI &&
      getProductHierarchyListAPI('group')
        .then((res: any) => {
          const grpList = res.data.hierarchyNode.map((item: any) => {
            return {
              value: item.groupName,
              label: item.groupName,
              groupName: item.groupName,
            }
          })
          setGroupOptions(grpList)
          console.log('group length: ', grpList.length)
        })
        .catch((err: any) => setGroupOptions([]))
  }, [])

  useEffect(() => {
    console.log(group)
    getProductHierarchyListAPI &&
      getProductHierarchyListAPI('category')
        .then((res: any) => {
          const categoryList = res.data.hierarchyNode.map((item: any) => {
            return {
              value: item.categoryName,
              label: item.categoryName,
              categoryName: item.categoryName,
              groupName: item.groupName,
            }
          })

          group &&
            setCategoryOptions(
              categoryList.filter(
                (cat: any) => cat.groupName === group.groupName
              )
            )
          // group &&
          //   console.log(
          //     'category length: ',
          //     categoryList.filter((cat: any) => cat.groupId === group.id)
          //   )
        })
        .catch((err: any) => setCategoryOptions([]))
  }, [group])

  useEffect(() => {
    if (group && category) {
      getProductHierarchyListAPI &&
        getProductHierarchyListAPI('department')
          .then((res: any) => {
            const depList = res.data.hierarchyNode.map((item: any) => {
              return {
                value: item.departmentName,
                label: item.departmentName,
                groupName: item.groupName,
                categoryName: item.categoryName,
              }
            })
            setDepartmentOptions(
              depList.filter(
                (dep: any) =>
                  dep.groupName === group.groupName &&
                  dep.categoryName === category.Name
              )
            )
            // console.log(
            //   'department length: ',
            //   depList.filter(
            //     (dep: any) =>
            //       dep.groupId === group.id && dep.categoryId === category.id
            //   )
            // )
            // setLoaded(true)
          })
          .catch((err: any) => {
            setDepartmentOptions([])
            // setLoaded(true)
          })
    }
  }, [category])

  const goBack = () => {
    history.goBack()
    console.log('going back')
    resetErrorFile()
  }

  // useEffect(() => {
  // console.log(location.state.data)
  // const data = location.state.data
  // if (fileData) {
  //   console.log(fileData)
  //   setEventDetails(fileData)
  //   setEventName(fileData[0]['eventName'])
  // }
  // setClassValues(
  //   () => {
  //   let classes = data['planogramClass']['className']
  //   let classValues = []
  //   for (var i in classes) {
  //     classValues.push({
  //       label: classes[i],
  //       value: classes[i],
  //     })
  //   }
  //   return classValues
  // }
  // )
  // }, [fileData])

  useEffect(() => {
    console.log(eventDetails)
  }, [eventDetails])

  const radio = <Radio color="primary" />

  const handleClassChange = (selected: any) => {
    console.log(selected)
    setClassValues(selected)
  }

  useEffect(() => {
    let classes = []
    if (classValues) {
      for (var i in classValues) {
        classes.push(classValues[i].value)
      }
    }
    setClassConfirmed(classes)
  }, [classValues])

  const handleClassConfirm = () => {
    handleClassClose()
    setEventDetails((prevState: any) => {
      if (prevState[0].hasOwnProperty('planogramClass')) {
        let a = {
          ...prevState[0],
          planogramClass: {
            className: classConfirmed,
          },
        }
        console.log(a)
        return [a]
      }
    })
  }

  const handleClassClose = () => {
    setClassOpen(false)
  }

  const classDialog = (
    <Dialog open={classOpen} onClose={handleClassClose}>
      <Box
        sx={{
          height: 450,
          // width: 'auto',
          p: 2,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
        className={classes.classDialog}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <DialogHeader title="Add Class" onClose={handleClassClose} />
          <Box
            sx={{
              alignItems: 'flex-start',
              marginTop: '30px',
            }}
          >
            <AutocompleteSelect
              value={classValues}
              isMulti={true}
              options={classOptions}
              onChange={handleClassChange}
            />
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'end',
          }}
        >
          <Button
            // type="submit"
            variant="contained"
            color="primary"
            className={classes.buttons}
            onClick={handleClassConfirm}
          >
            Save
          </Button>
        </Box>
      </Box>
    </Dialog>
  )

  const resetTypeTemplate = (rowData: any) => {
    // const val = resetTypes.findIndex(
    //   (item) => rowData.resetType.toLowerCase() === item.text.toLowerCase()
    // )
    // console.log('reset type:', val)
    return (
      <Select
        value={rowData.resetType}
        // value={resetType}
        onChange={(e) => {
          setEventDetails((prevState: any) => {
            return [
              {
                ...prevState[0],
                resetType: e.target.value,
              },
            ]
          })
          // setResetType(e.target.value)
        }}
        input={<OutlinedInput margin="dense" className={classes.muiSelect} />}
      >
        {resetTypes.map((type) => {
          return (
            <MenuItem
              value={type.text}
              key={type.name}
              className={classes.muiSelect}
            >
              {type.text}
            </MenuItem>
          )
        })}
      </Select>
    )
  }

  const rafDueDateTemplate = (rowData: any) => {
    return (
      <DatePicker
        format="dd/MM/yy"
        value={rowData['appDueDate'] ? rowData['appDueDate'] : null}
        onChange={(date: any) => {
          setEventDetails((prevState: any) => {
            return [
              {
                ...prevState[0],
                appDueDate: date,
              },
            ]
          })
        }}
        maxDate={rowData['targetDate']}
        maxDateMessage={allMessages.error.rafDateError}
      />
    )
  }

  const launchDateTemplate = (rowData: any) => {
    return (
      <DatePicker
        format="dd/MM/yy"
        value={rowData['targetDate']}
        onChange={(date: any) => {
          setEventDetails((prevState: any) => {
            return [
              {
                ...prevState[0],
                targetDate: date,
              },
            ]
          })
        }}
        minDate={rowData['appDueDate']}
      />
    )
  }

  const groupTemplate = (rowData: any) => {
    const val =
      groupOptions &&
      groupOptions.findIndex((group: any) => rowData.tradeGroup === group.group)
    return (
      <Select
        // value={val > -1 ? rowData.tradeGroup : rowData.tradeGroup}
        value={rowData.tradeGroup}
        onChange={(e) => {
          setGroup(groupOptions[val])
          // setCategory('')
          // setDepartment('')
          // setDepartmentOptions([])
          setEventDetails((prevState: any) => {
            return [
              {
                ...prevState[0],
                tradeGroup: e.target.value,
                categoryId: null,
                category: '',
                departmentId: null,
                department: '',
              },
            ]
          })
        }}
        input={<OutlinedInput margin="dense" className={classes.muiSelect} />}
      >
        {groupOptions &&
          groupOptions.map((type: any) => {
            return (
              <MenuItem
                value={type.groupName}
                key={type.groupId}
                className={classes.muiSelect}
              >
                {type.label}
              </MenuItem>
            )
          })}
      </Select>

      // <AutocompleteSelect
      //   value={group}
      //   options={groupOptions}
      //   // onChange={handleGroup}
      //   onChange={(e: any) => {
      //     if (e) {
      //       setGroup(e)
      //       setCategory('')
      //       setDepartment('')
      //       setDepartmentOptions([])
      //       setEventDetails((prevState: any) => {
      //         return [
      //           {
      //             ...prevState[0],
      //             tradeGroup: e.value,
      //           },
      //         ]
      //       })
      //     } else {
      //       setGroup('')
      //       setCategory('')
      //       setDepartment('')
      //       setCategoryOptions([])
      //       setDepartmentOptions([])
      //     }
      //   }}
      //   placeholder="Select Trading Group"
      // />
    )
  }

  const categoryTemplate = (rowData: any) => {
    const val =
      categoryOptions &&
      categoryOptions.findIndex(
        (item: any) =>
          rowData.categoryId === item.categoryId &&
          rowData.tradeGroup === item.groupName
      )
    console.log(val)
    return (
      <Select
        value={val > -1 ? rowData.category : rowData.category}
        onChange={(e) => {
          // const index = categoryOptions.findIndex(
          //   (item: any) => e.target.value === item.categoryId
          // )
          setEventDetails((prevState: any) => {
            return [
              {
                ...prevState[0],
                category: e.target.value,
                // category: categoryOptions[index].categoryName,
                // categoryId: categoryOptions[index].categoryId,
              },
            ]
          })
        }}
        input={<OutlinedInput margin="dense" className={classes.muiSelect} />}
      >
        {categoryOptions &&
          categoryOptions.map((type: any) => {
            return (
              <MenuItem
                value={type.categoryId}
                key={type.categoryName}
                className={classes.muiSelect}
              >
                {type.label}
              </MenuItem>
            )
          })}
      </Select>
    )
  }

  const departmentTemplate = (rowData: any) => {
    const val = departments.findIndex(
      (group) => rowData.department === group.text
    )
    return (
      //   <Typography variant="subtitle2">
      //     <select
      //       name="department"
      //       id="department"
      //       value={rowData.department}
      //       onChange={(e) => {
      //         setEventDetails((prevState: any) => {
      //           return [
      //             {
      //               ...prevState[0],
      //               department: e.target.value,
      //             },
      //           ]
      //         })
      //       }}
      //       required
      //     >
      //       <option value="Frozen Chips">Frozen Chips</option>
      //       <option value="Frozen Vegetables">Frozen Vegetables</option>
      //       <option value="Frozen Fish">Frozen Fish</option>
      //     </select>
      //   </Typography>
      <Select
        value={val > -1 ? departments[val].name : rowData.department}
        onChange={(e) => {
          setEventDetails((prevState: any) => {
            return [
              {
                ...prevState[0],
                department: e.target.value,
              },
            ]
          })
        }}
        input={<OutlinedInput margin="dense" className={classes.muiSelect} />}
      >
        {departments.map((type) => {
          return (
            <MenuItem
              value={type.name}
              key={type.name}
              className={classes.muiSelect}
            >
              {type.text}
            </MenuItem>
          )
        })}
      </Select>
    )
  }
  const eventNameTemplate = (rowData: any) => {
    return (
      //   <input
      //     type="text"
      //     value={rowData.eventName}
      //     onChange={(e) => {
      //       if (e.target.value !== null) {
      //         setEventDetails((prevState: any) => {
      //           return [
      //             {
      //               ...prevState[0],
      //               eventName: e.target.value,
      //             },
      //           ]
      //         })
      //       }
      //     }}
      //     style={{
      //       width: '130px',
      //     }}

      //   />
      <OutlinedInput
        margin="dense"
        className={classes.muiSelect}
        value={rowData.name}
        onChange={(e) => {
          if (e.target.value !== null) {
            setEventDetails((prevState: any) => {
              return [
                {
                  ...prevState[0],
                  name: e.target.value,
                },
              ]
            })
          }
        }}
      />
    )
  }

  const classTemplate = (rowData: any) => {
    if (rowData['planogramClass']) {
      if (rowData['planogramClass']['className'][0] != '') {
        let len = rowData['planogramClass']['className']
          ? rowData['planogramClass']['className'].length
          : '0'
        return (
          <Typography>
            <button
              className={classes.backButton}
              type="button"
              onClick={() => setClassOpen(true)}
              style={{
                fontSize: '16px',
              }}
            >
              Class({len})
            </button>
          </Typography>
        )
      } else {
        return (
          <Typography variant="body2">
            <button
              className={classes.backButton}
              type="button"
              onClick={() => setClassOpen(true)}
            >
              Class(0)
            </button>
          </Typography>
        )
      }
    } else {
      return (
        <Typography variant="body2">
          <button
            className={classes.backButton}
            type="button"
            onClick={() => setClassOpen(true)}
          >
            Class(0)
          </button>
        </Typography>
      )
    }
  }

  const storeWasteProcessTemplate = (rowData: any) => {
    const val = wastageRanges.findIndex(
      (group) => rowData.wastageRange === group.label
    )
    return (
      //   <select
      //     value={rowData.wastageRange}
      //     onChange={(e: any) => {
      //       setEventDetails((prevState: any) => {
      //         return [
      //           {
      //             ...prevState[0],
      //             wastageRange: e.target.value,
      //           },
      //         ]
      //       })
      //     }}
      //   >
      //     <option value="Week +4\ +7">Week +4\ +7</option>
      //     <option value="Week +5\ +8">Week +5\ +8</option>
      //     <option value="Week +6\ +9">Week +6\ +9</option>
      //     <option value="Week +7\ +10">Week +6\ +10</option>
      //   </select>
      <Select
        value={val > -1 ? wastageRanges[val].value : rowData.wastageRange}
        onChange={(e) => {
          setEventDetails((prevState: any) => {
            return [
              {
                ...prevState[0],
                wastageRange: e.target.value,
              },
            ]
          })
        }}
        input={<OutlinedInput margin="dense" className={classes.muiSelect} />}
      >
        {wastageRanges.map((type) => {
          return (
            <MenuItem
              value={type.value}
              key={type.value}
              className={classes.muiSelect}
            >
              {type.label}
            </MenuItem>
          )
        })}
      </Select>
    )
  }

  const clearancePriceTemplate = (rowData: any) => {
    return (
      //   <select
      //     value={rowData.clearencePriceCheck}
      //     onChange={(e: any) => {
      //       setEventDetails((prevState: any) => {
      //         return [
      //           {
      //             ...prevState[0],
      //             clearencePriceCheck: e.target.value,
      //           },
      //         ]
      //       })
      //     }}

      //     // style={{
      //     //     width:"130px"
      //     // }}
      //   >
      //     <option value="Yes">Yes</option>
      //     <option value="No">No</option>
      //   </select>

      <Select
        value={
          rowData.clearancePriceCheck === 'Yes'
            ? 'Y'
            : rowData.clearancePriceCheck === 'No'
            ? 'N'
            : rowData.clearancePriceCheck
        }
        onChange={(e) => {
          setEventDetails((prevState: any) => {
            return [
              {
                ...prevState[0],
                clearancePriceCheck: e.target.value,
              },
            ]
          })
        }}
        input={<OutlinedInput margin="dense" className={classes.muiSelect} />}
      >
        {yesOrNo.map((type) => {
          return (
            <MenuItem
              value={type.name}
              key={type.name}
              className={classes.muiSelect}
            >
              {type.text}
            </MenuItem>
          )
        })}
      </Select>
    )
  }
  const GSCOPDateTemplate = (rowData: any) => {
    return (
      //   <select
      //     value={rowData.orderStopDateCheck}
      //     onChange={(e: any) => {
      //       setEventDetails((prevState: any) => {
      //         return [
      //           {
      //             ...prevState[0],
      //             orderStopDateCheck: e.target.value,
      //           },
      //         ]
      //       })
      //     }}
      //     // style={{
      //     //     width:"130px"
      //     // }}
      //   >
      //     <option value="Yes">Yes</option>
      //     <option value="No">No</option>
      //   </select>
      <Select
        value={
          rowData.orderStopDateCheck === 'Yes'
            ? 'Y'
            : rowData.orderStopDateCheck === 'No'
            ? 'N'
            : rowData.orderStopDateCheck
        }
        onChange={(e) => {
          setEventDetails((prevState: any) => {
            return [
              {
                ...prevState[0],
                orderStopDateCheck: e.target.value,
              },
            ]
          })
        }}
        input={<OutlinedInput margin="dense" className={classes.muiSelect} />}
      >
        {yesOrNo.map((type) => {
          return (
            <MenuItem
              value={type.name}
              key={type.name}
              className={classes.muiSelect}
            >
              {type.text}
            </MenuItem>
          )
        })}
      </Select>
    )
  }

  const stopOrderTemplate = (rowData: any) => {
    return (
      //   <select
      //     value={rowData.stopOrder}
      //     onChange={(e: any) => {
      //       setEventDetails((prevState: any) => {
      //         return [
      //           {
      //             ...prevState[0],
      //             stopOrder: e.target.value,
      //           },
      //         ]
      //       })
      //     }}
      //     // style={{
      //     //     width:"130px"
      //     // }}
      //   >
      //     <option value="Yes">Yes</option>
      //     <option value="No">No</option>
      //   </select>
      <Select
        value={
          rowData.stopOrder === 'Yes'
            ? 'Y'
            : rowData.stopOrder === 'No'
            ? 'N'
            : rowData.stopOrder
        }
        onChange={(e) => {
          setEventDetails((prevState: any) => {
            return [
              {
                ...prevState[0],
                stopOrder: e.target.value,
              },
            ]
          })
        }}
        input={<OutlinedInput margin="dense" className={classes.muiSelect} />}
      >
        {yesOrNo.map((type) => {
          return (
            <MenuItem
              value={type.name}
              key={type.name}
              className={classes.muiSelect}
            >
              {type.text}
            </MenuItem>
          )
        })}
      </Select>
    )
  }

  const buyerTemplate = (rowData: any) => {
    return (
      // <Autocomplete
      //   value={rowData.buyer}
      //   options={Buyers.map((buyer) => {
      //     return buyer.value
      //   })}
      //   // options={Buyers}
      //   onChange={(event, newValue) => {
      //     console.log(newValue)
      //     if (newValue !== null) {
      //       setEventDetails((prevState: any) => {
      //         return [
      //           {
      //             ...prevState[0],
      //             buyer: newValue,
      //           },
      //         ]
      //       })
      //     }
      //   }}
      //   classes={{ input: classes.smallFont, option: classes.smallFontGreen }}
      //   renderInput={(params) => (
      //     <TextField {...params} variant="outlined" size="small" />
      //   )}
      // />
      <Grid
        container
        item
        // xl={7}
        // lg={7}
        // md={7}
        // sm={7}
        xs={12}
        spacing={1}
      >
        <Grid item xl={10} lg={10} md={10} sm={10} xs={10}>
          {/* <Typography variant="body2" color="primary"> */}
          <SearchSelect
            value={rowData.buyerEmailId}
            // onChange={handleBuyer}
            onChange={(event: any) => {
              console.log(event.target.value)
              if (event.target.value !== null) {
                setEventDetails((prevState: any) => {
                  return [
                    {
                      ...prevState[0],
                      buyerEmailId: event.target.value,
                    },
                  ]
                })
              }
            }}
            placeholder="Search Buyer"
            // onClick={handleBuyerClick}
            onClick={() => console.log('clicked')}
            styles={{
              fontSize: '12px',
            }}
          />
          {/* </Typography> */}
        </Grid>
        <Grid
          item
          xl={2}
          lg={2}
          md={2}
          sm={2}
          xs={2}
          style={{ textAlign: 'center' }}
        >
          <ConfirmCheckSign confirmValue={buyerConfirmed} />
        </Grid>
      </Grid>
    )
  }

  const buyingAssistantTemplate = (rowData: any) => {
    return (
      // <Autocomplete
      //   value={rowData.buyerAssistant}
      //   options={BuyingAssistants.map((buyer) => {
      //     return buyer.value
      //   })}
      //   onChange={(event, newValue) => {
      //     if (newValue !== null) {
      //       setEventDetails((prevState: any) => {
      //         return [
      //           {
      //             ...prevState[0],
      //             buyerAssistant: newValue,
      //           },
      //         ]
      //       })
      //     }
      //   }}
      //   classes={{ input: classes.smallFont, option: classes.smallFontGreen }}
      //   renderInput={(params) => (
      //     <TextField {...params} variant="outlined" size="small" />
      //   )}
      // />
      <Grid container item xs={12} spacing={1}>
        <Grid item xl={10} lg={10} md={10} sm={10} xs={10}>
          {/* <Typography variant="body2" color="primary"> */}
          <SearchSelect
            value={rowData.buyerAssistantEmailId}
            // onChange={handleBuyer}
            onChange={(event: any) => {
              console.log(event.target.value)
              if (event.target.value !== null) {
                setEventDetails((prevState: any) => {
                  return [
                    {
                      ...prevState[0],
                      buyerAssistantEmailId: event.target.value,
                    },
                  ]
                })
              }
            }}
            placeholder="Search Buying Assistant"
            // onClick={handleBuyerClick}
            onClick={() => console.log('clicked')}
            styles={{
              fontSize: '12px',
            }}
          />
          {/* </Typography> */}
        </Grid>
        <Grid
          item
          xl={2}
          lg={2}
          md={2}
          sm={2}
          xs={2}
          style={{ textAlign: 'center' }}
        >
          <ConfirmCheckSign confirmValue={buyingAssistantConfirmed} />
        </Grid>
      </Grid>
    )
  }

  const ownBrandManagerTemplate = (rowData: any) => {
    return (
      // <Autocomplete
      //   value={rowData.ownBrandManager}
      //   options={OwnBrandManagers.map((manager) => {
      //     return manager.value
      //   })}
      //   onChange={(event, newValue) => {
      //     if (newValue !== null) {
      //       setEventDetails((prevState: any) => {
      //         return [
      //           {
      //             ...prevState[0],
      //             ownBrandManager: newValue,
      //           },
      //         ]
      //       })
      //     }
      //   }}
      //   classes={{ input: classes.smallFont, option: classes.smallFontGreen }}
      //   renderInput={(params) => (
      //     <TextField {...params} variant="outlined" size="small" />
      //   )}
      // />
      <Grid container item xs={12} spacing={1}>
        <Grid item xl={10} lg={10} md={10} sm={10} xs={10}>
          {/* <Typography variant="body2" color="primary"> */}
          <SearchSelect
            value={rowData.ownBrandManagerEmailId}
            // onChange={handleBuyer}
            onChange={(event: any) => {
              console.log(event.target.value)
              if (event.target.value !== null) {
                setEventDetails((prevState: any) => {
                  return [
                    {
                      ...prevState[0],
                      ownBrandManagerEmailId: event.target.value,
                    },
                  ]
                })
              }
            }}
            placeholder="Search Own Brand Manager"
            // onClick={handleBuyerClick}
            onClick={() => console.log('clicked')}
            styles={{
              fontSize: '12px',
            }}
          />
          {/* </Typography> */}
        </Grid>
        <Grid
          item
          xl={2}
          lg={2}
          md={2}
          sm={2}
          xs={2}
          style={{ textAlign: 'center' }}
        >
          <ConfirmCheckSign confirmValue={ownBrandManagerConfirmed} />
        </Grid>
      </Grid>
    )
  }

  const seniorBuyingManagerTemplate = (rowData: any) => {
    return (
      // <Autocomplete
      //   value={rowData.seniorBuyingManager}
      //   options={SeniorBuyingManagers.map((manager) => {
      //     return manager.value
      //   })}
      //   onChange={(event, newValue) => {
      //     if (newValue !== null) {
      //       setEventDetails((prevState: any) => {
      //         return [
      //           {
      //             ...prevState[0],
      //             seniorBuyingManager: newValue,
      //           },
      //         ]
      //       })
      //     }
      //   }}
      //   classes={{ input: classes.smallFont, option: classes.smallFontGreen }}
      //   renderInput={(params) => (
      //     <TextField {...params} variant="outlined" size="small" />
      //   )}
      // />

      <Grid container item xs={12} spacing={1}>
        <Grid item xl={10} lg={10} md={10} sm={10} xs={10}>
          {/* <Typography variant="body2" color="primary"> */}
          <SearchSelect
            value={rowData.seniorBuyingManagerEmailId}
            // onChange={handleBuyer}
            onChange={(event: any) => {
              console.log(event.target.value)
              if (event.target.value !== null) {
                setEventDetails((prevState: any) => {
                  return [
                    {
                      ...prevState[0],
                      seniorBuyingManagerEmailId: event.target.value,
                    },
                  ]
                })
              }
            }}
            placeholder="Search Senior Buying Manager"
            // onClick={handleBuyerClick}
            onClick={() => console.log('clicked')}
            styles={{
              fontSize: '12px',
            }}
          />
          {/* </Typography> */}
        </Grid>
        <Grid
          item
          xl={2}
          lg={2}
          md={2}
          sm={2}
          xs={2}
          style={{ textAlign: 'center' }}
        >
          <ConfirmCheckSign confirmValue={seniorBuyingManagerConfirmed} />
        </Grid>
      </Grid>
    )
  }

  const merchandiserTemplate = (rowData: any) => {
    return (
      // <Autocomplete
      //   value={rowData.merchandiser}
      //   options={Merchandisers.map((merch) => {
      //     return merch.value
      //   })}
      //   onChange={(event, newValue) => {
      //     if (newValue !== null) {
      //       setEventDetails((prevState: any) => {
      //         return [
      //           {
      //             ...prevState[0],
      //             merchandiser: newValue,
      //           },
      //         ]
      //       })
      //     }
      //   }}
      //   classes={{ input: classes.smallFont, option: classes.smallFontGreen }}
      //   renderInput={(params) => (
      //     <TextField {...params} variant="outlined" size="small" />
      //   )}
      // />

      <Grid container item xs={12} spacing={1}>
        <Grid item xl={10} lg={10} md={10} sm={10} xs={10}>
          {/* <Typography variant="body2" color="primary"> */}
          <SearchSelect
            value={rowData.merchandiserEmailId}
            // onChange={handleBuyer}
            onChange={(event: any) => {
              console.log(event.target.value)
              if (event.target.value !== null) {
                setEventDetails((prevState: any) => {
                  return [
                    {
                      ...prevState[0],
                      merchandiserEmailId: event.target.value,
                    },
                  ]
                })
              }
            }}
            placeholder="Search Merchandiser"
            // onClick={handleBuyerClick}
            onClick={() => console.log('clicked')}
            styles={{
              fontSize: '12px',
            }}
          />
          {/* </Typography> */}
        </Grid>
        <Grid
          item
          xl={2}
          lg={2}
          md={2}
          sm={2}
          xs={2}
          style={{ textAlign: 'center' }}
        >
          <ConfirmCheckSign confirmValue={merchandiserConfirmed} />
        </Grid>
      </Grid>
    )
  }

  const rangeResetManagerTemplate = (rowData: any) => {
    return (
      // <Autocomplete
      //   value={rowData.rangeResetManager}
      //   options={RangeResetManagers.map((manager) => {
      //     return manager.value
      //   })}
      //   onChange={(event, newValue) => {
      //     if (newValue !== null) {
      //       setEventDetails((prevState: any) => {
      //         return [
      //           {
      //             ...prevState[0],
      //             rangeResetManager: newValue,
      //           },
      //         ]
      //       })
      //     }
      //   }}
      //   classes={{ input: classes.smallFont, option: classes.smallFontGreen }}
      //   renderInput={(params) => (
      //     <TextField {...params} variant="outlined" size="small" />
      //   )}
      // />

      <Grid container item xs={12} spacing={1}>
        <Grid item xl={10} lg={10} md={10} sm={10} xs={10}>
          {/* <Typography variant="body2" color="primary"> */}
          <SearchSelect
            value={rowData.rangeResetManagerEmailId}
            // onChange={handleBuyer}
            onChange={(event: any) => {
              console.log(event.target.value)
              if (event.target.value !== null) {
                setEventDetails((prevState: any) => {
                  return [
                    {
                      ...prevState[0],
                      rangeResetManagerEmailId: event.target.value,
                    },
                  ]
                })
              }
            }}
            placeholder="Search Range Reset Manager"
            // onClick={handleBuyerClick}
            onClick={() => console.log('clicked')}
            styles={{
              fontSize: '12px',
            }}
          />
          {/* </Typography> */}
        </Grid>
        <Grid
          item
          xl={2}
          lg={2}
          md={2}
          sm={2}
          xs={2}
          style={{ textAlign: 'center' }}
        >
          <ConfirmCheckSign confirmValue={rangeResetManagerConfirmed} />
        </Grid>
      </Grid>
    )
  }

  const categoryDirectorTemplate = (rowData: any) => {
    return (
      // <Autocomplete
      //   value={rowData.categoryDirector}
      //   options={CategoryDirectors.map((manager) => {
      //     return manager.value
      //   })}
      //   onChange={(event, newValue) => {
      //     if (newValue !== null) {
      //       setEventDetails((prevState: any) => {
      //         return [
      //           {
      //             ...prevState[0],
      //             categoryDirector: newValue,
      //           },
      //         ]
      //       })
      //     }
      //   }}
      //   classes={{ input: classes.smallFont, option: classes.smallFontGreen }}
      //   renderInput={(params) => (
      //     <TextField {...params} variant="outlined" size="small" />
      //   )}
      // />

      <Grid container item xs={12} spacing={1}>
        <Grid item xl={10} lg={10} md={10} sm={10} xs={10}>
          {/* <Typography variant="body2" color="primary"> */}
          <SearchSelect
            value={rowData.categoryDirectorEmailId}
            // onChange={handleBuyer}
            onChange={(event: any) => {
              console.log(event.target.value)
              if (event.target.value !== null) {
                setEventDetails((prevState: any) => {
                  return [
                    {
                      ...prevState[0],
                      categoryDirectorEmailId: event.target.value,
                    },
                  ]
                })
              }
            }}
            placeholder="Search Category Director"
            // onClick={handleBuyerClick}
            onClick={() => console.log('clicked')}
            styles={{
              fontSize: '12px',
            }}
          />
          {/* </Typography> */}
        </Grid>
        <Grid
          item
          xl={2}
          lg={2}
          md={2}
          sm={2}
          xs={2}
          style={{ textAlign: 'center' }}
        >
          <ConfirmCheckSign confirmValue={categoryDirectorConfirmed} />
        </Grid>
      </Grid>
    )
  }

  const supplyChainSplstTemplate = (rowData: any) => {
    return (
      // <Autocomplete
      //   value={rowData.supplyChainAnalyst}
      //   options={SupplyChainSpecialists.map((manager) => {
      //     return manager.value
      //   })}
      //   onChange={(event, newValue) => {
      //     if (newValue !== null) {
      //       setEventDetails((prevState: any) => {
      //         return [
      //           {
      //             ...prevState[0],
      //             supplyChainAnalyst: newValue,
      //           },
      //         ]
      //       })
      //     }
      //   }}
      //   classes={{ input: classes.smallFont, option: classes.smallFontGreen }}
      //   renderInput={(params) => (
      //     <TextField {...params} variant="outlined" size="small" />
      //   )}
      // />
      <Grid container item xs={12} spacing={1}>
        <Grid item xl={10} lg={10} md={10} sm={10} xs={10}>
          {/* <Typography variant="body2" color="primary"> */}
          <SearchSelect
            value={rowData.supplyChainAnalystEmailId}
            // onChange={handleBuyer}
            onChange={(event: any) => {
              console.log(event.target.value)
              if (event.target.value !== null) {
                setEventDetails((prevState: any) => {
                  return [
                    {
                      ...prevState[0],
                      supplyChainAnalystEmailId: event.target.value,
                    },
                  ]
                })
              }
            }}
            placeholder="Search Supply Chain Analyst"
            // onClick={handleBuyerClick}
            onClick={() => console.log('clicked')}
            styles={{
              fontSize: '12px',
            }}
          />
          {/* </Typography> */}
        </Grid>
        <Grid
          item
          xl={2}
          lg={2}
          md={2}
          sm={2}
          xs={2}
          style={{ textAlign: 'center' }}
        >
          <ConfirmCheckSign confirmValue={supplyChainSpecialistConfirmed} />
        </Grid>
      </Grid>
    )
  }

  const buttonTemplate = (rowData: any) => {
    return <Button>Remove</Button>
  }

  const dueDateTemplate = (rowData: any) => {
    const dueDate = rowData['dueDate']
    return (
      <DatePicker
        format="dd/MM/yy"
        value={dueDate}
        onChange={(date: any) => {
          setTaskDetails((prevState: any) => {
            return prevState.map((state: any) => {
              if (state.dueDate === dueDate) {
                return {
                  ...state,
                  dueDate: date,
                }
              } else {
                return state
              }
            })
          })
        }}
        // style={{
        //   //   fontSize: aboveSm ? '0.8rem' : '0.65rem',
        //   width: '150px',
        // }}
      />
    )
  }

  const notifiedDateTemplate = (rowData: any) => {
    const notifiedDate = rowData['notifiedDate']
    const testDate = new Date(notifiedDate).toString()
    return (
      <DatePicker
        format="dd/MM/yy"
        value={notifiedDate}
        onChange={(date: any) => {
          setTaskDetails((prevState: any) => {
            return prevState.map((state: any) => {
              if (state.notifiedDate === notifiedDate) {
                return {
                  ...state,
                  notifiedDate: date,
                }
              } else {
                return state
              }
            })
          })
        }}
        // style={{
        //   //   fontSize: aboveSm ? '0.8rem' : '0.65rem',
        //   width: '150px',
        // }}
      />
    )
  }

  const handleGroupValues = (e: any) => {
    setUserGroupValue(e.target.value)
  }

  const handleGroupsOpen = (rowData: any) => {
    setSingleTask(rowData)
    setUserGroup(rowData.assignedUserGroup)
    setGroupsOpen(true)
  }

  const handleGroupsClose = () => {
    setGroupsOpen(false)
  }

  const handleConfirmGroups = () => {
    setGroupsOpen(false)
    let a = taskDetails.filter((t: any) => t.taskId !== singleTask.taskId)
    let b = singleTask
    b.assignedUserGroup = userGroup
    b.manager = userGroupValue
    a.push(b)
    a.sort((x: any, y: any) =>
      x.taskId > y.taskId ? 1 : y.taskId > x.taskId ? -1 : 0
    )
    setTaskDetails(a)
  }

  const userGroupDialog = (
    <Dialog open={groupsOpen} onClose={handleGroupsClose}>
      <Box
        sx={{
          height: 450,
          // width: 'auto',
          p: 2,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
        className={classes.classDialog}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {/* <Box> */}
          {/* <Box
                        sx={{
                            display: 'flex',
                            height: 30,
                            flexDirection: 'row',
                        }}
                        className={classes.viewLogTitle}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                flexGrow: 1,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <Typography variant="subtitle1">Manage User Group</Typography>
                        </Box>
                        <Box
                            sx={{
                                paddingRight: 2,
                            }}
                        >
                            <button
                                style={{
                                    border: 0,
                                    padding: 0,
                                    height: 22,
                                    width: 22,
                                }}
                                className={classes.closeViewLog}
                                onClick={handleGroupsClose}
                            >
                                <b>X</b>
                            </button>
                        </Box>
                    </Box> */}
          <DialogHeader title="Manage User Group" onClose={handleGroupsClose} />

          <Box
            sx={{
              alignItems: 'flex-start',
              marginTop: '30px',
            }}
          >
            <Box>
              {/* <select
                value={userGroup && userGroup}
                onChange={(e: any) => {
                  setUserGroup(e.target.value)
                }}
              >
                <option value="buyer">Buyer</option>

                <option value="buyerAssistant">Buying Assistant</option>

                <option value="seniorBuyingManager">
                  Senior Buying Manager
                </option>
                <option value="systemTask">System Task</option>
              </select> */}

              <Select
                value={userGroup && userGroup}
                onChange={(e: any) => {
                  setUserGroup(e.target.value)
                }}
                input={
                  <OutlinedInput
                    margin="dense"
                    //   className={classes.muiSelect}
                  />
                }
              >
                {userGroupOptions.map((type) => {
                  return (
                    <MenuItem
                      value={type.value}
                      key={type.value}
                      //   className={classes.muiSelect}
                    >
                      {type.label}
                    </MenuItem>
                  )
                })}
              </Select>
            </Box>
            <Box>
              <FormControl component="fieldset">
                <RadioGroup onChange={handleGroupValues}>
                  {userGroup &&
                    userGroup.toLowerCase() === 'buyer' &&
                    Buyers.map((b: any) => {
                      return (
                        <FormControlLabel
                          key={b.value}
                          value={b.value}
                          control={radio}
                          label={b.label}
                          classes={{ label: classes.dialogText }}
                        />
                      )
                    })}
                  {userGroup &&
                    userGroup.toLowerCase() === 'buying assistant' &&
                    BuyingAssistants.map((b: any) => {
                      return (
                        <FormControlLabel
                          key={b.value}
                          value={b.value}
                          control={radio}
                          label={b.label}
                          classes={{ label: classes.dialogText }}
                        />
                      )
                    })}

                  {userGroup &&
                    userGroup.toLowerCase() === 'senior buying manager' &&
                    SeniorBuyingManagers.map((b: any) => {
                      return (
                        <FormControlLabel
                          key={b.value}
                          value={b.value}
                          control={radio}
                          label={b.label}
                          classes={{ label: classes.dialogText }}
                        />
                      )
                    })}
                </RadioGroup>
              </FormControl>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'end',
          }}
        >
          <Button
            // type="submit"
            variant="contained"
            color="primary"
            className={classes.buttons}
            onClick={handleConfirmGroups}
          >
            Save
          </Button>
        </Box>
      </Box>
    </Dialog>
  )

  const userGroupTemplate = (rowData: any) => {
    return (
      <Typography variant="body2">
        <button
          className={classes.backButton}
          type="button"
          onClick={() => handleGroupsOpen(rowData)}
          style={{
            fontSize: '16px',
          }}
        >
          {rowData.assignedUserGroup}
        </button>
      </Typography>
    )
  }

  const removeTasks = () => {
    let _tasks = taskDetails.filter(
      (value: any) => !selectTasks.includes(value)
    )
    console.log(_tasks)
    setTaskDetails(_tasks)
    setSelectTasks(null)
  }

  const handlePublishEvent = () => {
    history.push(`${DEFAULT}${RANGEAMEND_EVENTDASH}`)
  }

  return (
    <>
      {/* <Paper className={classes.root} elevation={0}> */}
      <div
        className="manageUser" //className={classes.root}
      >
        <div className={classes.value}>
          <Grid item container spacing={2}>
            <Grid
              container
              item
              xl={12}
              lg={12}
              md={12}
              sm={12}
              xs={12}
              style={{ paddingBottom: '20px' }}
            >
              <Grid item sm={10} xs={12}>
                <Typography variant="h6" color="primary">
                  Manage Event - {eventName && eventName}
                </Typography>
              </Grid>

              <Grid
                item
                sm={2}
                xs={12}
                style={{
                  textAlign: aboveSm ? 'right' : 'left',
                }}
              >
                <Typography color="primary">
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
                </Typography>
              </Grid>
            </Grid>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                <DataTable
                  value={eventDetails && eventDetails}
                  scrollable
                  showGridlines
                  style={{
                    height: '100%',
                  }}
                >
                  {manageEventPublishCols.map((col: any, index: any) => {
                    return (
                      <Column
                        key={index}
                        field={col.field}
                        header={col.header}
                        body={
                          (col.field === 'targetDate' && launchDateTemplate) ||
                          (col.field === 'resetType' && resetTypeTemplate) ||
                          (col.field === 'appDueDate' && rafDueDateTemplate) ||
                          (col.field === 'tradeGroup' && groupTemplate) ||
                          (col.field === 'category' && categoryTemplate) ||
                          (col.field === 'department' && departmentTemplate) ||
                          (col.field === 'name' && eventNameTemplate) ||
                          (col.field === 'clearancePriceCheck' &&
                            clearancePriceTemplate) ||
                          (col.field === 'orderStopDateCheck' &&
                            GSCOPDateTemplate) ||
                          (col.field === 'stopOrder' && stopOrderTemplate) ||
                          (col.field === 'buyer' && buyerTemplate) ||
                          (col.field === 'planogramClass' && classTemplate) ||
                          (col.field === 'wastageRange' &&
                            storeWasteProcessTemplate) ||
                          (col.field === 'buyerAssistant' &&
                            buyingAssistantTemplate) ||
                          (col.field === 'ownBrandManager' &&
                            ownBrandManagerTemplate) ||
                          (col.field === 'seniorBuyingManager' &&
                            seniorBuyingManagerTemplate) ||
                          (col.field === 'merchandiser' &&
                            merchandiserTemplate) ||
                          (col.field === 'rangeResetManager' &&
                            rangeResetManagerTemplate) ||
                          (col.field === 'categoryDirector' &&
                            categoryDirectorTemplate) ||
                          (col.field === 'supplyChainSplst' &&
                            supplyChainSplstTemplate)
                        }
                        style={ConfirmedBodyStyle(col.width)}
                        headerStyle={ConfirmedHeaderStyle(col.width)}
                      />
                    )
                  })}
                </DataTable>
              </Grid>
              <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                <Typography variant="subtitle1" color="primary">
                  Manage Tasks
                </Typography>
              </Grid>

              <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                <DataTable
                  value={taskDetails && taskDetails}
                  selectionMode="checkbox"
                  selection={selectTasks}
                  onSelectionChange={(e) => setSelectTasks(e.value)}
                  scrollable
                  showGridlines
                  sortField="taskId"
                >
                  {/* <Column
                    selectionMode="multiple"
                    headerStyle={{
                      width: '50px',
                      color: 'white',
                      backgroundColor: theme1.palette.primary.main,
                    }}
                  ></Column> */}
                  {manageTaskPublishCols.map((col: any, index: any) => {
                    return (
                      <Column
                        key={index}
                        field={col.field}
                        header={col.header}
                        body={
                          (col.field === 'rowButton' && buttonTemplate) ||
                          (col.field === 'dueDate' && dueDateTemplate) ||
                          (col.field === 'notifiedDate' &&
                            notifiedDateTemplate) ||
                          (col.field === 'assignedUserGroup' &&
                            userGroupTemplate)
                        }
                        style={ConfirmedBodyStyle(col.width)}
                        sortable={col.field === 'taskId'}
                        headerStyle={ConfirmedHeaderStyle(col.width)}
                      />
                    )
                  })}
                </DataTable>
              </Grid>
            </MuiPickersUtilsProvider>
            <Grid item container xl={12} lg={12} md={12} sm={12} xs={12}>
              <Grid item xl={5} lg={5} md={5} />

              <Grid item container xl={7} lg={7} md={7} sm={12} xs={12}>
                <Grid
                  item
                  container
                  xl={12}
                  lg={12}
                  md={12}
                  sm={12}
                  xs={12}
                  spacing={3}
                  style={{
                    textAlign: 'center',
                  }}
                >
                  <Grid item xl={5} lg={5} md={5} sm={5} xs={12}>
                    <Button
                      variant="contained"
                      color="primary"
                      // type="submit"
                      onClick={removeTasks}
                    >
                      Remove/Skip Task
                    </Button>
                  </Grid>
                  <Grid item xl={3} lg={3} md={3} sm={3} xs={12}>
                    <Button
                      variant="contained"
                      color="primary"
                      // type="submit"
                    >
                      Save
                    </Button>
                  </Grid>
                  <Grid item xl={4} lg={4} md={4} sm={4} xs={12}>
                    <Button
                      variant="contained"
                      color="primary"
                      // type="submit"
                      onClick={handlePublishEvent}
                    >
                      Publish Event
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </div>
      {/* </Paper> */}
      {classDialog}
      {userGroupDialog}
    </>
  )
}

const mapStateToProps = (state: any) => {
  return {
    fileData: state.fileReducer.fileData,
    fileErrorData: state.fileReducer.fileErrorData,
  }
}

const matchDispatchToProps = (dispatch: any) => {
  return {
    setFile: (fileData: any) => dispatch(setFile(fileData)),
    resetFile: () => dispatch(resetFile),
    resetErrorFile: () => dispatch(resetErrorFile()),
  }
}

export default connect(mapStateToProps, matchDispatchToProps)(ManageEventCreate)
