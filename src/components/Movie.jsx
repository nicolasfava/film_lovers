import React from 'react'
import axios from 'axios'
import styles from '../costants/style'
import close from '../assets/close.png'
import star from '../assets/star.png'
import user from '../assets/user.png'
import img_default from '../assets/img_default.png'

const getURL = (poster_path) => {
  let imgURL
  try {
    imgURL = `https://www.themoviedb.org/t/p/w220_and_h330_face${poster_path}`
  } catch {
    imgURL = '../assets/user.png'
  }
  return imgURL
}

// return `https://www.themoviedb.org/t/p/w220_and_h330_face${poster_path}`

const Movie = (props) => {

  const [movieId, setMovieId] = React.useState()

  const [infoMovie, setInfoMovie] = React.useState()

  const [infoCast, setInfoCast] = React.useState([])

  const [isInfo, setIsInfo] = React.useState(false)

  const [toggle, setToggle] = React.useState(false)

  const setInfo = () => {
    setIsInfo((prev) => !prev)
  }

  const setId = (id) => {
    setToggle((prev) => !prev)
    
    setMovieId(id)
    console.log(id)
  }

  
  React.useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=4dbf0900041ba3d3db34855268a16d0c`).then(response => {
        //setInfoMovie(response.title);
        setInfoMovie(response.data); 
        console.log(response.data)  
        setIsInfo((prev) => !prev) 
        console.log(isInfo)
        //console.log("ciao")  
      }).catch(err=>(console.log(err)))
  },[toggle]);

  React.useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=4dbf0900041ba3d3db34855268a16d0c`).then(response => {
            //setInfoMovie(response.title);
            setInfoCast(response.data.cast); 
            console.log(response.data)  
            //setIsInfo((prev) =>!prev) 
            console.log(isInfo)
            //console.log("ciao")  
          }).catch(err=>(console.log(err)))
      },[toggle]);


      /*
      <div className='flex flex-col lg:gap-4 gap-2'>
            <h2 className={props.isDark ? styles.heading2 : styles.heading2_reverse}>{infoMovie.title}</h2>
            <p className={props.isDark ? styles.paragraph2 : styles.paragraph2_reverse}>{infoMovie.overview}</p>
            <div className='flex flex-row items-center gap-2'>
              <img src={star} className='w-[30px] h-[30px]'/>
              <p className={props.isDark ? styles.paragraph2 : styles.paragraph2_reverse}>{infoMovie.vote_average}</p>
            </div>
            <div className='flex flex-row'>
              {infoMovie.genres.map((item) => {
                return <p className={`${props.isDark ? styles.paragraph2 : styles.paragraph2_reverse} mr-4`}>{item.name}</p>
              })}  
            </div>
            <div className='flex-col lg:flex hidden'>
              <p className={props.isDark ? styles.paragraph2 : styles.paragraph2_reverse}>
                Cast:
              </p>
              <div className='flex flex-wrap mt-2'>
                {infoCast.map((item) => {
                  return item.known_for_department === 'Acting' ? <p className={`${props.isDark ? styles.paragraph2 : styles.paragraph2_reverse} text-[10px] mr-4`}>{item.original_name}</p> : null
                })}
              </div>
            </div> 
          </div> 

      */

      

      //w-[180px] h-[385px]

      //getURL(item.profile_path)

      //<img id='profile' src={getURL(item.profile_path)}
                      //className='w-[40px] h-[40px] object-contain'/>

      //<img src={getURL(props.element.poster_path)} className='w-[100%] h-[80%] object-contain rounded-t-[10px]'/>
  return (
      <section>
           {isInfo &&
        <div className={`fixed top-[0] left-0 ${props.isDark ? 'bg-black-gradient' : 'bg-white-gradient'} w-[100%] h-[100%] flex flex-col p-6 md:gap-4 rounded-[10px]`}>
            <img src={close} className={`absolute right-[20px] top-[20px] ${props.isDark && 'filterColors'} w-[35px] h-[30px]`} onClick={setInfo}/>
           <div className='flex sm:flex-row flex-col items-center justify-start gap-4'>
            <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face${infoMovie.poster_path}`} className='sm:w-[140px] sm:h-[240px] ss:w-[190px] ss:h-[330px] s:w-[210px] s:h-[360px] w-[175px] h-[300px]'/>
            <div className='flex flex-col lg:gap-4 gap-2'>
              <h2 className={props.isDark ? styles.heading2 : styles.heading2_reverse}>{infoMovie.title}</h2>
              <p className={props.isDark ? styles.paragraph2 : styles.paragraph2_reverse}>{infoMovie.overview}</p>
              <div className='flex flex-row items-center gap-2'>
                <img src={star} className='sm:w-[30px] sm:h-[30px] w-[15px] h-[15px]'/>
                <p className={props.isDark ? styles.paragraph2 : styles.paragraph2_reverse}>{infoMovie.vote_average}</p>
            </div>
            <div className='flex justify-items-start'>
              {infoMovie.genres.map((item) => {
                return <p className={`${props.isDark ? styles.paragraph2 : styles.paragraph2_reverse} mr-4`}>{item.name}</p>
              })}  
            </div>
            </div>
           </div>
           <div className='sm:flex flex-wrap gap-2 sm:mt-6 hidden'>

            {infoCast.map((item) => {
              return item.known_for_department === 'Acting' && 
                <div className='flex lg:flex-col flex-row lg:w-[60px] flex-wrap'>
                  <object data={getURL(item.profile_path)} type="image/jpeg" className={`w-[30px] h-[30px] object-contain lg:block hidden`}>
                    <img src={user} className={props.isDark && 'filterColors'}/>
                  </object>
                  
                  <p className={`${props.isDark ? styles.paragraph_cast : styles.paragraph_cast_reverse} sm:mr-4`}>{item.original_name}</p>
                </div>
            })}

            
           </div>
        </div>
         }
      
       
              
      
      <div className='shadow-2xl flex flex-col items-center rounded-[10px] gap-4 p-6 w-[250px]' onClick={() => setId(props.element.id)}>
      <object data={getURL(props.element.poster_path)} type="image/jpg" className={`w-[100%] h-[80%] object-contain rounded-[10px]`}>
        <img src={img_default} className={props.isDark && 'filterColors'}/>
      </object>
      
      <div className='px-3 w-full'>
        <h4 className={props.isDark ? styles.heading4 : styles.heading4_reverse}>
          {props.element.title}
        </h4>
        <p className={`${props.isDark ? styles.paragraph : styles.paragraph_reverse} mt-2`}>
          {props.element.release_date}
        </p>
      </div>

      
    </div>
    </section>
  )
}

export default Movie