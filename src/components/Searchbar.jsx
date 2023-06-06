import React from 'react'
import search from '../assets/search.png'

const Searchbar = (props) => {



  return (
    <section className='w-full mb-4' onSubmit={props.onSend}>
      <form className='w-[100%] h-[50px] flex flex-row items-center justify-center'>
        <input value={props.form} name='title' onChange={props.onHandle} className={`h-[100%] rounded-l-[20px] border-[1px] p-6 ${props.dark ? 'bg-dark' : 'bg-white'}  ${props.dark ? 'text-text_light' : 'text-text_dark'}`} type="text" placeholder='Search a film'/>
        <button className='w-[100px] h-[100%] bg-red rounded-r-[20px] p-2 flex justify-center object-contain'>
          <img src={search} className='xs:w-[50%] xs:h-[100%] object-contain filterColors border-none'/>
        </button>
      </form>
    </section>
  )
}

export default Searchbar