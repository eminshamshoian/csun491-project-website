import Head from "next/head";
import "../styles/Home.module.css";

export default function Home() {
  return (
    <div className='entire-app'>
      <section className='home' id='home'>
        <div className='container-lg'>
          <div className='row min-vh-100 align-items-center align-content-center'>
            <div className='col-md-6 mt-5 mt-md-0'>
              <div className='home-img text-center'>
                <img
                  src='https://cdn.pixabay.com/photo/2021/10/11/13/12/website-6700615_960_720.png'
                  className='mw-100'
                  alt='profile img'
                  style={{ border: "5px solid black" }}
                />
              </div>
            </div>
            <div className='col-md-6 mt-md-0 order-md-first'>
              <div className='home-text'>
                <h5 className='mt-4 black-bold'>Senior Project for COMP 491</h5>
                <h1 className='main-color text-uppercase fs-1 fw-bold'>
                  SwiftifyTicketing
                </h1>
                <h5 className='mt-4 black-bold'>
                  This is a website explaining our application we built for our
                  senior project at CSUN.
                </h5>
                <a
                  href='https://gleaming-snickerdoodle-22026b.netlify.app/'
                  className='btn btn-color px-3 mt-3'
                >
                  Website
                </a>{" "}
                <a
                  href='https://www.facebook.com/SwiftifyTicketing-112132488145860'
                  className='btn btn-color px-3 mt-3'
                >
                  Facebook Page
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='team4' id='team'>
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
                  <img
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
                    <p className='team-desc'>
                      A leader who is willing to help out others by showing team
                      members new skills for a project. Setting an example,
                      getting familiar with their skill sets, and placing them
                      in their appropriate field of work.
                    </p>
                    <div className='social-links'>
                      <a
                        href='https://github.com/eminshamshoian'
                        className='text-dark me-4'
                      >
                        Github: <i className='bi bi-github'></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-3 mb-4'>
              <div className='row'>
                <div className='col-md-12'>
                  <img
                    src='https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_960_720.png'
                    alt='wrapkit'
                    className='img-fluid rounded-circle'
                  />
                </div>
                <div className='col-md-12 text-center'>
                  <div className='pt-2'>
                    <h5 className='mt-4 font-weight-medium mb-0'>
                      Edgar Chavez
                    </h5>
                    <h6 className='subtitle mb-3'>Frontend Developer</h6>
                    <p className='team-desc'>
                      Determine to find a new way to improve oneself. Always
                      looking to seek other feedback to show progress and
                      change. No fear in asking for help when a problem pops up.
                    </p>
                    <div className='social-links'>
                      <a
                        href='https://github.com/SimplyEdgar'
                        className='text-dark me-4'
                      >
                        Github: <i className='bi bi-github'></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-3 mb-4'>
              <div className='row'>
                <div className='col-md-12'>
                  <img
                    src='https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_960_720.png'
                    alt='wrapkit'
                    className='img-fluid rounded-circle'
                  />
                </div>
                <div className='col-md-12 text-center'>
                  <div className='pt-2'>
                    <h5 className='mt-4 font-weight-medium mb-0'>
                      Tristan Pangilinan
                    </h5>
                    <h6 className='subtitle mb-3'>Frontend Developer</h6>
                    <p className='team-desc'>
                      A developer who reliably communicates and completes tasks
                      to achieve goals. Provides valuable resources when one
                      struggles to find a topic. Willing to take a jump on a
                      difficult task.
                    </p>
                    <div className='social-links'>
                      <a
                        href='https://github.com/tristanepang'
                        className='text-dark me-4'
                      >
                        Github: <i className='bi bi-github'></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-3 mb-4'>
              <div className='row'>
                <div className='col-md-12'>
                  <img
                    src='https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_960_720.png'
                    alt='wrapkit'
                    className='img-fluid rounded-circle'
                  />
                </div>
                <div className='col-md-12 text-center'>
                  <div className='pt-2'>
                    <h5 className='mt-4 font-weight-medium mb-0'>
                      Varoujan Makdesian
                    </h5>
                    <h6 className='subtitle mb-3'>
                      Frontend Developer/Project Manager
                    </h6>
                    <p className='team-desc'>
                      An eager developer ready to learn and work on a new
                      environment. Taking any tasks assigned, researching them
                      and completing them by the deadline.
                    </p>
                    <div className='social-links'>
                      <a
                        href='https://github.com/cobra11793'
                        className='text-dark me-4'
                      >
                        Github: <i className='bi bi-github'></i>
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
                <h3 className='black-bold mb-3'>
                  Ticketing Application For Classrooms.
                </h3>
                <p className='black-bold'>
                  Swiftifyticketing is an online application which allows for a
                  school faculty to post tickets and close them upon repair
                  within an organization. Users will be able to give a ticket a
                  description, priority and status etc. Tickets are tracked
                  inside of a dashboard and the users have role based
                  permissions to access that information.
                </p>
                <p className='black-bold'>
                  Skills: Team Management, Agile Development, Time Management,
                  Github, Pair Programming, Technical Writing, Mern Stack, UI/UX
                </p>
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
              <div className='skill-item mt-4'>
                <h3 className='fs-5'>
                  Jira - Github - Discord - Google Workspace
                </h3>
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

      <section className='portfolio' id='demo'>
        <div className='container-lg py-5'>
          <div className='row justify-content-center'>
            <div className='col-lg-8'>
              <div className='section-title text-center'>
                <h2 className='fw-bold mb-5'>Demo</h2>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-6 col-lg-12'>
              <div className='portfolio-item'>
                <img
                  src='home.PNG'
                  className='w-100 img-thumbnail'
                  alt='portfolio item'
                />
              </div>
            </div>
            <div className='col-md-6 col-lg-12'>
              <div className='portfolio-item'>
                <img
                  src='dashboard.PNG'
                  className='w-100 img-thumbnail'
                  alt='portfolio item'
                />
              </div>
            </div>
            <div className='col-md-6 col-lg-12'>
              <div className='portfolio-item'>
                <img
                  src='add.PNG'
                  className='w-100 img-thumbnail'
                  alt='portfolio item'
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className='container-lg py-5'>
          <div className='row justify-content-center'>
            <div className='col-lg-8'>
              <div className='section-title text-center'>
                <h2 className='fw-bold mb-5'>Demo Video</h2>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-6 col-lg-12'>
              <div className='portfolio-item'>
                <iframe
                  width='1080'
                  height='720'
                  src='https://www.youtube.com/embed/WAJet6-9gnk'
                  title='YouTube video player'
                  frameBorder='0'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                  allowFullScreen
                ></iframe>
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
                <img
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
    </div>
  );
}
