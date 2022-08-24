import logo from './logo.svg';
import './App.css';
const Foto = require("./Foto_Danar_Sadan_Bastian_4x6-removebg-preview.png")

function App() {
  return (
   <>
   <div>
    <h1 className="header">Home</h1>
  </div>
  <div className="container">
    <div className="row">
      <div className="col-md-10 col-md-offset-1">
        <div className="title text-center">
          <h1>Danar Sadan Bastian</h1>
          <h3>Fullstack Developer</h3>
          <img src={Foto}/>
          <h4>
            <a href="http://neoelemento.com" />
          </h4>
          <hr />
          {/* <ul class="list-inline">
        <li><i class="devicon-laravel-plain colored"></i></li>
        <li><i class="devicon-javascript-plain colored"></i></li>
        <li><i class="devicon-html5-plain colored"></i></li>
        <li><i class="devicon-angularjs-plain colored"></i></li>
        <li><i class="devicon-linux-plain"></i></li>
      </ul> */}
        </div>
        {/* summary section */}
        <div className="summary">
          <h2 className="text-center">Summary</h2>
          <p>
            A new full stack developer who always believe that live is always
            learn. I am graduate from Civil Engineering, but self development
            just not from where you are graduate.
          </p>
          {/* work experience section */}
          <div className="work-experience">
            <h2 className="text-center">Work Experience</h2>
            <div className="experience-summary">
              <div className="col-md-9">
                <h3>PT Yasa Patria Perkasa</h3>
                <h4>Tender Team</h4>
                <h5>Head Office</h5>
                <h3>October 2021 - July 2022</h3>
                <p>
                  Budget Planning for tender bid price. Making method of working
                  procedure.
                </p>
              </div>
            </div>
            {/* Corasent */}
            <div className="work-experience">
              <div className="experience-summary">
                <div className="col-md-9">
                  <h3>PT Jaya Konstruksi</h3>
                  <h4>Quality Control Coordinator</h4>
                  <h5>Bank Jambi Office Project</h5>
                  <p>Pekanbaru Airport Project</p>
                  <h3>January 2019 - September 2021</h3>
                  <p>Quality control coordinator project.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
   </>
  )
}

export default App;
