import React from "react";
import LogoImage from "../images/Purplegene.png";

const Footer = () => {
  return (
    <div className="relative bg-footerBackground -ml-8 -mb-8 px-8">
      {/* style={{color:'blue'}}> */}
      <div className="max-w-screen-xl mx-auto px-6 py-16 lg:py-20 flex flex-wrap justify-between items-center">
        <div className="text-center md:text-left w-full md:w-2/5 mb-10 md:mb-0">
          <div className="flex items-center justify-center md:justify-start">
            <img
              className="w-8"
              src={LogoImage}
              style={{ height: "130px", width: "200px", aspectRatio: "3/2" }}
            />
          </div>
          <mt-4 max-w-xs font-medium text-sm mx-auto md:mx-0 md:mr-4>
            We specialize in offering technology products and solutions in the
            sectors of Healthcare, Education, and Agriculture.
          </mt-4>
          <div className="mt-4">
            <a
              className="cursor-pointer inline-block p-2 rounded-full bg-gray-700 text-gray-100 hover:bg-gray-900 transition duration-300 mr-4"
              href="https://facebook.com"
            >
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4">
                <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z" />
              </svg>
            </a>
            <a
              className="cursor-pointer inline-block p-2 rounded-full bg-gray-700 text-gray-100 hover:bg-gray-900 transition duration-300 mr-4"
              href="https://twitter.com"
            >
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4">
                <path d="M22.162 5.656a8.384 8.384 0 01-2.402.658A4.196 4.196 0 0021.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 00-7.126 3.814 11.874 11.874 0 01-8.62-4.37 4.168 4.168 0 00-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 01-1.894-.523v.052a4.185 4.185 0 003.355 4.101 4.21 4.21 0 01-1.89.072A4.185 4.185 0 007.97 16.65a8.394 8.394 0 01-6.191 1.732 11.83 11.83 0 006.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 002.087-2.165z" />
              </svg>
            </a>
            <a
              className="cursor-pointer inline-block p-2 rounded-full bg-gray-700 text-gray-100 hover:bg-gray-900 transition duration-300 mr-4"
              href="https://youtube.com"
            >
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4">
                <path d="M21.543 6.498C22 8.28 22 12 22 12s0 3.72-.457 5.502c-.254.985-.997 1.76-1.938 2.022C17.896 20 12 20 12 20s-5.893 0-7.605-.476c-.945-.266-1.687-1.04-1.938-2.022C2 15.72 2 12 2 12s0-3.72.457-5.502c.254-.985.997-1.76 1.938-2.022C6.107 4 12 4 12 4s5.896 0 7.605.476c.945.266 1.687 1.04 1.938 2.022zM10 15.5l6-3.5-6-3.5v7z" />
              </svg>
            </a>
          </div>
        </div>
        <div className="md:w-1/5">
          <h5 className="font-bold">Quick Links</h5>
          <ul className="mt-4 text-sm font-medium">
            {/* <li className="mt-3">
              <a className="border-b-2 border-transparent hocus:text-primary-500 hocus:border-primary-500 pb-1 transition duration-300" href="#">Blog</a>
            </li> */}
            <li className="mt-3">
              <a
                className="border-b-2 border-transparent hocus:text-primary-500 hocus:border-primary-500 pb-1 transition duration-300"
                href="#"
              >
                FAQs
              </a>
            </li>
            <li className="mt-3">
              <a
                className="border-b-2 border-transparent hocus:text-primary-500 hocus:border-primary-500 pb-1 transition duration-300"
                href="#"
              >
                Support
              </a>
            </li>
            <li className="mt-3">
              <a
                className="border-b-2 border-transparent hocus:text-primary-500 hocus:border-primary-500 pb-1 transition duration-300"
                href="/aboutus"
              >
                About Us
              </a>
            </li>
          </ul>
        </div>
        {/* <div className="md:w-1/5">
          <h5 className="font-bold">Products & Solutions</h5>
          <ul className="mt-4 text-sm font-medium">
            <li className="mt-3">
              <a className="border-b-2 border-transparent hocus:text-primary-500 hocus:border-primary-500 pb-1 transition duration-300" href="/healthcare">Healthcare</a>
            </li>
            <li className="mt-3">
              <a className="border-b-2 border-transparent hocus:text-primary-500 hocus:border-primary-500 pb-1 transition duration-300" href="/education">Education</a>
            </li>
            <li className="mt-3">
              <a className="border-b-2 border-transparent hocus:text-primary-500 hocus:border-primary-500 pb-1 transition duration-300" href="/agriculture">Agriculture</a>
            </li>
            <li className="mt-3">
              <a className="border-b-2 border-transparent hocus:text-primary-500 hocus:border-primary-500 pb-1 transition duration-300" href="/consulting">Consulting</a>
            </li>
          </ul>
        </div> */}
        <div className="md:w-1/5">
          <h5 className="font-bold">Legal</h5>
          <ul className="mt-4 text-sm font-medium">
            {/* <li className="mt-3">
              <a className="border-b-2 border-transparent hocus:text-primary-500 hocus:border-primary-500 pb-1 transition duration-300" href="#">GDPR</a>
            </li> */}
            <li className="mt-3">
              <a
                className="border-b-2 border-transparent hocus:text-primary-500 hocus:border-primary-500 pb-1 transition duration-300"
                href="/privacypolicy"
              >
                Privacy Policy
              </a>
            </li>
            <li className="mt-3">
              <a
                className="border-b-2 border-transparent hocus:text-primary-500 hocus:border-primary-500 pb-1 transition duration-300"
                href="/termsofservice"
              >
                Terms of Service
              </a>
            </li>
            <li className="mt-3">
              <a
                className="border-b-2 border-transparent hocus:text-primary-500 hocus:border-primary-500 pb-1 transition duration-300"
                href="/refundpolicy"
              >
                Refund Policy
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
