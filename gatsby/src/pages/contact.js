import React, { useState } from 'react';
import Helmet from 'react-helmet';

import { useContact } from '../hooks/useContact';

function encode(data) {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');
}

export default function Contact() {
  const { email, phone } = useContact();
  const [state, setState] = useState({
    name: '',
    email: '',
    tel: '',
    message: '',
  });
  const [message, setMessage] = useState();

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...state,
      }),
    })
      .then(() => {
        setMessage(`✅ Form submitted, thank you for getting in touch! `);
        setState({
          name: '',
          email: '',
          tel: '',
          message: '',
        });
      })
      .catch((error) => alert(error));
  };
  return (
    <>
      <Helmet>
        <html lang="en" />
        <meta charSet="utf-8" />
        <title>Contact - Office Space Available - Corsham Office Rentals</title>
        <meta
          name="description"
          content={`To get in touch phone: ${phone}, Email: ${email} Address: Unit 23, Leafield Industrial Estate, Corsham, Wiltshire, SN13 9RS`}
        />
      </Helmet>
      <section className="bg-white pb-24 pt-12">
        <div className="mx-auto">
          <div className="flex flex-wrap bg-white lg:px-12 px-6 mx-auto">
            <div className="w-full md:w-1/2 bg-gray-100 lg:p-12 p-8 rounded-l-lg">
              <h1 className="text-3xl mb-6 font-extrabold">Get in touch</h1>
              <h2 className="font-semibold text-gray-900 text-xs">PHONE</h2>
              <a
                className="text-red-700 font-semibold md:text-xl"
                href={`tel:${phone}`}
              >
                {phone}
              </a>
              <h2 className="font-semibold text-gray-900 text-xs mt-4">
                EMAIL
              </h2>
              <a
                className="text-red-700 font-semibold md:text-xl break-words"
                href={`mailto:${email}?subject=Corsham%20Office%20Rental%20Enquiry`}
              >
                {email}
              </a>
              <h2 className="font-semibold text-gray-900 text-xs mt-4">
                ADDRESS
              </h2>

              <address className="mt-1 text-gray-700 text-md not-italic">
                Unit 23 <br />
                Leafield Industrial Estate <br />
                Corsham <br />
                Wiltshire <br />
                SN13 9RS
              </address>
            </div>
            <div className="w-full md:w-1/2 p-12 rounded-r-lg bg-gray-50">
              <form
                onSubmit={handleSubmit}
                name="contact"
                method="post"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
              >
                <input type="hidden" name="form-name" value="contact" />
                <p hidden>
                  <label>
                    Don’t fill this out:{' '}
                    <input name="bot-field" onChange={handleChange} />
                  </label>
                </p>
                <div className="flex flex-col">
                  <label htmlFor="name" className="hidden">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    onChange={handleChange}
                    value={state.name}
                    id="name"
                    placeholder="Full Name"
                    className="w-100 mt-3 py-3 px-3 rounded-md bg-white border border-gray-300  text-gray-800 text-sm focus:border-primary focus:outline-none"
                  />
                </div>
                <div className="flex flex-col mt-2">
                  <label htmlFor="email" className="hidden">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    value={state.email}
                    id="email"
                    placeholder="Email"
                    className="w-100 mt-3 py-3 text-sm px-3 rounded-md bg-white border border-gray-300  text-gray-800  focus:border-primary focus:outline-none"
                    required
                  />
                </div>
                <div className="flex flex-col mt-2">
                  <label htmlFor="tel" className="hidden">
                    Number
                  </label>
                  <input
                    type="tel"
                    name="tel"
                    value={state.tel}
                    onChange={handleChange}
                    id="tel"
                    placeholder="Telephone Number"
                    className="w-100 mt-3 py-3 text-sm px-3 rounded-md bg-white border border-gray-300  text-gray-800  focus:border-primary focus:outline-none"
                  />
                </div>

                <div className="flex flex-col mt-2">
                  <label htmlFor="message" className="hidden">
                    Message
                  </label>
                  <textarea
                    type="message"
                    name="message"
                    value={state.message}
                    onChange={handleChange}
                    id="message"
                    placeholder="Enter message"
                    className="h-24 w-100 mt-3 py-3 text-sm px-3 rounded-md bg-white border border-gray-300  text-gray-800  focus:border-primary focus:outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="md:w-32 bg-primary hover:bg-red-700 text-white font-medium py-3 px-6 rounded-md mt-4 transition ease-in-out duration-300"
                >
                  Submit
                </button>
                {message && <div className="pt-5">{message}</div>}
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
