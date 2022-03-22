import Head from "next/head";
import Image from "next/image";
import "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <section className='home' id='home'>
        <div className='container-lg'>
          <div className='row min-vh-100 align-items-center align-content-center'>
            <div className='col-md-6 mt-5 mt-md-0'>
              <div className='home-img text-center'>
                <Image
                  src='https://cdn.pixabay.com/photo/2017/02/24/02/37/classroom-2093744_960_720.jpg'
                  className='mw-100'
                  alt='profile img'
                />
              </div>
            </div>
            <div className='col-md-6 mt-5 mt-md-0 order-md-first'>
              <div className='home-text'>
                <h2 className='fs-4'>Senior Project for COMP 491</h2>
                <h1 className='main-color text-uppercase fs-1 fw-bold'>
                  SwiftifyTiceketing
                </h1>
                <p className='mt-4 text-muted'>
                  This is a website explaining our application we built for our
                  senior project at CSUN.
                </p>
                <a href='#portfolio' className='btn btn-color px-3 mt-3'>
                  Demo
                </a>{" "}
                <a href='#portfolio' className='btn btn-color px-3 mt-3'>
                  Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='py-5 team4' id='team'>
        <div className='container'>
          <div className='row justify-content-center mb-4'>
            <div className='row justify-content-center'>
              <div className='col-lg-8'>
                <div className='section-title text-center'>
                  <h2 className='fw-bold mb-5'>Team</h2>
                </div>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-3 mb-4'>
              <div className='row'>
                <div className='col-md-12'>
                  <Image
                    src='https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_960_720.png'
                    alt='wrapkit'
                    className='img-fluid rounded-circle'
                  />
                </div>
                <div className='col-md-12 text-center'>
                  <div className='pt-2'>
                    <h5 className='mt-4 font-weight-medium mb-0'>
                      Emin Shamshoian
                    </h5>
                    <h6 className='subtitle mb-3'>
                      Full Stack Developer/Scrum Master
                    </h6>
                    <p>Description</p>
                    <div className='social-links'>
                      <a
                        href='https://github.com/eminshamshoian'
                        className='text-dark me-4'
                      >
                        <i className='bi bi-github'></i>
                      </a>
                      <a href='#' className='text-dark me-4'>
                        <i className='bi bi-linkedin'></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-3 mb-4'>
              <div className='row'>
                <div className='col-md-12'>
                  <Image
                    src='https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_960_720.png'
                    alt='wrapkit'
                    className='img-fluid rounded-circle'
                  />
                </div>
                <div className='col-md-12 text-center'>
                  <div className='pt-2'>
                    <h5 className='mt-4 font-weight-medium mb-0'>Edgar</h5>
                    <h6 className='subtitle mb-3'>Frontend Developer</h6>
                    <p>Description</p>
                    <div className='social-links'>
                      <a
                        href='https://github.com/SimplyEdgar'
                        className='text-dark me-4'
                      >
                        <i className='bi bi-github'></i>
                      </a>
                      <a href='#' className='text-dark me-4'>
                        <i className='bi bi-linkedin'></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-3 mb-4'>
              <div className='row'>
                <div className='col-md-12'>
                  <Image
                    src='https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_960_720.png'
                    alt='wrapkit'
                    className='img-fluid rounded-circle'
                  />
                </div>
                <div className='col-md-12 text-center'>
                  <div className='pt-2'>
                    <h5 className='mt-4 font-weight-medium mb-0'>Tristan</h5>
                    <h6 className='subtitle mb-3'>Frontend Developer</h6>
                    <p>Description</p>
                    <div className='social-links'>
                      <a
                        href='https://github.com/tristanepang'
                        className='text-dark me-4'
                      >
                        <i className='bi bi-github'></i>
                      </a>
                      <a href='#' className='text-dark me-4'>
                        <i className='bi bi-linkedin'></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-3 mb-4'>
              <div className='row'>
                <div className='col-md-12'>
                  <Image
                    src='https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_960_720.png'
                    alt='wrapkit'
                    className='img-fluid rounded-circle'
                  />
                </div>
                <div className='col-md-12 text-center'>
                  <div className='pt-2'>
                    <h5 className='mt-4 font-weight-medium mb-0'>Varoujan</h5>
                    <h6 className='subtitle mb-3'>Frontend Developer</h6>
                    <p>Description</p>
                    <div className='social-links'>
                      <a
                        href='https://github.com/cobra11793'
                        className='text-dark me-4'
                      >
                        <i className='bi bi-github'></i>
                      </a>
                      <a href='#' className='text-dark me-4'>
                        <i className='bi bi-linkedin'></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='about py-5' id='about'>
        <div className='container-lg py-4'>
          <div className='row justify-content-center'>
            <div className='col-lg-8'>
              <div className='section-title text-center'>
                <h2 className='fw-bold mb-5'>About The Application</h2>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-6'>
              <div className='about-text'>
                <h3 className='fs-4 mb-3'>
                  Ticketing Application For Classrooms.
                </h3>
                <p className='text-muted'>Project desc etc.</p>
                <p className='text-muted'>
                  Worked on various freelance and personal projects as listed in
                  the portfolio section below.
                </p>
              </div>

              <div className='row'>
                <div className='col-lg-12 d-flex align-items-center links-tab'>
                  <a href='#' className='btn px-3 btn-color me-5'>
                    Download Resume
                  </a>
                  <div className='social-links'>
                    <a href='#' className='text-dark me-4'>
                      <i className='bi bi-github'></i>
                    </a>
                    <a href='#' className='text-dark me-4'>
                      <i className='bi bi-linkedin'></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-6 mt-5 mt-md-0'>
              <div className='skill-item mb-4'>
                <h3 className='fs-5'>HTML</h3>
                <div className='progress'>
                  <div
                    className='progress-bar cta-color'
                    role='progressbar'
                    aria-valuenow='25'
                    aria-valuemin='0'
                    aria-valuemax='100'
                  ></div>
                </div>
              </div>
              <div className='skill-item mb-4'>
                <h3 className='fs-5'>CSS - Bootstrap</h3>
                <div className='progress'>
                  <div
                    className='progress-bar cta-color'
                    role='progressbar'
                    aria-valuenow='50'
                    aria-valuemin='0'
                    aria-valuemax='100'
                  ></div>
                </div>
              </div>
              <div className='skill-item mb-4'>
                <h3 className='fs-5'>Javascript - Typescript</h3>
                <div className='progress'>
                  <div
                    className='progress-bar cta-color'
                    role='progressbar'
                    aria-valuenow='75'
                    aria-valuemin='0'
                    aria-valuemax='100'
                  ></div>
                </div>
              </div>
              <div className='skill-item mb-4'>
                <h3 className='fs-5'>Reactjs</h3>
                <div className='progress'>
                  <div
                    className='progress-bar cta-color'
                    role='progressbar'
                    aria-valuenow='100'
                    aria-valuemin='0'
                    aria-valuemax='100'
                  ></div>
                </div>
              </div>
              <div className='skill-item'>
                <h3 className='fs-5'>NodeJS - MongoDB</h3>
                <div className='progress'>
                  <div
                    className='progress-bar cta-color'
                    role='progressbar'
                    aria-valuenow='100'
                    aria-valuemin='0'
                    aria-valuemax='100'
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='portfolio' id='portfolio'>
        <div className='container-lg py-5'>
          <div className='row justify-content-center'>
            <div className='col-lg-8'>
              <div className='section-title text-center'>
                <h2 className='fw-bold mb-5'>Portfolio of Work</h2>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-6 col-lg-4'>
              <div className='portfolio-item'>
                <Image
                  src='https://cdn.pixabay.com/photo/2017/02/24/02/37/classroom-2093744_960_720.jpg'
                  className='w-100 img-thumbnail'
                  alt='portfolio item'
                />
              </div>
            </div>
            <div className='col-md-6 col-lg-4'>
              <div className='portfolio-item'>
                <Image
                  src='https://cdn.pixabay.com/photo/2017/02/24/02/37/classroom-2093744_960_720.jpg'
                  className='w-100 img-thumbnail'
                  alt='portfolio item'
                />
              </div>
            </div>
            <div className='col-md-6 col-lg-4'>
              <div className='portfolio-item'>
                <Image
                  src='https://cdn.pixabay.com/photo/2017/02/24/02/37/classroom-2093744_960_720.jpg'
                  className='w-100 img-thumbnail'
                  alt='portfolio item'
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className='footer border-top py-4'>
        <div className='container-lg'>
          <div className='row'>
            <div className='col-lg-12 py-5'>
              <p className='m-0 text-left text-muted'>
                <Image
                  src='https://www.csun.edu/sites/default/themes/csun/logo.png'
                  alt='csun logo'
                />
              </p>
            </div>
            <div className='col-lg-3'>
              <p className='m-0 text-left text-muted'>
                <a href='https://www.csun.edu/'>CSUN WEBSITE</a>
              </p>
              <p className='m-0 text-left text-muted'>
                <a href='https://www.csun.edu/~xjiang/SeniorDesign/'>
                  CSUN Coure Page
                </a>
              </p>
            </div>
            <div className='col-lg-3'>
              <p className='m-0 text-left text-muted'>
                <a href='https://www.facebook.com/calstatenorthridge'>
                  CSUN Facebook
                </a>
              </p>
              <p className='m-0 text-left text-muted'>
                <a href='https://twitter.com/csunorthridge?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor'>
                  CSUN Twitter
                </a>
              </p>
              <p className='m-0 text-left text-muted'>
                <a href='https://www.linkedin.com/school/california-state-university-northridge/'>
                  CSUN Linkedin
                </a>
              </p>
              <p className='m-0 text-left text-muted'>
                <a href='https://www.instagram.com/csun_edu/?hl=en'>
                  CSUN Instagram
                </a>
              </p>
            </div>
            <div className='col-lg-3'>
              <p className='m-0 text-left text-muted'>
                Copyright © California State University, Northridge
              </p>
            </div>
          </div>
        </div>
      </footer>
      <link
        rel='stylesheet'
        href='https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css'
      ></link>
    </>
  );
}
