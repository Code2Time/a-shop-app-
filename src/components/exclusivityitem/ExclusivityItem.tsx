import { GiCommercialAirplane } from 'react-icons/gi'
import'./ExclusivityItem.css'

function ExclusivityItem() {
  return (
    <div className=' ExclusivityItem-container col-span-12 md:col-span-4 text-center  border flex items-center justify-center gap-4'>
    <div className='Exclusivity-img'>
    <GiCommercialAirplane color='white' size={35} />
    </div>
    <div className='Exclusivity-info flex flex-col items-center justify-center'>
 <h1>lorem</h1>
 <p>Lorem ipsum dolor sit amet.</p>
    </div>
    </div>
  )
}

export default ExclusivityItem
