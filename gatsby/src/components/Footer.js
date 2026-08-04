import * as React from 'react';
import { Link } from 'gatsby';
import { useContact } from '../hooks/useContact';

export default function Footer() {
  const { email, phone } = useContact();
  return (
    <>
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block">Get in touch!</span>
            <span className="block text-sky-950">
              Enquire for availability.
            </span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-sky-950 hover:bg-sky-900"
              >
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <div className="px-5 pb-5 mx-auto flex sm:flex-nowrap flex-wrap bg-white">
        <div className="w-full h-[450px] bg-gray-300 rounded-lg overflow-hidden p-10 flex items-end justify-start relative">
          <iframe
            src="https://google.com"
            width="100%"
            height="100%"
            className="absolute inset-0"
            frameBorder="0"
            title="map"
            marginHeight="0"
            marginWidth="0"
            scrolling="no"
            allowFullScreen=""
            loading="lazy"
          />
          <div className="bg-white relative flex flex-wrap p-6 rounded shadow-md z-10">
            <div className="px-6">
              <h2 className="font-semibold text-gray-900 text-xs">ADDRESS</h2>
              <address className="mt-1 text-gray-700 text-md not-italic">
                Unit 23
                <br />
                Leafield Industrial Estate <br />
                Corsham
                <br />
                Wiltshire <br />
                SN13 9RS
              </address>
            </div>
            <div className="px-6 mt-4 lg:mt-0">
              <h2 className="font-semibold text-gray-900 text-xs">EMAIL</h2>
              <a
                className="text-sky-950 font-semibold hover:underline"
                href={`mailto:${email}?subject=Corsham%20Office%20Rental%20Enquiry`}
              >
                {email}
              </a>
              <h2 className="font-semibold text-gray-900 text-xs mt-4">
                PHONE
              </h2>
              <a className="text-sky-950 font-semibold hover:underline" href={`tel:${phone}`}>
                {phone}
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <footer className="h-12 bg-cyan-900" />
    </>
  );
}
