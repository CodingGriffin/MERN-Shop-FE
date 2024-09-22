// import dynamic from 'next/dynamic';

import LandingPage from '../components/landingPage/LandingPage';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
// const App = dynamic(() => import('../components/router/app-router'), {
//   ssr: false,
// });

export default function Page() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-6 py-8">
        <LandingPage />
      </main>
    <Footer/>
    </>
  )
}
