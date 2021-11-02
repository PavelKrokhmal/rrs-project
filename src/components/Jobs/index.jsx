import React, {useEffect} from 'react'
import {JOBS} from 'modules/api/endpoints'
import useFetch from 'hooks/useFetch'

export default function Jobs() {
  const {response, performFetch} = useFetch(JOBS)

  useEffect(() => {
    performFetch()
  }, [performFetch])

  console.log(response)

  return (
    <div>
      Jobs
    </div>
  )
}