import React from 'react'
import { statusOptions,typeOptions } from '../constants'
import { toast } from 'react-toastify'
import { v4 } from 'uuid'

import { useNavigate } from 'react-router-dom'
import Filter from '../components/Filter'
const AddJob = () => {
  const navigate = useNavigate()
  const handleSubmit = (e) => {

    e.prevent.default()
    
   const form = new FormData(e.target)
   const newJob = Object.fromEntries(form.entries())

   if(!newJob.type || !newJob.status){
    toast.info("Lütfen Formu Doldurun")
    return;
   }
   newJob.id = v4()

   newJob.date = new Date()

   axios.post("http://localhost:4000/jobs",newJob)
   .then((res) => navigate('/'))
   .catch(() => console.log('Hata'))
 
    }
  return (
    <div className='add-page'>

    
    <section className='add-sec'>
     <h2>Yeni iş ekle</h2>
     <form onSubmit={handleSubmit} action="">
     <div>
       <label>Posizyon</label>
       <input type="text" required name='position' />
     </div>
     <div>
       <label>Şirket</label>
       <input type="text" required name='company' />
     </div>
     <div>
       <label>Lokasyon</label>
       <input type="text" required name='location' />
     </div>
     <div>
       <label>Durum</label>
       <select  name='status'>
       <option selected disabled value="">Seçiniz</option>
       {statusOptions.map((i) => <option key={i}>{i}</option>)}
       
       </select>
     </div>
     <div>
       <label>Tür</label>
       <select  name='type'>
       <option selected disabled value="">Seçiniz</option>
       {typeOptions.map((i) => <option key={i}>{i}</option>)}
       </select>
     </div>
     <div>
       <button>Ekle</button>
     </div>
     </form>
    </section>
    </div>
    
  )
}

export default AddJob