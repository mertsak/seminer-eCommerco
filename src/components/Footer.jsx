import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  return (
    <footer>
      <div className="box__container">
        <div className="box">
          <h3>Mertsak</h3>
          <ul className="box__lists">
            <li className="box__list">
              <a className="box__list__item" href="#/">
                Blog
              </a>
            </li>
            <li className="box__list">
              <a className="box__list__item" href="#/">
                About MertShop
              </a>
            </li>
            <li className="box__list">
              <a className="box__list__item" href="#/">
                MertShop Science
              </a>
            </li>
            <li className="box__list">
              <a className="box__list__item" href="#/">
                Corporate Gift Certificate
              </a>
            </li>
          </ul>
          <div className="payment__container">
            <h3>Secure Shopping</h3>
            <img src={require("../assets/Svg/payment.png")} alt="" />
          </div>
        </div>

        <div className="box">
          <h3>About Us</h3>

          <ul className="box__lists">
            <li className="box__list">
              <a className="box__list__item" href="#/">
                Who we are
              </a>
            </li>
            <li className="box__list">
              <a className="box__list__item" href="#/">
                Careers
              </a>
            </li>
            <li className="box__list">
              <a className="box__list__item" href="#/">
                Contact us
              </a>
            </li>
          </ul>
        </div>

        <div className="box">
          <h3>Campaigns</h3>

          <ul className="box__lists">
            <li className="box__list">
              <a className="box__list__item" href="#/">
                Active Campaigns
              </a>
            </li>
            <li className="box__list">
              <a className="box__list__item" href="#/">
                Elite Membership
              </a>
            </li>
            <li className="box__list">
              <a className="box__list__item" href="#/">
                Gift Ideas
              </a>
            </li>
            <li className="box__list">
              <a className="box__list__item" href="#/">
                Trendyol Opportunities
              </a>
            </li>
          </ul>

          <div className="share">
            <h3>Social Media</h3>

            <div className="share__inner">
              <a className="" href="#/">
                <FacebookIcon className="shree__icon"></FacebookIcon>
              </a>
              <a className="" href="#/">
                <InstagramIcon className="shree__icon"></InstagramIcon>
              </a>
              <a className="" href="#/">
                <TwitterIcon className="shree__icon"></TwitterIcon>
              </a>
              <a className="" href="#/">
                <YouTubeIcon className="shree__icon"></YouTubeIcon>
              </a>
            </div>
          </div>
        </div>

        <div className="box">
          <h3>Help</h3>
          <ul className="box__lists">
            <li className="box__list">
              <a className="box__list__item" href="#/">
                Frequently Asked Questions
              </a>
            </li>
            <li className="box__list">
              <a className="box__list__item" href="#/">
                Live Help
              </a>
            </li>
            <li className="box__list">
              <a className="box__list__item" href="#/">
                How can I return it?
              </a>
            </li>
            <li className="box__list">
              <a className="box__list__item" href="#/">
                Trading Guide
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="credit">
        <p>
          created by <strong> Mert Sakınç </strong> | © Copyright @ 2022
        </p>
      </div>
    </footer>
  );
};

export default Footer;
