import React from 'react'
import "./../assets/styles/styles.css"
import { FaFacebookF, FaTwitter , FaInstagramSquare, FaLinkedin  } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='footer'>
        <div className='container footer-contents'>
            <div className='footer-left'>
                <div className='footer-logo'>Traveller</div>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel aliquam explicabo rerum totam, veritatis nostrum iure doloremque excepturi nobis reiciendis.</p>
                <span>Pokhara 420, Nepal, +977-9898989898, chaudharyarbit45s@gmail.com</span>
            </div>
            <div className='footer-left-middle'>
                <h1>Links</h1>
                <div className='footer-links'>
                    <ul>
                        <li>Home</li>
                        <li>Contact</li>
                        <li>About</li>
                        <li>FAQ</li>
                        <li>Blog</li>
                    </ul>
                </div>
            </div>
            <div className='footer-right-middle'>
                <h1>Social Profiles</h1>
                <div className='footer-social-media'>
                    <FaFacebookF />
                    <FaInstagramSquare />
                    <FaLinkedin />
                    <FaTwitter />
                </div>
                <span>Connect with us in our Social Media to get the latest updates.</span>
            </div>
            <div className='footer-right'>
                <h1>Instagram Gallery</h1>
                <div className='footer-gallery'>
                    <img src="https://www.shutterstock.com/image-photo/untouched-tropical-beach-sri-lanka-600nw-109674992.jpg" alt="" />
                    <img src="https://www.shutterstock.com/image-photo/untouched-tropical-beach-sri-lanka-600nw-109674992.jpg" alt="" />
                    <img src="https://www.shutterstock.com/image-photo/untouched-tropical-beach-sri-lanka-600nw-109674992.jpg" alt="" />
                    <img src="https://www.shutterstock.com/image-photo/untouched-tropical-beach-sri-lanka-600nw-109674992.jpg" alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
