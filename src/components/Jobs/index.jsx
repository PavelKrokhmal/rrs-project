import React, {useEffect} from 'react'
import {JOBS} from 'modules/api/endpoints'
import useFetch from 'hooks/useFetch'
import List from '@mui/material/List'
import NavigationItem from 'components/ResponsiveDrawer/NavigationItem'
import {LinearProgress} from '@mui/material'

export default function Jobs() {
  const {response, performFetch} = useFetch(JOBS)
  const {loading, data} = response

  useEffect(() => {
    performFetch()
  }, [performFetch])

  if (loading || !data) {
    return <LinearProgress/>
  }

  return <List>
    {data.map(({id, jobId, title}) => (
      <NavigationItem key={id} jobId={jobId} title={title}/>
    ))}
  </List>
}