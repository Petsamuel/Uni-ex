import Header from "./components/Header";
import Footer from "./components/Footer";
import { UserInput } from "./components/Main";
import "./App.css";

function App() {
  return (
    <div className="app w-[560px] md:w-full lg:w-full flex flex-col gap-5 items-center">
      <Header />
      <main className=" lg:py-5 pt-2 flex flex-col lg:w-3/6 w-full h-[50vh] mb-5">
        <UserInput />
      </main>
      <Footer />
    </div>
  );
}

export default App;
