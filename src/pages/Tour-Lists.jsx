import { useState } from "react";
import "./../assets/styles/styles.css";
import { MdAccessTimeFilled } from "react-icons/md";
import { MdPerson, MdLocationOn } from "react-icons/md";
import { Link } from "react-router-dom";

const TourLists = () => {

    const [activeIndex, setActiveIndex] = useState(0)
    const options = ['All', 'Trending', 'Popular']

    const handleClickOption = (index) =>{
        setActiveIndex(index)
    }
  return (
    <>
        <div className="tour-list-box">
            <div className="tour-list-banner">
                <div className="tour-list-banner-img" />
                <div className="search-box">
                    <input type="text" placeholder="Where to?" />
                    <select>
                        <option value="when">When</option>
                        <option value="jan">January</option>
                        <option value="feb">Febraury</option>
                        <option value="Mar">March</option>
                    </select>
                    <select>
                        <option value="when">Type </option>
                        <option value="jan">Religious</option>
                        <option value="feb">Beach</option>
                        <option value="Mar">Trekking</option>
                        <option value="Mar">City</option>
                        <option value="Mar">Adventure</option>
                    </select>                        
                    <button className="search-btn">Search</button>
                </div>
            </div>
        </div>
      <div className="container">
        <div className="options">
            {
                options.map((option, index) =>(
                    <div key={index}  onClick={()=> handleClickOption(index)} className={activeIndex === index ? 'option selected-option' : 'option'}>
                        {option}
                    </div>
                ))
            }
        </div>
        <div className=" tour-lists">
          <div className="trending-destination">
            <div className="trending-destination-image">
              <Link to="/tour-preview">
              <img
                src="https://www.indonesia.travel/content/dam/indtravelrevamp/home-revamp/bali-jack.jpg"
                alt=""
              />
              </Link>
            </div>
            <div className="trending-destination-title">
              <Link to="/tour-preview"><span className="destination-name">Thailand</span> </Link>
              <span className="destination-cost-total">
                <strike>$5000</strike>
              </span>
            </div>
            <div className="trending-destination-ratings">
              <span className="ratings">4/5 Superb</span>
              <span className="discounted-price">$2000</span>
            </div>
            <div className="trending-destination-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
              recusandae fuga iste. Alias, vel a!
            </div>
            <div className="trending-destination-bottom-contents">
              <div className="trending-destination-bottom-content">
                <MdAccessTimeFilled />
                <span>10 days</span>
              </div>

              <div className="trending-destination-bottom-content">
                <MdPerson />
                <span>10+</span>
              </div>
              <div className="trending-destination-bottom-content">
                <MdLocationOn />
                <span>Nepal</span>
              </div>
            </div>
          </div>
          <div className="trending-destination">
            <div className="trending-destination-image">
              <img
                src="https://www.indonesia.travel/content/dam/indtravelrevamp/home-revamp/bali-jack.jpg"
                alt=""
              />
            </div>
            <div className="trending-destination-title">
              <span className="destination-name">Thailand</span>
              <span className="destination-cost-total">$5000</span>
            </div>
            <div className="trending-destination-ratings">
              <span>Thailand</span>
              <span>$5000</span>
            </div>
            <div className="trending-destination-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
              recusandae fuga iste. Alias, vel a!
            </div>
            <div className="trending-destination-bottom-contents">
              <div className="trending-destination-bottom-content">
                <MdAccessTimeFilled />
                <span>10 days</span>
              </div>

              <div className="trending-destination-bottom-content">
                <MdPerson />
                {/* <span>10 days</span> */}
              </div>
              <div className="trending-destination-bottom-content">
                <MdLocationOn />
                <span>Nepal</span>
              </div>
            </div>
          </div>
          <div className="trending-destination">
            <div className="trending-destination-image">
              <img
                src="https://www.indonesia.travel/content/dam/indtravelrevamp/home-revamp/bali-jack.jpg"
                alt=""
              />
            </div>
            <div className="trending-destination-title">
              <span className="destination-name">Thailand</span>
              <span className="destination-cost-total">$5000</span>
            </div>
            <div className="trending-destination-ratings">
              <span className="destination-name">Thailand</span>
              <span>$5000</span>
            </div>
            <div className="trending-destination-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
              recusandae fuga iste. Alias, vel a!
            </div>
            <div className="trending-destination-bottom-contents">
              <div className="trending-destination-bottom-content">
                <MdAccessTimeFilled />
                <span>10 days</span>
              </div>

              <div className="trending-destination-bottom-content">
                <MdPerson />
                {/* <span>10 days</span> */}
              </div>
              <div className="trending-destination-bottom-content">
                <MdLocationOn />
                <span>Nepal</span>
              </div>
            </div>
          </div>
          <div className="trending-destination">
            <div className="trending-destination-image">
              <img
                src="https://www.indonesia.travel/content/dam/indtravelrevamp/home-revamp/bali-jack.jpg"
                alt=""
              />
            </div>
            <div className="trending-destination-title">
              <span className="destination-name">Thailand</span>
              <span className="destination-cost-total">$5000</span>
            </div>
            <div className="trending-destination-ratings">
              <span>Thailand</span>
              <span>$5000</span>
            </div>
            <div className="trending-destination-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
              recusandae fuga iste. Alias, vel a!
            </div>
            <div className="trending-destination-bottom-contents">
              <div className="trending-destination-bottom-content">
                <MdAccessTimeFilled />
                <span>10 days</span>
              </div>

              <div className="trending-destination-bottom-content">
                <MdPerson />
                {/* <span>10 days</span> */}
              </div>
              <div className="trending-destination-bottom-content">
                <MdLocationOn />
                <span>Nepal</span>
              </div>
            </div>
          </div>
          <div className="trending-destination">
            <div className="trending-destination-image">
              <img
                src="https://www.indonesia.travel/content/dam/indtravelrevamp/home-revamp/bali-jack.jpg"
                alt=""
              />
            </div>
            <div className="trending-destination-title">
              <span className="destination-name">Thailand</span>
              <span className="destination-cost-total">
                <strike>$5000</strike>
              </span>
            </div>
            <div className="trending-destination-ratings">
              <span className="ratings">4/5 Superb</span>
              <span className="discounted-price">$2000</span>
            </div>
            <div className="trending-destination-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
              recusandae fuga iste. Alias, vel a!
            </div>
            <div className="trending-destination-bottom-contents">
              <div className="trending-destination-bottom-content">
                <MdAccessTimeFilled />
                <span>10 days</span>
              </div>

              <div className="trending-destination-bottom-content">
                <MdPerson />
                <span>10+</span>
              </div>
              <div className="trending-destination-bottom-content">
                <MdLocationOn />
                <span>Nepal</span>
              </div>
            </div>
          </div>
          <div className="trending-destination">
            <div className="trending-destination-image">
              <img
                src="https://www.indonesia.travel/content/dam/indtravelrevamp/home-revamp/bali-jack.jpg"
                alt=""
              />
            </div>
            <div className="trending-destination-title">
              <span className="destination-name">Thailand</span>
              <span className="destination-cost-total">$5000</span>
            </div>
            <div className="trending-destination-ratings">
              <span>Thailand</span>
              <span>$5000</span>
            </div>
            <div className="trending-destination-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
              recusandae fuga iste. Alias, vel a!
            </div>
            <div className="trending-destination-bottom-contents">
              <div className="trending-destination-bottom-content">
                <MdAccessTimeFilled />
                <span>10 days</span>
              </div>

              <div className="trending-destination-bottom-content">
                <MdPerson />
                {/* <span>10 days</span> */}
              </div>
              <div className="trending-destination-bottom-content">
                <MdLocationOn />
                <span>Nepal</span>
              </div>
            </div>
          </div>
          <div className="trending-destination">
            <div className="trending-destination-image">
              <img
                src="https://www.indonesia.travel/content/dam/indtravelrevamp/home-revamp/bali-jack.jpg"
                alt=""
              />
            </div>
            <div className="trending-destination-title">
              <span className="destination-name">Thailand</span>
              <span className="destination-cost-total">$5000</span>
            </div>
            <div className="trending-destination-ratings">
              <span className="destination-name">Thailand</span>
              <span>$5000</span>
            </div>
            <div className="trending-destination-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
              recusandae fuga iste. Alias, vel a!
            </div>
            <div className="trending-destination-bottom-contents">
              <div className="trending-destination-bottom-content">
                <MdAccessTimeFilled />
                <span>10 days</span>
              </div>

              <div className="trending-destination-bottom-content">
                <MdPerson />
                {/* <span>10 days</span> */}
              </div>
              <div className="trending-destination-bottom-content">
                <MdLocationOn />
                <span>Nepal</span>
              </div>
            </div>
          </div>
          <div className="trending-destination">
            <div className="trending-destination-image">
              <img
                src="https://www.indonesia.travel/content/dam/indtravelrevamp/home-revamp/bali-jack.jpg"
                alt=""
              />
            </div>
            <div className="trending-destination-title">
              <span className="destination-name">Thailand</span>
              <span className="destination-cost-total">$5000</span>
            </div>
            <div className="trending-destination-ratings">
              <span>Thailand</span>
              <span>$5000</span>
            </div>
            <div className="trending-destination-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
              recusandae fuga iste. Alias, vel a!
            </div>
            <div className="trending-destination-bottom-contents">
              <div className="trending-destination-bottom-content">
                <MdAccessTimeFilled />
                <span>10 days</span>
              </div>

              <div className="trending-destination-bottom-content">
                <MdPerson />
                {/* <span>10 days</span> */}
              </div>
              <div className="trending-destination-bottom-content">
                <MdLocationOn />
                <span>Nepal</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TourLists;
