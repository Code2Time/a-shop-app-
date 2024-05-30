import { Link } from 'react-router-dom';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';



function Secondslideshow() {
    const slideimages = [
        { 
            url : 'https://mahdi-kheibari.github.io/e-shop-react-web-app/static/media/8SH567Z8-PINK.75d86b1417dbd58cea41.jpg',
            caption : 'Lorem ipsum dolor sit ... ',
            discount : '38'
        },
        { 
            url : 'https://mahdi-kheibari.github.io/e-shop-react-web-app/static/media/909001.ad7e1b7bf9014baddce5.jpg',
            caption : 'Lorem ipsum dolor sit ...',
            discount : '50'
        },
        { 
            url : 'https://mahdi-kheibari.github.io/e-shop-react-web-app/static/media/Callista_Extend.91bbec081673a4f0bf87.jpg',
            caption : 'Lorem ipsum dolor sit ...',
            discount : '77'
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
    <div className='slide-container col-span-12 md:col-span-4  overflow-hidden rounded-md  shadow-lg shadow-blue-three'>
      <Fade  {...properties} duration={3000}>
        {slideimages.map((image , index) =>(
            <div className='w-full  h-full'  key={index}>
                <div className='flex justify-center items-center w-full h-[500px]' style={{backgroundRepeat : 'no-repeat' ,backgroundAttachment : 'fixed' ,backgroundSize : 'cover',backgroundPosition : 'center' , backgroundImage : `url(${image.url})`}}>
                <h1 className='absolute top-1 head text-red-500' >Special discounts</h1>
                <h3 className='absolute bottom-10 bg-slate-100 p-2 rounded-md w-full text-center'>{image.caption}<span className='mx-3 text-xs p-2 w-1 h-1 rounded-full bg-red-700'>%{image.discount}</span></h3>
                <Link to='/' className='absolute bottom-0 p-2 bg-button dark:bg-button-two w-full text-center border-t-2 border-gray-800'>
                <button>See more...</button>
                </Link>
                </div>
            </div>
        ))}
      </Fade>
    </div>
  )
}

export default Secondslideshow
