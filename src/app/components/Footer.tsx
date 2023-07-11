import Image from 'next/image';
import Logo from '../../../public/images/logo-light.svg';
import FacebookLogo from '../../../public/images/icon-facebook.svg';
import YoutubeLogo from '../../../public/images/icon-youtube.svg';
import TwitterLogo from '../../../public/images/icon-twitter.svg';
import PinterestLogo from '../../../public/images/icon-pinterest.svg';
import InstagramLogo from '../../../public/images/icon-instagram.svg';

export default function Footer() {
  return (
    <footer>
      <div className='socials'>
        <div className='logo'>
          <Image src={Logo} alt='Easybank logo' />
        </div>
        <ul>
          <li>
            <a href='#'>
              <Image src={FacebookLogo} alt='Facebook' />
            </a>
          </li>
          <li>
            <a href='#'>
              <Image src={YoutubeLogo} alt='Youtube' />
            </a>
          </li>
          <li>
            <a href='#'>
              <Image src={TwitterLogo} alt='Twitter' />
            </a>
          </li>
          <li>
            <a href='#'>
              <Image src={PinterestLogo} alt='Pinterest' />
            </a>
          </li>
          <li>
            <a href='#'>
              <Image src={InstagramLogo} alt='Instagram' />
            </a>
          </li>
        </ul>
      </div>
      <div className='links'>
        <ul>
          <li>
            <a href='#'>About Us</a>
          </li>
          <li>
            <a href='#'>Contact</a>
          </li>
          <li>
            <a href='#'>Blog</a>
          </li>
          <li>
            <a href='#'>Careers</a>
          </li>
          <li>
            <a href='#'>Support</a>
          </li>
          <li>
            <a href='#'>Privacy Policy</a>
          </li>
        </ul>
      </div>
      <div className='invite'>
        <button>Request Invite</button>
        <p>© Easybank. All Rights Reserved</p>
      </div>
    </footer>
  );
}
