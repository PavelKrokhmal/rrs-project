import React from 'react'
import ProfileCard from './ProfileCard'
import {Grid, LinearProgress} from '@mui/material'
import {makeStyles} from '@mui/styles'

const useStyles = makeStyles((theme) => {
  return {
    root: {
      display: 'flex',
      flexWrap: 'wrap'
    },
    item: {
      padding: '10px',
      flexBasis: '25%'
      // [theme.breakpoints.up('sm')]: {
      //   flexBasis: '50%'
      // },
      // [theme.breakpoints.down('sm')]: {
      //   flexBasis: '100%'
      // },
      // [theme.breakpoints.up('lg')]: {
      //   flexBasis: '33.33%'
      // }
    }
  }
})

export default function ProfileGrid({profiles = [], loading}) {
  const classes = useStyles()

  if (loading || !profiles) {
    return (
      <Grid container>
        <LinearProgress/>
      </Grid>
    )
  }

  return (
    <div className={classes.root}>
      {profiles
        .map(profile => (
          <div key={profile.id} className={classes.item}>
            <ProfileCard
              src={profile.avatar}
              title={profile.name}
              subSpecialties={profile.job}
            />
          </div>
        ))}
    </div>
  )
}