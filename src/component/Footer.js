import React from "react";
var d = new Date();
var currYear = d.getFullYear();

function Footer() {
  return (
    <React.StrictMode>
      <div className="copyright-details">
        <div className="about-social-icon text-center">
          <ul className="about-social">
            {/* <li className="wow fadeIn" data-wow-delay=".8s">
              <a href="https://twitter.com/sanajitjana01" target="newtab">
                <i className="fa fa-twitter" aria-hidden="true"></i>
              </a>
            </li> */}
            <li className="wow fadeIn" data-wow-delay=".6s">
              <a
                href="https://www.linkedin.com/in/felix-xu/"
                target="newtab"
              >
                <i className="fa fa-linkedin" aria-hidden="true"></i>
              </a>
            </li>
            {/* <li className="wow fadeIn" data-wow-delay=".2s">
              <a href="https://www.facebook.com/sanajitjana01/" target="newtab">
                <i className="fa fa-facebook" aria-hidden="true"></i>
              </a>
            </li> */}
            {/* <li className="wow fadeIn" data-wow-delay=".4s">
              <a
                href="https://www.instagram.com/sanajitjana01/"
                target="newtab"
              >
                <i className="fa fa-instagram" aria-hidden="true"></i>
              </a>
            </li> */}
            {/* <li className="wow fadeIn" data-wow-delay="1s">
              <a href="https://sanajitjana.medium.com/" target="newtab">
                <i className="fa fa-medium" aria-hidden="true"></i>
              </a>
            </li> */}
            <li className="wow fadeIn" data-wow-delay="1.2s">
              <a href="https://github.com/XRFXRF" target="newtab">
                <i className="fa fa-github" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="copyright">
          <h3>&copy; {currYear}, Made with ❤️ by Ruofei Xu.</h3>
        </div>
      </div>
    </React.StrictMode>
  );
}

export default Footer;
