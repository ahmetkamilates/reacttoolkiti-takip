import React from 'react'
import { MdLocationOn } from 'react-icons/md'
import { FaSuitcase } from 'react-icons/fa'

import { BsFillCalendarDateFill } from 'react-icons/bs'
const Card = ({ job }) => {

    


    const getClassName = () => {
        switch (job.status) {
            case "Devam ediyor":
                return "pending";

            case "Reddedildi":
                return "rejected";

            case "Mülakat":
                return "interview";

            default:
                return "default";
        }
    }
    return (
        <div className='card'>
            <div className='head'>
                <div className='letter'>
                    <p>{job.company[0]}</p>
                </div>
                <div className='info'>
                    <p>{job.position}</p>
                    <p>{job.company}</p>
                </div>

            </div>
            <div className='body'>
                <div className='field'>
                    <i><MdLocationOn /></i>
                    <p>{job.location}</p>
                </div>
                <div className='field'>
                    <i><FaSuitcase /></i>
                    <p>{job.type}</p>
                </div>
                <div className='field'>
                    <i><BsFillCalendarDateFill /></i>
                    <p>{job.date}</p>
                </div>
                <div className='status'>

                    <span className={getClassName()}>{job.status}</span>
                </div>
            </div>
        </div>
    )
}

export default Card