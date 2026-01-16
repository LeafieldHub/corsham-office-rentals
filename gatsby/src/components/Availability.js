import * as React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { PropTypes } from 'prop-types';
import { useContact } from '../hooks/useContact';

export default function Availability({ title, availabilitySelect, image }) {
  const { email, phone } = useContact();
  return (
    <section id="availability" className="bg-gray-100">
      <div className="container mx-auto pt-16 max-w-screen-xl">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-center pb-1">Our Rooms</h2>
          <p className="text-gray-700 text-lg px-4">
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
        <div className="flex pt-8 pb-16 justify-center flex-wrap mx-8s py-6">
          {availabilitySelect.map((room) => (
            <AvailabilityCard key={room._key} {...room} />
          ))}
        </div>
      </div>
    </section>
  );
}

function AvailabilityCard({ roomType, title, text, image }) {
  return (
    <div className="bg-white rounded-lg shadow-md w-4/5 sm:w-2/5 lg:w-3/10 mb-7 mx-4">
      <div>
        <GatsbyImage
          className="rounded-t-lg"
          image={image.asset.gatsbyImageData}
        />
      </div>
      <div className="px-6 pt-6 pb-10">
        <p className="text-xs text-primary700 font-semibold uppercase">
          {roomType}
        </p>
        <h3 className="text-lg font-bold my-1.5">{title}</h3>
        <p className="text-sm text-gray-700">{text}</p>
      </div>
    </div>
  );
}

Availability.propTypes = {
  title: PropTypes.string,
  availabilitySelect: PropTypes.array,
  image: PropTypes.node,
};

AvailabilityCard.propTypes = {
  roomType: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  image: PropTypes.node,
};
