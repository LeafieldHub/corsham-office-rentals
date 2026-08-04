import * as React from 'react';
import { graphql, Link, StaticQuery } from 'gatsby';
import { useState } from 'react';
import PropTypes from 'prop-types';

export default function Navigation() {
  return (
    <StaticQuery
      query={graphql`
        query {
          sanitySiteSettings {
            title
            menu {
              title
              page {
                slug {
                  current
                }
              }
            }
          }
        }
      `}
      render={(data) => <NavBar {...data} />}
    />
  );
}

const NavBar = ({ sanitySiteSettings }) => {
  const [open, setOpen] = useState(false);
  const menu = sanitySiteSettings?.menu || [];
  const siteTitle = sanitySiteSettings?.title || "Corsham Office Rentals";

  return (
    <nav className="bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center w-full justify-between">
            {/* Logo Link Section */}
            <div className="flex-shrink-0">
              <Link to="/" className="text-white font-bold text-xl tracking-tight">
                {siteTitle}
              </Link>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link to="/" className="nav-item" activeClassName="active">
                  Home
                </Link>
                {menu.map((item, index) => (
                  <Link
                    key={index}
                    to={`/${item.page?.slug?.current || ''}`}
                    className="nav-item"
                    activeClassName="active"
                  >
                    {item.title}
                  </Link>
                ))}
                <Link
                  to="/contact"
                  className="nav-item"
                  activeClassName="active"
                >
                  Contact & Location
                </Link>
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="-mr-2 flex md:hidden">
            <button
              id="toggle"
              type="button"
              className="bg-blue-700 inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={() => setOpen(!open)}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                xmlns="http://w3.org"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={open ? 'block' : 'hidden'} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            onClick={() => setOpen(!open)}
            to="/"
            className="block nav-item"
            activeClassName="active"
          >
            Home
          </Link>
          {menu.map((item, index) => (
            <Link
              key={index}
              to={`/${item.page?.slug?.current || ''}`}
              className="block nav-item"
              activeClassName="active"
            >
              {item.title}
            </Link>
          ))}
          <Link
            onClick={() => setOpen(!open)}
            to="/contact"
            className="block nav-item"
            activeClassName="active"
          >
            Contact & Location
          </Link>
        </div>
      </div>
    </nav>
  );
};

NavBar.propTypes = {
  sanitySiteSettings: PropTypes.object,
};
