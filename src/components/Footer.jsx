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
                Biz Kimiz
              </a>
            </li>
            <li className="box__list">
              <a className="box__list__item" href="#/">
                Kariyer
              </a>
            </li>
            <li className="box__list">
              <a className="box__list__item" href="#/">
                İletişim
              </a>
            </li>
            <li className="box__list">
              <a className="box__list__item" href="#/">
                Kurumsal Hediye Çeki
              </a>
            </li>
          </ul>
          <div className="payment__container">
            <h3>Güvenli Alışveriş</h3>
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
          <h3>Kampanyalar</h3>

          <ul className="box__lists">
            <li className="box__list">
              <a className="box__list__item" href="#/">
                Aktif Kampanyalar
              </a>
            </li>
            <li className="box__list">
              <a className="box__list__item" href="#/">
                Elite Üyelik
              </a>
            </li>
            <li className="box__list">
              <a className="box__list__item" href="#/">
                Hediye Fikirleri
              </a>
            </li>
            <li className="box__list">
              <a className="box__list__item" href="#/">
                Trendyol Fırsatları
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
          <h3>Yardım</h3>
          <ul className="box__lists">
            <li className="box__list">
              <a className="box__list__item" href="#/">
                Sıkça Sorulan Sorular
              </a>
            </li>
            <li className="box__list">
              <a className="box__list__item" href="#/">
                Canlı Yardım
              </a>
            </li>
            <li className="box__list">
              <a className="box__list__item" href="#/">
                Nasıl İade Edebilirim
              </a>
            </li>
            <li className="box__list">
              <a className="box__list__item" href="#/">
                İşlem Rehberi
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="credit">
        <p>
          created by <strong> Mert Sakınç </strong> | © Copyright @ 2022
        </p>
      </div>
    </footer>
  );
};

export default Footer;
