import Footer from "./components/Footer";
import Header from "./components/Header";
export default function Home() {
  return (
    <div className="h-screen w-full mb-4"
            style={{ backgroundImage: 'url(/images/studium.jpg)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
            <Header />
            <div className="flex flex-col text-white justify-center items-center">
              <h1 className="text-xl sm:text-2xl md:text-4xl font-bold font-bold drop-shadow-lg">FootBall School</h1>
              <p className="text-xg sm:text-xl md:text-3xl font-semibold mt-2 text-center drop-shadow-md">Growing With Us!</p>
            </div>
            <Footer />
    </div>
  );
}
