'use client'
import Blog from "../../components/blogs/BlogsPage";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import { WithProtectedRoute } from "../../components/withAuth";

const ProtectedPage: React.FC = () => {
    return (
        <>
            <Header />
            <Blog />
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