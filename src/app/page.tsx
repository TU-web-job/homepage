import Header from "./components/Header";
export default function Home() {
  return (
    <div className="h-screen w-full mb-4"
            style={{ backgroundImage: 'url(/images/studium.jpg)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
            <Header />
            <div className="flex flex-col text-white justify-center items-center">
              <h1 className="text-4xl font-bold">FootBall School</h1>
              <p className="text-2xl font-semibold">Growing With Us!</p>
            </div>
    </div>
  );
}
