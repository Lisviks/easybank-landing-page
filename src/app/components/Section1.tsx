import OnlineIcon from '../../../public/images/icon-online.svg';
import BudgetingIcon from '../../../public/images/icon-budgeting.svg';
import OnboardingIcon from '../../../public/images/icon-onboarding.svg';
import ApiIcon from '../../../public/images/icon-api.svg';
import Image from 'next/image';

export default function Section1() {
  return (
    <section className='section-1'>
      <div>
        <h2>Why choose Easybank?</h2>
        <p>
          We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never
          before.
        </p>
      </div>
      <div>
        <div className='image'>
          <Image src={OnlineIcon} alt='icon' />
        </div>
        <h3>Online Banking</h3>
        <p>
          Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.
        </p>
      </div>
      <div>
        <div className='image'>
          <Image src={BudgetingIcon} alt='icon' />
        </div>
        <h3>Simple Budgeting</h3>
        <p>
          See exactly where your money goes each month. Receive notifications when you’re close to your hitting limits.
        </p>
      </div>
      <div>
        <div className='image'>
          <Image src={OnboardingIcon} alt='icon' />
        </div>
        <h3>Fast Onboarding</h3>
        <p>
          We don’t do branches. Open your account in minutes online and start taking control of your finances right
          away.
        </p>
      </div>
      <div>
        <div className='image'>
          <Image src={ApiIcon} alt='icon' />
        </div>
        <h3>Open API</h3>
        <p>
          Manage your savings, investments, pension, and much more from one account. Tracking your money has never been
          easier.
        </p>
      </div>
    </section>
  );
}
