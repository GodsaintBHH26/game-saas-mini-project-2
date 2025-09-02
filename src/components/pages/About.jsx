import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <>
      <div className="min-h-screen bg-gray-50 text-gray-800">
        {/* Header Section */}
        <section className="bg-gradient-to-r from-green-400 to-emerald-500 text-white py-16 px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About GamePass
          </h1>
          <p className="max-w-2xl mx-auto text-lg">
            Unlimited gaming at your fingertips. Play anywhere, anytime, with
            the subscription plan that suits you best.
          </p>
        </section>

        {/* Mission Section */}
        <section className="py-16 px-6 max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">Our Mission</h2>
          <p className="text-lg leading-relaxed text-gray-600">
            At <span className="font-bold">GamePass</span>, our mission is
            simple: to bring the world’s best games to everyone. Whether you’re
            a casual gamer or a pro, we believe in making premium gaming
            affordable, accessible, and hassle-free.
          </p>
        </section>

        {/* Features Section */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            <div className="p-6 shadow-lg rounded-2xl bg-gray-50 hover:scale-105 duration-150">
              <h3 className="text-xl font-semibold mb-3">Unlimited Access</h3>
              <p className="text-gray-600">
                Get access to hundreds of premium games with a single
                subscription.
              </p>
            </div>
            <div className="p-6 shadow-lg rounded-2xl bg-gray-50 hover:scale-105 duration-150">
              <h3 className="text-xl font-semibold mb-3">Play Anywhere</h3>
              <p className="text-gray-600">
                Enjoy seamless gaming on PC, mobile, or console—your choice,
                your rules.
              </p>
            </div>
            <div className="p-6 shadow-lg rounded-2xl bg-gray-50 hover:scale-105 duration-150">
              <h3 className="text-xl font-semibold mb-3">Exclusive Titles</h3>
              <p className="text-gray-600">
                Discover games you won’t find anywhere else, only on GamePass.
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 px-6 max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">Our Story</h2>
          <p className="text-lg leading-relaxed text-gray-600">
            GamePass started with a simple idea: gaming should be for everyone.
            We’ve built a platform that eliminates the hassle of buying
            individual titles and makes it easy to discover new favorites. With
            continuous updates and a growing library, we’re just getting
            started.
          </p>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-emerald-500 to-green-400 text-white py-16 px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="max-w-2xl mx-auto mb-6 text-lg">
            Join thousands of gamers enjoying unlimited access today.
          </p>
          <Link to='/pricing'>
            <button className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-full shadow-md hover:bg-gray-100 transition">
              Explore Plans
            </button>
          </Link>
        </section>
      </div>
    </>
  );
}

export default About;
