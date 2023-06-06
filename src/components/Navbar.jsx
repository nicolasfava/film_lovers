import React from 'react'
import logo from '../assets/logo.png'
import filter from '../assets/filter.png'
import close from '../assets/close.png'
import sun from '../assets/sun.png'
import moon from '../assets/moon.png'

import {navLinks} from '../costants'
import styles from '../costants/style'

const Navbar = (props) => {

  const [toggle, setToggle] = React.useState(false)

 
/*
  const setLinks = (id) => {
    navLinks.map((link, index) => {
      return {
        ...link,
        active: index === id ? !link.active : link.active
      }
    }
    )
    console.log(navLinks.active)
  }
  () => setLinks(nav.id)
*/
  return (
    <section>
      <div className='p-6 flex flex-row items-center justify-between border-b-[1px] w-full'>
        <img src={logo} alt="logo" className='w-[150px] h-[75px] mr-10'/>
        
        <div className='flex flex-1 justify-end items-center'>
          <img 
            src={props.dark ? sun : moon}
            className={`w-[30px] h-[30px] object-contain ${props.dark && 'filterColors'} cursor-pointer mr-6`}
            onClick={props.modeDark}  
          />
          <p className={`${props.dark ? styles.paragraph_filter : styles.paragraph_filter_reverse}`}>Filter by :</p>
          <img 
            src={toggle ? close : filter} 
            alt='menu'  
            className={`w-[28px] h-[28px] object-contain ${props.dark && 'filterColors'} cursor-pointer`}
            onClick={() => setToggle((prev) => !prev)}
            />  
            <div className={`${toggle ? 'flex' : 'hidden'} p-6 absolute z-[5] top-20 right-0 min-w-[140px] mx-4 my-2 rounded-xl sidebarMenu ${props.dark ? 'bg-black-gradient-2' : 'bg-white-gradient-2'}`}>
            <ul className='list-none flex flex-col flex-1 justify-end items-center'>
              {navLinks.map((nav, index) => (
                <li key={nav.id} className={`cursor-pointer ${props.dark ? 'text-text_light' : 'text-text_dark'} font-poppins font-normal text-[16px] ${index === navLinks.length - 1 ? 'mb-0' : 'mb-4'}`}>
                  <a href={`#${nav.id}`} onClick={() => props.onClick(nav.id, nav.title)}>
                      {nav.title}
                  </a>
                </li>
              ))}
          
            </ul>
            </div>    
        </div>
      </div>
      
    </section>
  )
}

export default Navbar