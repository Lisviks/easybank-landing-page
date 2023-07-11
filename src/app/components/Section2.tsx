import CurrencyImage from '../../../public/images/image-currency.jpg';
import RestaurantImage from '../../../public/images/image-restaurant.jpg';
import PlaneImage from '../../../public/images/image-plane.jpg';
import ConfettiImage from '../../../public/images/image-confetti.jpg';
import Image from 'next/image';

export default function Section2() {
  return (
    <section className='section-2'>
      <h2>Latest Articles</h2>
      <div className='articles'>
        <div className='card'>
          <div className='image'>
            <Image src={CurrencyImage} alt='Currency image' />
          </div>
          <div className='content'>
            <div className='author'>By Claire Robinson</div>
            <h3>Receive money in any currency with no fees</h3>
            <p>
              The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive
              money in a single …
            </p>
          </div>
        </div>
        <div className='card'>
          <div className='image'>
            <Image src={RestaurantImage} alt='Restaurant image' />
          </div>
          <div className='content'>
            <div className='author'>By Wilson Hutton</div>
            <h3>Treat yourself without worrying about money</h3>
            <p>
              Our simple budgeting feature allows you to separate out your spending and set realistic limits each month.
              That means you …
            </p>
          </div>
        </div>
        <div className='card'>
          <div className='image'>
            <Image src={PlaneImage} alt='Plane image' />
          </div>
          <div className='content'>
            <div className='author'>By Wilson Hutton</div>
            <h3>Take your Easybank card wherever you go</h3>
            <p>
              We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad.
              We’ll even show you …
            </p>
          </div>
        </div>
        <div className='card'>
          <div className='image'>
            <Image src={ConfettiImage} alt='Confetti image' />
          </div>
          <div className='content'>
            <div className='author'>By Claire Robinson</div>
            <h3>Our invite-only Beta accounts are now live!</h3>
            <p>
              After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request
              an invite through the site ...
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
