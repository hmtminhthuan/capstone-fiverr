import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { history } from '../..'
import { getArrJobByNameApi } from '../../redux/reducers/jobReducer';

const Home = () => {
  const [keywork, setKeywork] = useState("");
  const handleChange=(e)=>{
    const {value}=e.target
    setKeywork(value)
  }
  const dispatch = useDispatch();

  useEffect(() => {
    const actionAsync = getArrJobByNameApi(keywork);
    dispatch(actionAsync);
  }, [keywork])
  useEffect(() => {
    window.addEventListener('scroll', isSticky);
   
    return () => {
        window.removeEventListener('scroll', isSticky);
    };
});
const isSticky = (e) => {
    const header = document.querySelector('.header-section');
    const scrollTop = window.scrollY;
    scrollTop >= 50 ? header.classList.add('is-sticky') : header.classList.remove('is-sticky');
    scrollTop >= 100 ? header.classList.add('is-sticky1') : header.classList.remove('is-sticky1');

};
  useEffect(() => {


    const arrowBtnLeft = document.querySelector(".btn-arrow-left");
    const arrowBtnRight = document.querySelector(".btn-arrow-right");

    const slides = document.querySelectorAll(".slide");
    const dotsContainer = document.querySelector(".dots_service");

    let curSlide = 0;

    // functions
    const goToSlide = (slide) => {
      slides.forEach((s, i) => {
        s.style.transform = `translateX(${100 * (i - slide)}%)`;
      });
    };

    const nextSlide = function () {
      curSlide === slides.length - 1 ? (curSlide = 0) : curSlide++;
      goToSlide(curSlide);
      activateDot(curSlide);
    };

    const prevSlide = function () {
      curSlide === 0 ? (curSlide = slides.length - 1) : curSlide--;
      goToSlide(curSlide);
      activateDot(curSlide);
    };

    const createDots = () => {
      slides.forEach((_, i) =>
        dotsContainer.insertAdjacentHTML(
          "beforeend",
          `<button class='dot_service' data-slide='${i}'></button>`
        )
      );
    };

    const activateDot = (slide) => {
      document
        .querySelectorAll(".dot_service")
        .forEach((dot) => dot.classList.remove("dot_service--active"));
      document
        .querySelectorAll(`.dot_service[data-slide="${slide}"]`)
        .forEach((dot) => dot.classList.add("dot_service--active"));
    };

    // inital
    const init = () => {
      goToSlide(0);
      createDots();
      activateDot(0);
    };
    init();

    // event listeners
    arrowBtnLeft.addEventListener("click", prevSlide);
    arrowBtnRight.addEventListener("click", nextSlide);

    dotsContainer.addEventListener("click", function (e) {
      // if needed to work only on dots and not on dot container
      if (e.target.classList.contains("dot_service")) {
        const { slide } = e.target.dataset;
        goToSlide(slide);
        activateDot(slide);
      }
    });
  })
  return (
    <>
      <div className='home d-flex align-items-center'>
        <div className='container '>
          <div className='content'>
            <h3>Find the perfect <span>freelance</span> services for your business</h3>
            <form className="d-flex me-auto " role="search">
              <input  type='text' onChange={handleChange}  className="inputSearchCarousel" placeholder="☌ Try building mobile app " aria-label="Search" />
              <NavLink className='' to={`/joblist/${keywork}`}>
              <button className="btn w-100 h-100  btnSearchCarousel"  type="submit">Search</button>
              
              </NavLink>
            </form>
            <div className='popular'>
              <span>Popular:</span>
              <a href='#'>Website design</a>
              <a href='#'>WordPress</a>
              <a href='#'>Logo Design</a>
              <a href='#'>Video Editing</a>
            </div>
          </div>
        </div>
      </div>

      <div className='home_trusted' >
        <div className='trusted  d-flex justify-content-between align-items-center'>
          <div><p>Trusted by:</p></div>
          <div><img src='./img/fb.png' /></div>
          <div><img src='./img/google.png' /></div>
          <div><img src='./img/netflix.png' /></div>
          <div><img src='./img/pandg.png' /></div>
          <div><img src='./img/paypal.png' /></div>
        </div>
      </div>

      <div className='service mt-5'>
        <div className='container'>
        <h3 className='titleService'> Popular professional services</h3>

          <div class="carousel">
            <button class="btn-arrow btn-arrow-left">
              <i class="fa fa-arrow-left"></i>
            </button>
            <button class="btn-arrow btn-arrow-right">
              <i class="fa fa-arrow-right"></i>
            </button>
            <div class="inner">
              <ul class="container">
                <li class="slide slide-1">
                  <div className='item_service position-relative'>
                    <div className='img'>
                      <img src='./img/service_1.png' />
                    </div>
                    <div className='title_service position-absolute'>
                      <p>Build your bran</p>
                      <h3>Logo Design</h3>

                    </div>
                  </div>

                  <div className='item_service position-relative'>
                  <div className='img'>
                    <img src='./img/service_2.png' />
                  </div>
                  <div className='title_service position-absolute'>
                    <p>Color your dreams</p>
                    <h3>Illustration</h3>

                  </div>
                </div>
                <div className='item_service position-relative'>
                <div className='img'>
                  <img src='./img/service_3.png' />
                </div>
                <div className='title_service position-absolute'>
                  <p>Share your message</p>
                  <h3>Voice Over</h3>

                </div>
              </div>
              <div className='item_service position-relative'>
              <div className='img'>
                <img src='./img/service_4.png' />
              </div>
              <div className='title_service position-absolute'>
                <p>Engageyour audience</p>
                <h3>Video Explainer</h3>

              </div>
            </div>
             <div className='item_service position-relative'>
                    <div className='img'>
                      <img src='./img/service_5.png' />
                    </div>
                    <div className='title_service position-absolute'>
                      <p>Reach more customers</p>
                      <h3>Social Media</h3>

                    </div>
                  </div>
                </li>
                <li class="slide slide-2">
                  <div className='item_service position-relative'>
                    <div className='img'>
                      <img src='./img/service_6.png' />
                    </div>
                    <div className='title_service position-absolute'>
                      <p>Build your bran</p>
                      <h3>Logo Design</h3>

                    </div>
                  </div>

                  <div className='item_service position-relative'>
                  <div className='img'>
                    <img src='./img/service_7.png' />
                  </div>
                  <div className='title_service position-absolute'>
                    <p>Build your bran</p>
                    <h3>Logo Design</h3>

                  </div>
                </div>
                <div className='item_service position-relative'>
                <div className='img'>
                  <img src='./img/service_8.png' />
                </div>
                <div className='title_service position-absolute'>
                  <p>Build your bran</p>
                  <h3>Logo Design</h3>

                </div>
              </div>
              <div className='item_service position-relative'>
              <div className='img'>
                <img src='./img/service_9.png' />
              </div>
              <div className='title_service position-absolute'>
                <p>Build your bran</p>
                <h3>Logo Design</h3>

              </div>
            </div>
             <div className='item_service position-relative'>
                    <div className='img'>
                      <img src='./img/service_10.png' />
                    </div>
                    <div className='title_service position-absolute'>
                      <p>Build your bran</p>
                      <h3>Logo Design</h3>

                    </div>
                  </div>
                </li>

              </ul>
            </div>
            <div class="dots_service"></div>
          </div>
        </div>
      </div>

      <div className='intro'>
      <div className='container'>
      <div className='content d-flex'>
      <div className='contentLeft'>
      <div className='text'>
      <h3>A whole world of freelance talent at your fingertips</h3>
      <div className="">
      <h5><i class="fa fa-check-circle me-1"></i>The best for every budget</h5>
      <p>Find high-quality services at every price point. No hourly rates, just project-based pricing.</p>
      </div>
      <div className="">
      <h5><i class="fa fa-check-circle me-1"></i>Quality work done quickly</h5>
      <p>Find the right freelancer to begin working on your project within minutes.</p>
      </div>
      <div className="">
      <h5><i class="fa fa-check-circle me-1"></i>Protected payments, every time</h5>
      <p>Always know what you'll pay upfront. Your payment isn't released until you approve the work.</p>
      </div>
      <div className="">
      <h5><i class="fa fa-check-circle me-1"></i>24/7 support</h5>
      <p>Questions? Our round-the-clock support team is available to help anytime, anywhere.</p>
      </div>
      </div>
      </div>
      <div className='contentRight' >
      <video controls poster='./img/video_home.png' >
      <source src='https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/vmvv3czyk2ifedefkau7'  ></source>
      </video>

      </div>
      </div>
      </div>
      </div>
      <div className='categories'>
      <div className='container'>
      <h2>Explore the marketplace</h2>
      <div className='content row'>
      <div className='col-lg-3 item col-md-4 col-6' >
      <img src='https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/graphics-design.d32a2f8.svg'/>
      <p>Graphics & Design</p>
      </div>
      <div className='col-lg-3 item col-md-4 col-6 ' >
      <img src='https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/online-marketing.74e221b.svg'/>
      <p>Digital Marketing</p>
      </div>
      <div className='col-lg-3 item col-md-4 col-6' >
      <img src='https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/writing-translation.32ebe2e.svg'/>
      <p>Writing & Translation</p>
      </div>
      <div className='col-lg-3 item col-md-4 col-6' >
      <img src='https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/writing-translation.32ebe2e.svg'/>
      <p>Video & Animation</p>
      </div>
      <div className='col-lg-3 item col-md-4 col-6' >
      <img src='https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/music-audio.320af20.svg'/>
      <p>Music & Audio</p>
      </div>
      <div className='col-lg-3 item col-md-4 col-6' >
      <img src='https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/programming.9362366.svg'/>
      <p>Programming & Tech</p>
      </div>
      <div className='col-lg-3 item col-md-4 col-6' >
      <img src='https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/business.bbdf319.svg '/>
      <p>Business</p>
      </div>
      <div className='col-lg-3 item col-md-4 col-6' >
      <img src='https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/lifestyle.745b575.svg'/>
      <p>Lifestyle</p>
      </div>
      <div className='col-lg-3 item col-md-4 col-6' >
      <img src='https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/data.718910f.svg'/>
      <p>Data</p>
      </div>
      <div className='col-lg-3 item col-md-4 col-6' >
      <img src='https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/photography.01cf943.svg'/>
      <p>Photography</p>
      </div>
      </div>
      </div>
     
      </div>  
      
    </>

  )
}

export default Home
