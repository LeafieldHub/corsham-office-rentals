import * as React from 'react';
import { graphql, Link, StaticQuery } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { useState } from 'react';
import PropTypes from 'prop-types';

export default function Navigation() {
  return (
    <StaticQuery
      query={graphql`
        query {
          sanitySiteSettings {
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

const NavBar = ({ sanitySiteSettings: { menu } }) => {
  const [open, setOpen] = useState();
  return (
    <nav className="bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center pr-4">
              <Link to="/">
                <StaticImage
                  src="../images/logo transparency.png"
                  alt="Leafield Hub Logo"
                  placeholder="blurred"
                  height={45}
                />
              </Link>
            </div>
            <div className="hidden md:block">
                {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                <Link to="/" className="nav-item" activeClassName="active">
                  Home
                </Link>
                {menu.map((item) => (
                  <Link
                    to={`/${item.page.slug.current}`}
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

          <div className="-mr-2 flex md:hidden">
            {/* <!-- Mobile menu button --> */}
            <button
              id="toggle"
              type="button"
              className="bg-primary900 inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-primary700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={() => setOpen(!open)}
            >
              <span className="sr-only">Open main menu</span>
              {/* <!--
              Heroicon name: outline/menu

              Menu open: "hidden", Menu closed: "block"
            --> */}
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
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
              {/* <!--
              Heroicon name: outline/x

              Menu open: "block", Menu closed: "hidden"
            --> */}
              <svg
                className="hidden h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* <!-- Mobile menu, show/hide based on menu state. --> */}
      <div className={open ? 'block' : 'hidden'} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
          <Link
            onClick={() => setOpen(!open)}
            to="/"
            className="block nav-item"
            activeClassName="active"
          >
            Home
          </Link>
          {menu.map((item) => (
            <Link
              to={`/${item.page.slug.current}`}
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
  sanitySiteSettings: PropTypes.node,
};
