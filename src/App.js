import React from 'react'

import { Navbar, Searchbar, Movies, Movie } from './components'

const App = () => {

  const [list, setList] = React.useState('movie/upcoming?api_key=4dbf0900041ba3d3db34855268a16d0c&language=en-US&page=1')

  const [dark, setDark] = React.useState(true)

  const [title, setTitle] = React.useState()

  const [dataForm, setDataForm] = React.useState()

  const [titlePage, setTitlePage] = React.useState('Upcoming')



  const handleChange = (event) => {
    const { name, value } = event.target
    setDataForm(value)
  }
  console.log(dataForm)

  const setData = (event) => {
    event.preventDefault()
    setTitle(dataForm)
    console.log(title)
  }

  const setFilter = (id, title) => {
    setList(id)
    setTitlePage(title)
  }

  const modeDark = () => {
    setDark((prev) => !prev)
  }


  return (
    <div className={`flex flex-col w-full ${dark ? 'bg-dark' : 'bg-light'}`}>
        <div className='w-full'>
            <Navbar onClick={setFilter} dark={dark} modeDark={modeDark}/> 
        </div>
        <div className='w-full flex flex-col p-6'>
            <Searchbar dark={dark} form={dataForm} onHandle={handleChange} onSend={setData}/>
            <Movies filter={list} dark={dark} modeDark={modeDark} customTitle={title} page={titlePage}/>
        </div>
        
    </div>
  )
}

export default App