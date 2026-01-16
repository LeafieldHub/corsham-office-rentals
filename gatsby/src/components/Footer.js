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
            <span className="block text-primary">
              Enquire for availability.
            </span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-red-700"
              >
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </div>
      <section className="text-gray-600 body-font relative bg-white">
        <div className="px-5 pb-5 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="w-full h-[450px] bg-gray-300 rounded-lg overflow-hidden p-10 flex items-end justify-start relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d22859.402050573266!2d-2.2175363585001153!3d51.429999401892225!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf073a96c4aef982f!2sCorsham%20Office%20Rentals!5e0!3m2!1sen!2suk!4v1618304714328!5m2!1sen!2suk"
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
            <div className="bg-white relative flex flex-wrap p-6 rounded shadow-md">
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
                  className="text-red-700 font-semibold"
                  href={`mailto:${email}?subject=Corsham%20Office%20Rental%20Enquiry`}
                >
                  {email}
                </a>
                <h2 className="font-semibold text-gray-900 text-xs mt-4">
                  PHONE
                </h2>
                <a className="text-red-700 font-semibold" href={`tel:${phone}`}>
                  {phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="h-12 bg-primary" />
    </>
  );
}
