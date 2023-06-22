import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Section1 from './components/Section1';
import Section2 from './components/Section2';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Section1 />
        <Section2 />
      </main>
      <Footer />
    </>
  );
}
