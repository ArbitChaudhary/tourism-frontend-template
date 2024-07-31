import React from 'react'
import { MdOutlineAccessTime, MdOutlinePeopleOutline, MdLocationOn, MdOutlineWbSunny  } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";



const DestinationInformation = () => {
  return (
    <div className='destination-information'>
      <div className='destination-information-title'>
        <h2>Thailand</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quas, 
          aperiam error suscipit dolore tempora blanditiis alias eveniet nostrum officia laborum tempore 
          possimus, minima omnis, excepturi sit ipsam. Sunt ad magnam iusto minima? Sit numquam neque at non nobis, 
          omnis dolores quam sequi recusandae minima veritatis est hic illo. Recusandae ex ipsum a dolore dolores 
          consequuntur quo voluptatibus, blanditiis iure reprehenderit, sit quibusdam. Assumenda, aspernatur. Dolorum,
           fugiat! Quo neque hic illum nulla, blanditiis mollitia maiores nisi quisquam, eos consectetur vel excepturi 
           atque numquam et debitis, ipsa eveniet deleniti placeat
           doloremque dolorem soluta tempore! Error assumenda rerum architecto unde, aliquid facere.</p>
      </div>
      <div className='destination-information-why'>
        <h4>Why To Visit</h4>
        <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled
           and demoralized by the charms pleasure of the moment, so blinded by desire, that they cannot foresee
            the pain and trouble that are bound to ensue and equal blame belongs those
           who fail their duty through weakness of will which the same saying through shrinking from toil and pain.
           </p>
           <div className="destination-information-why-texts">
            <li>Family Camping</li>
            <li>Fishing</li>
            <li>Trekking</li>
            <li>SPA & GYM</li>
            <li>Transportation</li>
            <li>Sea Adventure</li>
            <li>Fishing</li>
            <li>Trekking</li>
            <li>Fishing</li>
           </div>
      </div>
      <div className="destination-information-short-detail-box">
        <div className='destination-information-short-detail-box-list'>
          <MdOutlineAccessTime />
          <span>10 days</span>
        </div>
        <div className='destination-information-short-detail-box-list'>
          <MdOutlinePeopleOutline />
          <span>10+ Age</span>
        </div>
        <div className='destination-information-short-detail-box-list'>
          <MdLocationOn />
          <span>Thailand</span>
        </div>
        <div className='destination-information-short-detail-box-list'>
          <MdOutlineWbSunny />
          <span>Beach</span>
        </div>
      </div>
      <div className='destination-detail-list'>
        <div className="destination-detail">
          <span>Destination</span>
          <span>Thailand</span>
        </div>
        <div className="destination-detail">
          <span>Departure</span>
          <span>	Main Street, Taiwan</span>
        </div>
         <div className="destination-detail">
          <span>Dress Code</span>
         <span>	Casual, comfortable athletic clothing, hat and light jacket.</span>
        </div>
        <div className="destination-detail">
          <span>included</span>
          <div className='included'>
            <div className='included-item'>
              <TiTick />
              <span>Lorem, ipsum dolor.</span>
            </div>
            <div className='included-item'>
              <TiTick />
              <span>Lorem, ipsum dolor.</span>
            </div>
            <div className='included-item'>
              <TiTick />
              <span>Lorem, dolor.</span>
            </div>
            <div className='included-item'>
              <TiTick />
              <span>Lorem, ipsum dolor.</span>
            </div>
          
          </div>
        </div>
        <div className="destination-detail">
          <span>not Included</span>
          <div className='included'>
            <div className='included-item'>
              <RxCross2 />
              <span>Lorem, ipsum dolor.</span>
            </div>
            <div className='included-item'>
              <RxCross2 />
              <span>Lorem, ipsum dolor.</span>
            </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default DestinationInformation
