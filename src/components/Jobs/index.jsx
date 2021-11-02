import React, {useEffect} from 'react'
import api from 'modules/api/api'
import {JOBS} from 'modules/api/endpoints'
import {useSelector} from 'react-redux'

export default function Jobs() {
  useEffect(async () => {
    const response = await api.fetch(JOBS)
  }, [])


  const jobs = useSelector(store => store.api.jobs)

  console.log(jobs)

  return (
    <div>
      Jobs
    </div>
  )
}