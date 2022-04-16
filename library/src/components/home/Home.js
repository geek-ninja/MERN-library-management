import AdminForm from '../admin/AdminForm'
import LibrarianForm from '../librarian/LibrarianForm'
import StudentForm from '../student/StudentForm'
import './home.css'
import banner from '../../IMG/banner.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react'
import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@material-ui/core'
import { loginStudent } from '../../Action/studentAction'
import { loginLibrarian } from '../../Action/librarianAction'
import { loginAdmin } from '../../Action/adminAction'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import jwt_decode from "jwt-decode";

function Home() {

  AOS.init();
  AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
    
  
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  
  });

  const [user,setUser] = useState({name:'',password:''})
  const [studentId,setStudentId] = useState('')
  const [userType,setUserType] = useState('')
  const authType = ['admin','librarian','student']
  
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const auth = useSelector((state) => state.auth)

  useEffect(() => {

    const token = JSON.parse(localStorage.getItem('token'))
    let userAuth = {}
    if(token !== null ){
      userAuth = jwt_decode(token)
    }

    if((auth.length > 0 && auth[0].data.authType === 'admin') || (userAuth.login && userAuth.data.authType === 'admin')){
      navigate('/admin')
    }
    if((auth.length > 0 && auth[0].data.authType === 'librarian') || (userAuth.login && userAuth.data.authType === 'librarian')){
      navigate('/librarian')
    }
    if((auth.length > 0 && auth[0].data.authType === 'student') || (userAuth.login && userAuth.data.authType === 'student')){
      navigate('/student')
    } 
  },[auth,userType])


  const clear = () => {
    setUser({name : '',password: ''})
    setUserType('')
    setStudentId('')
  }

  const login = (e) => {
    e.preventDefault()
    if(userType === ''){
      window.alert('select the user !')
    }
    if(userType === 'admin'){
      dispatch(loginAdmin(user))
    }
    if(userType === 'librarian'){
      dispatch(loginLibrarian(user))
    }
    if(userType === 'student'){
      user.roll = studentId
      dispatch(loginStudent(user))
    }
    clear()
  }

  return (
    <div className = 'home'>
      <div className='home_about'>
        <div className='home_desc'>
          <div className='home_desc_logo'>

          </div>
          <div className='home_desc_text'>
            <h1 data-aos = "fade-right" data-aos-duration="1000" data-aos-delay = "0">LIBRARY</h1>
            <h2 data-aos = "fade-right" data-aos-duration="1000" data-aos-delay = "800">EXPLORE BEYOND..!!</h2>
          </div>
        </div>
        <div className='home_users'>
          <form onSubmit={login}>
          <FormControl className='librarian_allot_formControl'>
            <InputLabel id='student-select' >who's logging ?</InputLabel>
              <Select labelId='student-select' variant= "standard" color="primary" onChange={(e) => setUserType(e.target.value)} value = {userType}>
                  {
                      authType.map((auth) => (
                          <MenuItem value = {auth}>{auth}</MenuItem>
                      ))
                  }
              </Select>
            </FormControl>
            <TextField type = "text" required value={user.name} onChange = {(e) => setUser({...user,name:e.target.value})} label="Name"/>
            {
              userType === 'student'? <TextField type = "text" required value={studentId} onChange = {(e) => setStudentId(e.target.value)} label="Roll"/>:''
            }
            <TextField type = "password" required value={user.password} onChange={(e) => setUser({...user,password:e.target.value})} label="Password"/>
            <Button type = "submit" variant="contained" color="primary">login</Button>
          </form>
          {/* <AdminForm/> */}
          {/* <LibrarianForm/>
          <StudentForm/> */}
        </div>  
      </div>
      <div className='home_banner'>
        <img src={banner} alt = 'banner'/>
      </div>
    </div>
  )
}

export default Home