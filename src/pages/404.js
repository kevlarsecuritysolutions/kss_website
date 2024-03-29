import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";
import NavigationLight from "../components/NavigationLight";
import Footer from "../components/Footer";
import BackToTopBtn from "../components/BackToTopBtn";
import SEO from "../components/Seo";

// markup
const NotFoundPage = () => {
  return (
    <>
    <NavigationLight/>
    <SEO title="404 | Page Not Found" slug="/404"/>
      <div className="min-h-screen bg-white px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
        <div className="mx-auto max-w-max">
          <main className="sm:flex">
            <p className="text-4xl font-bold tracking-tight text-black sm:text-5xl">
              404
            </p>
            <div className="sm:ml-6">
              <div className="sm:border-l sm:border-gray-200 sm:pl-6">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                  Page not found
                </h1>
                <p className="mt-1 text-base text-gray-500">
                  Please check the URL in the address bar and try again.
                </p>
              </div>
              <div className="mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6">
                <Link
                  to="/"
                  className="inline-flex items-center border border-transparent bg-black px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-black focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Go back home
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center border border-transparent bg-gray-200 px-4 py-2 text-sm font-medium text-black hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Contact a Security Professional
                </Link>
              </div>
            </div>
          </main>
        </div>
      </div>
      <Footer/>
      <BackToTopBtn/>
      </>
  );
};

export default NotFoundPage;
