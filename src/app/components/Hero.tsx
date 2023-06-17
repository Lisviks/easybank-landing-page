import Mockups from '../../../public/images/image-mockups.png';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className='hero'>
      <div className='image'>
        <Image src={Mockups} alt='mockups' />
      </div>
      <div className='bg-intro'>
        <picture>
          <source media='(min-width: 1110px)' srcSet='./images/bg-intro-desktop.svg' />
          <source media='(min-width: 375px)' srcSet='./images/bg-intro-mobile.svg' />
          <img src='./images/bg-intro-mobile.svg' alt='background pattern' />
        </picture>
      </div>
      <div className='content'>
        <h1>Next generation digital banking</h1>
        <p>
          Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving,
          budgeting, investing, and much more.
        </p>
        <button>Request Invite</button>
      </div>
    </section>
  );
}
