import React from 'react';
import PropTypes from 'prop-types';
import { useContact } from '../hooks/useContact';

export default function Description({ title, description }) {
  const { email, phone } = useContact();
  return (
    <section className="bg-gray-100">
      <div className="container mx-auto py-12">
        <div className="mt-4 max-w-2xl md:mx-auto text-center">
          <h1 className="text-4xl font-extrabold">{title}</h1>
          <p className="text-gray-700 text-lg pt-2">
            For enquiries please contact{' '}
            <a className="text-primary700 font-semibold" href={`mailto:${email}`}>
              {email}
            </a>{' '}
            or call{' '}
            <a className="text-primary700 font-semibold" href={`tel:${phone}`}>
              {phone}
            </a>
          </p>
        </div>
        {description && (
          <p className="max-w-screen-md mx-4 sm:mx-auto bg-white p-8 mt-8 leading-7 text-slate-700 rounded-lg whitespace-pre-line">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}

Description.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};
