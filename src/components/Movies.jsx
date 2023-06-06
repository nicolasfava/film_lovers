import React from 'react'
import Movie from './Movie'
import axios from 'axios'
import styles from '../costants/style'

const Movies = (props) => {

  console.log(props.filter)

  const [movies, setMoviees] = React.useState([])

  const [isSearch, setIsSearch] = React.useState(false)

  //const dark = React.useState(props.dark)
  console.log(props.dark)
  let isDark = props.dark

  
  

  React.useEffect(() => {
      axios.get(`https://api.themoviedb.org/3/${props.filter}`).then(response => {
        setMoviees(response.data.results);
        setIsSearch(false)
      }).catch(err=>(console.log(err)))
    }, [props.filter])


  React.useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=4dbf0900041ba3d3db34855268a16d0c&query=${props.customTitle}`).then(response => {
      setMoviees(response.data.results);
      setIsSearch(true);
    }).catch(err => (console.error(err)))
    }, [props.customTitle])
  

  return (
    <section>
      <h2 className={`${props.dark ? styles.heading2 : styles.heading2_reverse} m-6`}>
        {isSearch ? props.customTitle : props.page}
      </h2>
    <div className='grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-6 h-[100%] w-[100%]'>
      {movies.map((movie, index) => {
        return <Movie key={index} element={movie} isDark={props.dark}/>
      })}
    </div>
    </section>
  )
}

export default Movies