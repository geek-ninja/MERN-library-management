import AdminForm from '../admin/AdminForm'
import LibrarianForm from '../librarian/LibrarianForm'
import StudentForm from '../student/StudentForm'
import './home.css'
import banner from '../../IMG/banner.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';

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


  return (
    <div className = 'home'>
      <div className='home_about'>
        <div className='home_desc'>
          <div className='home_desc_logo'>
          <img src='https://d2908q01vomqb2.cloudfront.net/f1f836cb4ea6efb2a0b1b99f41ad8b103eff4b59/2021/11/11/ml-6271-image011.png' alt='logo'/>
          </div>
          <div className='home_desc_text'>
            <h1 data-aos = "fade-right" data-aos-duration="1000" data-aos-delay = "0">Q LIBRARY</h1>
            <h2 data-aos = "fade-right" data-aos-duration="1000" data-aos-delay = "1000">EXPLORE BEYOND..!!</h2>
          </div>
        </div>
        <div className='home_users'>
          <AdminForm/>
          <LibrarianForm/>
          <StudentForm/>
        </div>  
      </div>
      <div className='home_banner'>
        <img src={banner} alt = 'banner'/>
      </div>
    </div>
  )
}

export default Home