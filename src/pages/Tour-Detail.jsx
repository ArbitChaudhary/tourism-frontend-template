import React, { useState } from 'react'
import "./../assets/styles/styles.css"
import DestinationInformation from './page-components/Destination-Information'
import { IoTicketSharp } from "react-icons/io5";
import { GrMailOption } from "react-icons/gr";
import { MdPhoneEnabled, MdDateRange, MdPersonOutline   } from "react-icons/md";
import TourPlan from './page-components/Tour-Plan';
import TourLocation from './page-components/Tour-Location';
import DestinationGallery from './page-components/Destination-Gallery';


const TourPreview = () => {
    const [selectedIndex, setSelectedIndex] = useState(0)
    const titles = ['Information', 'Tour Plan', 'Location', 'Gallery', 'Review']

    const handleOnClick = (index) =>{
        setSelectedIndex(index)
    }
  return (
    <div className='destination-preview'>
        <div className="destination-preview-top-box">
            <div className='destination-preview-top-box-img'>
                <img src="https://img3.wallspic.com/crops/9/2/9/8/2/128929/128929-water-body_of_water-water_resources-watercourse-nature-3840x2160.jpg" alt="" />
            </div>
            <div className="destination-preview-top-box-text">
                <span>$1000 /person</span>
                <span>Thailand</span>
            </div>
        </div>
        {/* start of destination details box */}
        <div className='destination-preview-box'>
            <div className="destination-preview-left-box">
                <div className="details-titles">
                    {
                        titles.map((title, index) =>(
                            <div key={index} onClick={()=> handleOnClick(index)} className={selectedIndex === index ? 'title selected' : 'title'} >
                                {title}
                            </div>
                        ))
                    }
                </div>
                <div className='destination-preview-details'>
                {selectedIndex=== 0 && (<DestinationInformation />)}
                {selectedIndex=== 1 && (<TourPlan />)}
                {selectedIndex=== 2 && (<TourLocation />)}
                {selectedIndex=== 3 && (<DestinationGallery />)}


                </div>
            </div>
            <div className="book-form-box">
                <div className='book-form-title'>Book this tour</div>
                <form className='book-form'>
                    <div className='book-form-list'>
                        <MdPersonOutline />
                        <input type="text" placeholder='Name*'/>
                    </div>
                    <div className='book-form-list'>
                        <GrMailOption />
                        <input type="email" placeholder='Email*'/>
                    </div>
                    <div className='book-form-list'>
                        <MdPhoneEnabled />
                        <input type="text" placeholder='Phone*' />
                    </div>
                    <div className='book-form-list'>
                        <MdDateRange />
                        <input type="date" />
                    </div>
                    <div className='book-form-list'>
                        <IoTicketSharp />
                        <input type="number" placeholder='Number of tickets' />
                    </div>
                    <button className='book-btn'>Book Now</button>
                </form>
            </div>
        </div>
        {/* end of destination detail box */}
    </div>
  )
}

export default TourPreview
