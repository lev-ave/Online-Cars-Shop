import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import ProductList from "../components/ProductList";
import ContactForm from "../components/ContactForm";

function Home({addToCart}) {

  return (
    <div className="bg-[#3e0000] min-h-screen text-white">
        <Header />
        <Hero />
        <ProductList onAddToCart={addToCart} />
        <ContactForm />
        <Footer />
    </div>
  );
}

export default Home;