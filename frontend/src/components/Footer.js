import React from "react";
import { Link } from "react-router-dom";
import facebook from '../facebook.svg';
import insta from '../insta.svg';
import linkedin from '../linkedin.svg';
import mail from '../mail.svg'

export default function Footer() {
  return (
    <div className="bg-success">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        {/* <div className="col-md-4 d-flex align-items-center">
          <Link to="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">

          </Link>
          <span className="mb-3 mb-md-0 text-muted">© 2024 GoFood, Inc</span>
        </div>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
        </ul> */}

        <div id="footer-legal" className="row">
          <div className="col-12 col-md-6">
            <p className="text-white ms-3">
              © 2024 GoFood, &nbsp; All rights reserved.
            <br></br>
             Ayush Kumar, IEC2022004
             <br></br>
             <img src={mail} alt="mail"/> &nbsp; <Link to="mailto:iec2022004@iiita.ac.in" id="email-link" className="text-white">iec2022004@iiita.ac.in</Link>
            </p>
          </div>
          <div className="col-12 col-md-6 d-flex">
            <div className="row">
              <div className="col-6 mb-2">
                <Link to="/" className="text-white text-decoration-none">
                  Terms of Use
                </Link>
              </div>
              <div className="col-6 mb-2">
                <Link to="/" className="text-white text-decoration-none">
                  Privacy Policy
                </Link>
              </div>
              <div className="col-6 mb-2">
                <Link to="/" className="text-white text-decoration-none">
                  Notice of Financial Incentive
                </Link>
              </div>
              <div className="col-6 mb-2">
                <Link to="/" className="text-white text-decoration-none">
                  Do Not Sell or Share My Personal Information
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="text-end text-white ms-1 mt-2 me-5">Follow us on</div>
          <ul className="list-unstyled">
            <li>
              <a
                className="text-white text-decoration-none"
                href="https://www.facebook.com/profile.php?id=61560299723551"
              >
                <img src={facebook} alt="fb"/>
                <span className="ms-2">Facebook</span>
              </a>
            </li>
            <li>
              <a className="text-white text-decoration-none" href="https://www.instagram.com/ayush_hmmsss/">
              <img className="mt-2" src={insta} alt="ig"/>
                <span className="ms-2">Instagram</span>
              </a>
            </li>
            <li>
              <a
                className="text-white text-decoration-none"
                href="https://www.linkedin.com/in/ayush-kumar-743122256/"
              >
                <img className="mt-2" src={linkedin} alt="yt"/>
                <span className="ms-2">LinkedIn</span>
              </a>
            </li>
          </ul>
        </div>
        
      </footer>
    </div>
  );
}


