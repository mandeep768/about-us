
import './App.css';
import Client from './photo/client1.png';
import Vid from './video/intro.webm';
function App() {
  return (
    <>
      <div className="banner">
        <video autoPlay loop id="background-video">
          <source src={Vid} type="video/mp4" />

        </video>
        <div className="content">
          <h1>About Us</h1>
          <p>Lorem ipsum</p>

        </div>
      </div>
      <section className="clients cid-qyvf5b5WEt" id="clients-2" data-rv-view="777">



        <div className="container mb-5">
          <div className="media-container-row">
            <div className="col-12 align-center">
              <h2 className="mbr-section-title pb-3 mbr-fonts-style display-2">
                Our Clients
               </h2>
              <h3 className="mbr-section-subtitle mbr-light mbr-fonts-style display-5">Thank you for choosing us!</h3>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="carousel slide" data-ride="carousel" role="listbox">
            <div className="carousel-inner" data-visible="5">





              <div className="carousel-item ">
                <div className="media-container-row">
                  <div className="col-md-12">
                    <div className="wrap-img ">
                      <img src={Client} className="img-responsive clients-img" media-simple="true" />
                    </div>
                  </div>
                </div>
              </div><div className="carousel-item ">
                <div className="media-container-row">
                  <div className="col-md-12">
                    <div className="wrap-img ">
                      <img src={Client} className="img-responsive clients-img" media-simple="true" />
                    </div>
                  </div>
                </div>
              </div><div className="carousel-item ">
                <div className="media-container-row">
                  <div className="col-md-12">
                    <div className="wrap-img ">
                      <img src={Client} className="img-responsive clients-img" media-simple="true" />
                    </div>
                  </div>
                </div>
              </div><div className="carousel-item ">
                <div className="media-container-row">
                  <div className="col-md-12">
                    <div className="wrap-img ">
                      <img src={Client} className="img-responsive clients-img" media-simple="true" />
                    </div>
                  </div>
                </div>
              </div><div className="carousel-item ">
                <div className="media-container-row">
                  <div className="col-md-12">
                    <div className="wrap-img ">
                      <img src={Client} className="img-responsive clients-img" media-simple="true" />
                    </div>
                  </div>
                </div>
              </div></div>
            <div className="carousel-controls">
              <a data-app-prevent-settings="" className="carousel-control carousel-control-prev" role="button" data-slide="prev">
                <span aria-hidden="true" className="mbri-left mbr-iconfont"></span>
                <span className="sr-only">Previous</span>
              </a>
              <a data-app-prevent-settings="" className="carousel-control carousel-control-next" role="button" data-slide="next">
                <span aria-hidden="true" className="mbri-right mbr-iconfont"></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="counter">
        <div className="container">
          <div className="counter__content">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="counter__item">
                  <div className="counter__item__text">
                    <img src="img/icons/ci-1.png" alt=""/>
                      <h2 className="counter_num">230</h2>
                      <p>Compled Projects</p>
</div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="counter__item second__item">
                    <div className="counter__item__text">
                      <img src="img/icons/ci-2.png" alt=""/>
                        <h2 className="counter_num">1068</h2>
                        <p>Happy clients</p>
</div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="counter__item third__item">
                      <div className="counter__item__text">
                        <img src="img/icons/ci-3.png" alt=""/>
                          <h2 className="counter_num">230</h2>
                          <p>Perspective clients</p>
</div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                      <div className="counter__item four__item">
                        <div className="counter__item__text">
                          <img src="img/icons/ci-4.png" alt=""/>
                            <h2 className="counter_num">230</h2>
                            <p>Compled Projects</p>
</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
</section>
              <section className="team spad set-bg">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="section-title team__title">
                        <span>Nice to meet</span>
                        <h2>OUR Team</h2>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-6 p-0">
                      <div className="team__item set-bg" 
                      >
                        <div className="team__item__text">
                          <h4>AMANDA STONE</h4>
                          <p>Videographer</p>
                          <div className="team__item__social">
                            <a href="#"><i className="fa fa-facebook"></i></a>
                            <a href="#"><i className="fa fa-twitter"></i></a>
                            <a href="#"><i className="fa fa-dribbble"></i></a>
                            <a href="#"><i className="fa fa-instagram"></i></a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 p-0">
                      <div className="team__item team__item--second set-bg" >
                        <div className="team__item__text">
                          <h4>AMANDA STONE</h4>
                          <p>Videographer</p>
                          <div className="team__item__social">
                            <a href="#"><i className="fa fa-facebook"></i></a>
                            <a href="#"><i className="fa fa-twitter"></i></a>
                            <a href="#"><i className="fa fa-dribbble"></i></a>
                            <a href="#"><i className="fa fa-instagram"></i></a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 p-0">
                      <div className="team__item team__item--third set-bg" >
                        <div className="team__item__text">
                          <h4>AMANDA STONE</h4>
                          <p>Videographer</p>
                          <div className="team__item__social">
                            <a href="#"><i className="fa fa-facebook"></i></a>
                            <a href="#"><i className="fa fa-twitter"></i></a>
                            <a href="#"><i className="fa fa-dribbble"></i></a>
                            <a href="#"><i className="fa fa-instagram"></i></a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 p-0">
                      <div className="team__item team__item--four set-bg">
                        <div className="team__item__text">
                          <h4>AMANDA STONE</h4>
                          <p>Videographer</p>
                          <div className="team__item__social">
                            <a href="#"><i className="fa fa-facebook"></i></a>
                            <a href="#"><i className="fa fa-twitter"></i></a>
                            <a href="#"><i className="fa fa-dribbble"></i></a>
                            <a href="#"><i className="fa fa-instagram"></i></a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12 p-0">
                      <div className="team__btn">
                        <a href="#" className="primary-btn">Meet Our Team</a>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <div class="thumb" data-image-src="photo/client1.png"></div>



<div className="teams">
              <ul>
  <li>Front-end</li>
  <li>Backend</li>
  <li>Tester</li>
  <li>marketing</li>
</ul>
</div>
</>
  );
}

export default App;
