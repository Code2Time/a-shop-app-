import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';




function Firstslideshow() {

const slideimages = [
    { 
        url : 'https://mahdi-kheibari.github.io/e-shop-react-web-app/static/media/clothing.163765068e06a8f0d80d.jpg',
        
    },
    { 
        url : 'https://mahdi-kheibari.github.io/e-shop-react-web-app/static/media/gamer.bc2425877d2be137ebd3.jpg',
      
    },
    { 
        url : 'https://mahdi-kheibari.github.io/e-shop-react-web-app/static/media/electronic.abbf7126a3caf64c0047.jpg',
        
    },
  
]
const buttonStyle = {
    width: "30px",
    background: 'none',
    border: '0px',
    color: '#fff',
    magin: '20px'
};

const properties = {
    prevArrow: <button style={{ ...buttonStyle }}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5" />
  </svg>
  </button>,
    nextArrow: <button style={{ ...buttonStyle }}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
  </svg>
  </button>
}

  return (
   
    <div className='slide-container col-span-12 md:col-span-8  overflow-hidden rounded-md  shadow-lg shadow-blue-three'>
      <Fade  {...properties} duration={3000}>
        {slideimages.map((image , index) =>(
            <div className='w-full  h-full'  key={index}>
                <div className='flex justify-center items-center w-full h-[500px]' style={{backgroundSize : 'cover',backgroundPosition : 'center' , backgroundImage : `url(${image.url})`}}>
            
                </div>
            </div>
        ))}
      </Fade>
    </div>

  )
}

export default Firstslideshow
