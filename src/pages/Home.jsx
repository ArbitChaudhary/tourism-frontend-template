import React from "react";
import Banner from "../components/Banner";
import Search from "../components/Search";
import { MdAccessTimeFilled } from "react-icons/md";
import { MdPerson, MdLocationOn, MdEdit, MdOutlineStarBorder  } from "react-icons/md";
import { IoDiamondOutline } from "react-icons/io5";


const Home = () => {
  return (
    <div>
      <Banner />
      <Search />

      <div className="container">
        <div className="recommended-destinations">
          <div className="recommended-destination">
            <img src="https://wallpapercave.com/wp/wp9267481.jpg" alt="" />
            <div className="recommended-destination-text">
              <div>
                <span>Festival in November</span>
                <span>Italy</span>
              </div>
            </div>
          </div>
          <div className="recommended-destination">
            <img
              src="https://media.cntraveler.com/photos/55b8fdfd7772ff921f964fbd/master/pass/Nepal-Kathmandu-Valley-cr-getty.jpg"
              alt=""
            />
            <div className="recommended-destination-text">
              <div>
                <span>Festival in November</span>
                <span>Nepal</span>
              </div>
            </div>
          </div>
          <div className="recommended-destination">
            <img
              src="https://e0.pxfuel.com/wallpapers/958/573/desktop-wallpaper-all-nepal-nepal-kathmandu-tourist-places.jpg"
              alt=""
            />
            <div className="recommended-destination-text">
              <div>
                <span>Festival in November</span>
                <span>Nepal</span>
              </div>
            </div>
          </div>
          <div className="recommended-destination">
            <img
              src="https://www.bambootravel.co.uk/files/img_cache/43389/1400__1502382620_Shanghai-YuyuanGardens.jpg?1502382631"
              alt=""
            />
            <div className="recommended-destination-text">
              <div>
                <span>Festival in November</span>
                <span>Nepal</span>
              </div>
            </div>
          </div>
          <div className="recommended-destination">
            <img src="https://wallpapercave.com/wp/wp9267481.jpg" alt="" />
            <div className="recommended-destination-text">
              <div>
                <span>Festival in November</span>
                <span>China</span>
              </div>
            </div>
          </div>
          <div className="recommended-destination">
            <img src="https://wallpapercave.com/wp/wp9267481.jpg" alt="" />
            <div className="recommended-destination-text">
              <div>
                <span>Festival in November</span>
                <span>Thailand</span>
              </div>
            </div>
          </div>
        </div>
        {/* start of trending and best selling */}
        <div className="trending-destination-box">
          <div className="trending-destination-head">
            <span>Trending</span>
            <b> Best Selling Tours and</b>
            <span> Fun Destinations</span>
          </div>
          <div className="sub-text">
            Lorem laperiam saepe esse id nulla enim fugit consectetur quasi eius
            at excepturi totam consequuntur doloremque commodi e?
          </div>
        </div>
        <div className="trending-destinations">
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
              <img src="https://www.indonesia.travel/content/dam/indtravelrevamp/home-revamp/bali-jack.jpg" alt="" />
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
        {/* end of trending and best selling */}

        {/* start of subscribe box */}
        <form className="subscribe-box">
          <div className="subscribe-box-head">
            <b>Subscribe to </b> <span>the Traveller</span>
          </div>
          <input type="text" placeholder="Your Email" />
          <button className="button-box subscribe-box">Subscribe</button>
        </form>
        {/* end of subscribe box */}
        {/* start of best deals */}
        <div className="best-deal-box">
          <div className="trending-destination-box">
            <div className="trending-destination-head">
              <span>Special</span>
              <b> Deals and last Minute</b>
              <span> Amazing Offers</span>
            </div>
            <div className="sub-text">
              Lorem laperiam saepe esse id nulla enim fugit consectetur quasi
              eius at excepturi totam consequuntur doloremque commodi e?
            </div>
          </div>

          <div className="best-deal-destinations">
            <div className="best-deal-destination">
              <div className="best-deal-destination-image">
                <img  src="https://c0.wallpaperflare.com/preview/412/1015/756/nepal-kathmandu-swayambhu-maha-chaitya.jpg" alt="" />
              </div>
              <div className="best-deal-destination-content">
                <div className="best-deal-destination-title">
                  <span>Kathmandu</span>
                  <span>$500</span>
                </div>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et
                  temporibus velit est vitae autem quisquam quia asperiores
                  voluptate hic impedit.
                </p>
              </div>
            </div>
            <div className="best-deal-destination">
            <div className="offers">
                Best Deal
              </div>

              <div className="best-deal-destination-image">
                <img src="https://images7.alphacoders.com/898/898714.jpg" alt=""/>
              </div>
              <div className="best-deal-destination-content">
                <div className="best-deal-destination-title">
                  <span>China</span>
                  <span>$500</span>
                </div>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et
                  temporibus velit est vitae autem quisquam quia asperiores
                  voluptate hic impedit.
                </p>
              </div>
            </div>
            <div className="best-deal-destination">
              <div className="best-deal-destination-image">
                <img src="https://media.istockphoto.com/id/1355995823/photo/luxor-temple-famous-landmark-of-egypt-first-pylon-view.jpg?s=612x612&w=0&k=20&c=pD6Zthl0Qibex5g4-uFgHHoqDQWy3vduDj-sI3Amtss=" alt=""/>
              </div>
              <div className="best-deal-destination-content">
                <div className="best-deal-destination-title">
                  <span>Egypt</span>
                  <span>$500</span>
                </div>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et
                  temporibus velit est vitae autem quisquam quia asperiores
                  voluptate hic impedit.
                </p>
              </div>
            </div>
            <div className="best-deal-destination">
              <div className="offers">
                Save 50%
              </div>
              <div className="best-deal-destination-image">
                <img src="https://c4.wallpaperflare.com/wallpaper/814/535/826/travel-japan-wallpaper-preview.jpg" alt=""/>
              </div>
              <div className="best-deal-destination-content">
                <div className="best-deal-destination-title">
                  <span>Japan</span>
                  <span>$500</span>
                </div>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et
                  temporibus velit est vitae autem quisquam quia asperiores
                  voluptate hic impedit.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* end of best deals */}
        {/* start of about company */}
        <div className="company-facilities">
          <div className="company-facility">
            <IoDiamondOutline />
            <span>Special Activities</span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ad nisi tempora rerum ea repellat.</p>
          </div>
          <div className="company-facility">
            <MdEdit />
            <span>Travel Arrangement</span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ad nisi tempora rerum ea repellat.</p>
          </div>
          <div className="company-facility">
            <MdOutlineStarBorder />
            <span>Your Private Guide</span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ad nisi tempora rerum ea repellat.</p>
          </div>
          <div className="company-facility">
            <MdLocationOn />
            <span>Location Manager</span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ad nisi tempora rerum ea repellat.</p>
          </div>
        </div>
        {/* end of about company */}
      </div>
    </div>
  );
};

export default Home;
