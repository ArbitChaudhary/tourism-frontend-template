import { Link } from "react-router-dom"
import "./../assets/styles/styles.css"

const DestinationList = () => {
  return (
    <div className="container">
        <div className="destination-list-box">
            <div className="destination-list-head">
                <b>Amazing </b> <span> Tours and Fun Adventures </span><b> Waiting For You</b>
            </div>
            <div className="destination-lists">
                    <Link to="/destination-preview">
                <div className="destination-list">
                    <div className="destination-list-img">
                        <img src="https://media.istockphoto.com/id/665139550/photo/morocco-sand-dunes-of-sahara-desert.jpg?s=612x612&w=0&k=20&c=lg53jUtnF9wvknqVpizoxGniEuwkchg0M_bJAMO50Xk=" alt="" />
                    </div>
                    <div className="destination-list-name">Sahara</div>
                </div>
                </Link>
                <div className="destination-list">
                    <div className="destination-list-img">
                        <img src="https://wallpapercave.com/wp/wp4075365.jpg" alt="" />
                    </div>
                    <div className="destination-list-name">Nepal</div>
                </div>
                <div className="destination-list">
                    <div className="destination-list-img">
                        <img src="https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?b=1&s=612x612&w=0&k=20&c=3PEobOthDnogYweVRbKoRqf7-p1aB6UQvKXSyYdDmVY=" alt="" />
                    </div>
                    <div className="destination-list-name">India</div>
                </div>
                <div className="destination-list">
                    <div className="destination-list-img">
                        <img src="https://c4.wallpaperflare.com/wallpaper/203/302/519/morning-africa-national-park-arusha-national-park-wallpaper-preview.jpg" alt="" />
                    </div>
                    <div className="destination-list-name">Africa</div>
                </div>
                <div className="destination-list">
                    <div className="destination-list-img">
                        <img src="https://media.istockphoto.com/id/665139550/photo/morocco-sand-dunes-of-sahara-desert.jpg?s=612x612&w=0&k=20&c=lg53jUtnF9wvknqVpizoxGniEuwkchg0M_bJAMO50Xk=" alt="" />
                    </div>
                    <div className="destination-list-name">Sahara</div>
                </div>
                <div className="destination-list">
                    <div className="destination-list-img">
                        <img src="https://media.istockphoto.com/id/637696304/photo/patan.webp?b=1&s=170667a&w=0&k=20&c=48GHKif7NXo_4LjqQ_NHaXxjVRFpS4B5oJ9WbDCfXyU=" alt="" />
                    </div>
                    <div className="destination-list-name">Nepal</div>
                </div>
                <div className="destination-list">
                    <div className="destination-list-img">
                        <img src="https://media.istockphoto.com/id/535168027/photo/india-goa-palolem-beach.webp?b=1&s=170667a&w=0&k=20&c=Ma8WYe9NqMN9UiCYTAUby4lsZoaPjV5IqFWz0ZB7Lrs=" alt="" />
                    </div>
                    <div className="destination-list-name">India</div>
                </div>
                <div className="destination-list">
                    <div className="destination-list-img">
                        <img src="https://www.hdwallpapers.in/download/france-normal.jpg" alt="" />
                    </div>
                    <div className="destination-list-name">France</div>
                </div>
                <div className="destination-list">
                    <div className="destination-list-img">
                        <img src="https://www.hdwallpapers.in/download/africa_algeria_desert_dune_rock_sahara_sand_4k_hd_african-3840x2160.jpg" alt="" />
                    </div>
                    <div className="destination-list-name">Sahara</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DestinationList
