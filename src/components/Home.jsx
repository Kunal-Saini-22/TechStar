import React from 'react';
import vg from '../assets/second.webp';

import {
    AiFillGoogleCircle,
    AiFillAmazonCircle,
    AiFillYoutube,
    AiFillInstagram} from "react-icons/ai";

const Home = () => {
  return (
    <>
    <div className='home' id='home'>
        <main>
            <h1>TechyStar</h1>
            <p>Solutions to all your problems.</p>
        </main>
    </div>

    <div className='home2'>
        <img src={vg} alt="Graphics" />
        <div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Quas temporibus voluptas sint, at hic cumque asperiores nobis iusto,
            alias quos incidunt ducimus veritatis natus consectetur dolorem neque 
            soluta nulla repudiandae.
            </p>
        </div>
    </div>

    <div className="home3" id='about'>
        <div>
            <h1>About Us</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem deserunt aspernatur voluptatum ipsum porro expedita quis, alias temporibus pariatur enim laboriosam voluptas quisquam vitae adipisci sequi deleniti? Nam, vero tempore. Ullam, doloremque. Deleniti quas exercitationem magnam inventore ullam ab aperiam culpa omnis, temporibus sunt delectus ipsa dolorum doloremque vero perferendis.</p>
        </div>
    </div>

    <div className="home4" id='brands'>
        <div>
            <h1>Brands</h1>
            <article>

                <div style={{animationDelay: "0.3s"}}>
                    <AiFillGoogleCircle/>
                    <p>Google</p>  
                </div>

                <div style={{animationDelay: "0.5s"}}>
                    <AiFillAmazonCircle/>
                    <p>Amazon</p>  
                </div>

                <div style={{animationDelay: "0.7s"}}>
                    <AiFillYoutube/>
                    <p>Youtube</p>  
                </div>

                <div style={{animationDelay: "1s"}}>
                    <AiFillInstagram/>
                    <p>Instagram</p>  
                </div>

            </article>
        </div>
    </div>
    </>
  );
}

export default Home;