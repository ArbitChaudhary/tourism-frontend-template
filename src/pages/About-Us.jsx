import "./../assets/styles/styles.css"
import { MdPerson, MdLocationOn, MdEdit, MdOutlineStarBorder  } from "react-icons/md";
import { IoDiamondOutline } from "react-icons/io5";
import { FaFacebookF, FaInstagramSquare, FaTwitter  } from "react-icons/fa";



const AboutUs = () => {
  return (
    <div className="container">
      <div className="about-us-box">
        <h1>About Us</h1>
        <div className="about-us-text">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio,
            inventore! Iure sint ipsum illum! Minima perferendis est officiis
            voluptatibus quo labore, culpa iusto eius neque fugiat incidunt ipsa
            ratione, maxime sed soluta quibusdam corporis. Nam ab maiores
            pariatur molestias necessitatibus. Sequi, velit! Impedit quod
            mollitia neque culpa facere similique? Dolorum adipisci expedita
            officia mollitia exercitationem animi. Perferendis non voluptatum
            eos quisquam, magnam labore consequatur dolorem praesentium iusto
            aperiam fugit facilis adipisci, illum, unde fuga quam blanditiis
            debitis saepe quae suscipit. Voluptatibus nesciunt ut facilis, esse
            at architecto veniam incidunt omnis labore dignissimos neque
            voluptates aut maxime modi unde doloremque tempora deleniti,
            blanditiis, non illo vel fuga. Adipisci quia libero praesentium ab
            rerum sint culpa et accusamus velit, hic numquam error nihil alias
            molestiae, consequatur natus magnam iure! Dolor quis eaque
            dignissimos architecto repellendus voluptatem tempora, provident est
            animi molestiae delectus, consectetur expedita accusamus esse modi
            dolorum ad nemo sunt dolores quia tenetur, pariatur cum et ex! Harum
            provident pariatur cupiditate dolor sed. Dolorem maxime iste
            assumenda eius culpa dolor, voluptates in voluptatibus illo, quam ab
            rerum. Recusandae necessitatibus perspiciatis quia saepe a.
            Repudiandae, quo. Facere consequuntur saepe temporibus fugiat, esse
            in magni doloribus iure eius? Maiores error at delectus expedita.
          </p>
        </div>
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
        <div className="team-members">
            <div className="team-members-heading-text">
                <span>Meet</span><b> with our amazing</b>
                <span> team members</span>
            </div>
            <div className="team-member-list">
                <div className="team-member">
                    <div className="team-member-img">
                        <img src="https://wallpapers.com/images/hd/professional-profile-pictures-2880-x-1920-7jvygpai7v9zkg2j.jpg" alt="" />
                    </div>
                    <span className="member-name">Arbit Chaudhary </span>
                    <span className="member-post">CEO</span>
                    <div className="member-social-profile">
                        <FaFacebookF />
                        <FaInstagramSquare />
                        <FaTwitter />
                    </div>
                </div>
                <div className="team-member">
                    <div className="team-member-img">
                        <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGZvcm1hbCUyMG1hbnxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                    </div>
                    <span className="member-name">Arbit Chaudhary </span>
                    <span className="member-post">MD</span>
                    <div className="member-social-profile">
                        <FaFacebookF />
                        <FaInstagramSquare />
                        <FaTwitter />
                    </div>
                </div>
                <div className="team-member">
                    <div className="team-member-img">
                        <img src="https://wallpapers.com/images/hd/professional-profile-pictures-1427-x-1920-txfewtw6mcg0y6hk.jpg" alt="" />
                    </div>
                    <span className="member-name">Arbit Chaudhary </span>
                    <span className="member-post">Guide Agent</span>
                    <div className="member-social-profile">
                        <FaFacebookF />
                        <FaInstagramSquare />
                        <FaTwitter />
                    </div>
                </div>
                <div className="team-member">
                    <div className="team-member-img">
                        <img src="https://png.pngtree.com/thumb_back/fh260/background/20230610/pngtree-man-in-glasses-posing-in-front-of-a-dark-background-image_2904372.jpg" alt="" />
                    </div>
                    <span className="member-name">Arbit Chaudhary </span>
                    <span className="member-post">Guide Agent</span>
                    <div className="member-social-profile">
                        <FaFacebookF />
                        <FaInstagramSquare />
                        <FaTwitter />
                    </div>
                </div>
                <div className="team-member">
                    <div className="team-member-img">
                        <img src="https://img.freepik.com/free-photo/portrait-optimistic-businessman-formalwear_1262-3600.jpg?size=626&ext=jpg&ga=GA1.1.1269040533.1710288000&semt=ais" alt="" />
                    </div>
                    <span className="member-name">Arbit Chaudhary </span>
                    <span className="member-post">CEO</span>
                    <div className="member-social-profile">
                        <FaFacebookF />
                        <FaInstagramSquare />
                        <FaTwitter />
                    </div>
                </div>
            </div>
        </div>
        <form className="subscribe-box">
          <div className="subscribe-box-head">
            <b>Subscribe to </b> <span>the Traveller</span>
          </div>
          <input type="text" placeholder="Your Email" />
          <button className="button-box subscribe-box">Subscribe</button>
        </form>
        <div className="testimonials">
          <h1>What users say about us?</h1>
          <div className="testimonial">
            <div className="testimonial-img">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4UX45EyclgBfiBzu2AluE5sB51oL4Z9r1Pw&usqp=CAU" alt="" />
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis id molestias velit possimus amet quasi illo ex explicabo repellat dolores.
            </p>
            <div className="reviewer-name">User VOID</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
