import Image from 'next/image';
import Logo from '../../../public/images/logo-light.svg';
import FacebookIcon from './socials-svgs/FacebookIcon';
import YoutubeIcon from './socials-svgs/YoutubeIcon';
import TwitterIcon from './socials-svgs/TwitterIcon';
import PinterestIcon from './socials-svgs/PinterestIcon';
import InstagramIcon from './socials-svgs/InstagramIcon';

export default function Footer() {
  return (
    <footer>
      <div>
        <div className='socials'>
          <div className='logo'>
            <Image src={Logo} alt='Easybank logo' />
          </div>
          <ul>
            <li>
              <a href='#'>
                <FacebookIcon />
              </a>
            </li>
            <li>
              <a href='#'>
                <YoutubeIcon />
              </a>
            </li>
            <li>
              <a href='#'>
                <TwitterIcon />
              </a>
            </li>
            <li>
              <a href='#'>
                <PinterestIcon />
              </a>
            </li>
            <li>
              <a href='#'>
                <InstagramIcon />
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
      </div>
    </footer>
  );
}
