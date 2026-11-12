import Header from "../components/Header";

function About({ cartLength }) {
  return (
    <div className="bg-[#3e0000] min-h-screen text-white">
      <Header cart={cartLength} />
      <div className="flex flex-col items-center justify-center min-h-[80vh] px-6">
        <h1 className="text-4xl font-bold mb-4"> About Us </h1>
        <p className="text-lg text-center max-w-2xl">
          Welcome to our online car shop! We are passionate about
          providing the best selection of cars for our customers.
          Our mission is to make car shopping easy and enjoyable.
          Thank you for choosing us!
        </p>
      </div>
    </div>
  );
}

export default About;

