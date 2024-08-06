import { Link } from "react-router-dom";
import "../css/Home.css";
import { ReactTyped } from "react-typed";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export const Home = () => {
  const displayString = "Create a unique and beautiful blog easily";

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div>
      <section id="container" className="flex justify-around ">
        <section
          data-aos="fade-right"
          className=" flex-1 flex flex-col items-center justify-around py-5 gap-6 ">
          <h1 className="text-3xl font-bold font-mono">Publish your passion</h1>
          <p className="text-2xl font-extrabold w-3/4 h-8 text-red-600  font-mono">
            <ReactTyped
              strings={[displayString]}
              typeSpeed={100}
              backSpeed={100}
              loop
            />
          </p>
          <Link to="/create">
            <button className="text-2xl font-mono bg-red-600 text-white p-3 rounded-md">
              Get strated.
            </button>
          </Link>
        </section>
        <figure className="h-96 flex-1 flex justify-center  ">
          <img
            id='img'
            data-aos="zoom-in"
            className="h-full bg-transparent"
            src="./hero.png"
            alt="hero_pic"
          />
        </figure>
      </section>
      <section  className="text-center   text-black h-96 p-6  second_div">
        <h1 className="text-6xl text-red-600 font-bold">Choose the perfect design</h1>
        <div className="secondpart" data-aos="zoom-in">
        <p className="m-auto mt-4 text-center w-3/5 text-lg p-8">
          Create a beautiful blog that fits your style. Choose from a selction
          of easy-to-use templates . All with flexible layouts and hundreds of
          background images or design something new.
        </p>
        
        </div>
      </section>
    </div>
  );
};
