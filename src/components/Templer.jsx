import React from 'react'
import '../styles/Templer.css'
import { templatesData } from '../constants'
import { useNavigate } from 'react-router-dom'

const Templer = () => {
  const navigate = useNavigate();

  function navig(index) {
    navigate(`./${index}`)  
  }
  return (
    <section className='templer p-5 bg-[#111]'>
      {templatesData.map((item, index) => (
        <div key={index} className='temp-item text-white'>
          <img src={item.url} alt={`Template ${item.id}`} className='template-image' />
          <p>ATS Score: {item.ats}</p>
          <button onClick={()=>navig(index)} className='temp-btn bg-white rounded-md w-full text-black p-1'>Select</button>
        </div>
      ))}

      {/* {console.log(templatesData)} */}
    </section>
  )
}

export default Templer
