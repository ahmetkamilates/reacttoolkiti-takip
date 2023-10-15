import React, { useEffect } from 'react'
import Card from '../components/Card'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { setJob,setError } from '../redux/jobSlice'
import Loading from '../components/Loading'
import Filter from '../components/Filter'

const JobList = () => {
  const dispatch = useDispatch()
 const state = useSelector((store) => store)



 const getFetchData = () => {
  axios.get("http://localhost:400/jobs")
    .then((res) => dispatch(setJob(res.data)))
    .catch(() => dispatch(setError()))
 }


  useEffect(() => {
    getFetchData()

    
  },[])
  return (
    <div className='list-page'>
      <Filter/>
      <h3 className='job-count'>
        Bulunan ({state.jobs.length}) iş arasından ({state.jobs.length}) tane görüntüleniyor
        </h3>
      <section className='job-list'>
        {!state.initialized && <Loading/>} 
        {state.initialized && !state.isError ? (
          state.jobs.map((job) => <Card job={job}/>)
        )
      : <p className='error-msg'>Hata!</p>}
      </section>
    </div>
  )
}

export default JobList