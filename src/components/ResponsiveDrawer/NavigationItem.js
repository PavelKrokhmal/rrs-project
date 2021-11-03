import ListItemText from '@mui/material/ListItemText'
import ListItem from '@mui/material/ListItem'
import * as React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useCallback} from 'react'
import {filterEmployees} from '../../modules/app/actions'
import {selectAppState} from '../../modules/app/selectors'

export default function({id, jobId, title}) {
  const dispatch = useDispatch()

  const appState = useSelector(selectAppState)

  const action = useCallback(() => {
    dispatch(filterEmployees(jobId))
  }, [jobId])

  return (
    <ListItem button key={id} onClick={action} selected={appState.selectedJob === jobId}>
      <ListItemText primary={title}/>
    </ListItem>
  )
}