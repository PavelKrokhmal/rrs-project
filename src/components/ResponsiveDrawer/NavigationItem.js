import ListItemText from '@mui/material/ListItemText'
import ListItem from '@mui/material/ListItem'
import * as React from 'react'

export default function({id, jobId, title}) {
  return (
    <ListItem button key={id}>
      <ListItemText primary={title}/>
    </ListItem>
  )
}