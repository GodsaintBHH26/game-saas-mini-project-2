import React, { useEffect, useRef } from "react";
import BMO from "../UI/BMO";
import FeaturedCard from "../UI/FeaturedCard";
import { featuredCardData, faqs } from "../../data/cardData";
import { Link } from "react-router-dom";

function Home() {
  const featuredDivRef = useRef(null);

  useEffect(() => {
    const featuredDiv = featuredDivRef.current;
    if (!featuredDiv) return;
    const handleWheel = (e) => {
      e.preventDefault();
      const scrollAmount = 500;
      if (e.deltaY > 0) {
        featuredDiv.scrollBy({ left: scrollAmount, behavior: "smooth" });
      } else {
        featuredDiv.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      }
    };

    featuredDiv.addEventListener("wheel", handleWheel);

    // Cleanup when component unmounts
    return () => {
      featuredDiv.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <>
      <div>
        <div className="h-128 w-full relative bg-gradient-to-br from-[#FAFFF7] to-[#9DD69A] text-black">
          <BMO />
        </div>

        {/* Featured games section */}
        <hr className="bg-emerald-900 m-5 h-[2px]" />
        <div className="my-5 p-5 featured-games">
          <div>
            <h1 className="text-4xl font-bold text-gray-700">
              🎮 Featured Games
            </h1>
            <p className="text-lg text-gray-600 p-2">
              Discover our most popular titles, hand-picked for endless fun.
              Whether you’re into action, strategy, or adventure — there’s
              something for every gamer.
            </p>
          </div>

          <div
            className="p-5 my-5 shadow-sm overflow-x-auto flex gap-5 snap-x snap-mandatory"
            ref={featuredDivRef}
          >
            {featuredCardData.map((el) => {
              return (
                <FeaturedCard
                  title={el.title}
                  subtext={el.subtext}
                  cover={el.cover}
                />
              );
            })}
          </div>

          <Link to="/games">
            <button className="text-black bg-emerald-400 p-2 rounded-lg px-3 shadow-sm">
              Explore more Games
            </button>
          </Link>
        </div>

        {/* Plan benifits section */}
        <hr className="bg-emerald-900 m-5 h-[2px]" />
        <div className="text-black m-5 p-5 bg-emerald-600/70">
          <div>
            <h1 className="text-4xl font-bold text-gray-200">
              {" "}
              Subscription Plans
            </h1>
            <p className="text-lg font-semibold text-gray-300">
              Simple pricing. Unlimited fun. Cancel anytime.
            </p>
          </div>

          <div>
            <ul className="p-5 list-disc text-gray-50">
              <li>Basic – ₹199/month · Access 100+ games</li>
              <li>Pro – ₹1999/month · Access 300+ games + multiplayer</li>
              <li>Custom – Only pay for the genres you like</li>
            </ul>
          </div>

          <Link to="/pricing">
            <button className="hover:text-teal-100 hover:underline">
              Learn More <i className="ri-external-link-fill"></i>
            </button>
          </Link>
        </div>

        {/* About Page section */}
        <hr className="bg-emerald-900 m-5 h-[2px]" />
        <div className="text-black m-5 p-5 bg-emerald-600/70">
          <section className=" py-10 px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-10">FAQ</h2>
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition hover:scale-105 duration-150" 
                  >
                    <h3 className="text-xl font-semibold mb-2">
                      {faq.question}
                    </h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Home;
