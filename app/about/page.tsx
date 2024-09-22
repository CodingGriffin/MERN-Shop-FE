'use client'
import About from "../../components/about/AboutPage";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import { WithProtectedRoute } from "../../components/withAuth";

const ProtectedPage: React.FC = () => {
    return (
        <>
            <Header />
            <About />
            <Footer/>
        </>
    );
  };

  const Page = () => {
    return (
        <WithProtectedRoute>
            <ProtectedPage />
        </WithProtectedRoute>
    );
}

export default Page;