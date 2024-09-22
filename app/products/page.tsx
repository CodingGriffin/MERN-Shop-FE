'use client'
import Products from "../../components/products/ProductsPage";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import { WithProtectedRoute } from "../../components/withAuth";

const ProtectedPage: React.FC = () => {
    return (
        <>
            <Header />
            <Products />
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