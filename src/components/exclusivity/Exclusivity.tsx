import ExclusivityItem from '../exclusivityitem/ExclusivityItem'
import './Exclusivity.css'

function Exclusivity() {
  return (
    <div className='grid grid-cols-12 my-32 border h-[300px]'>
 <ExclusivityItem />
 <ExclusivityItem />
 <ExclusivityItem />
    </div>
  )
}

export default Exclusivity
