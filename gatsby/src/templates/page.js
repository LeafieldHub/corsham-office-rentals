import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import * as React from 'react';
import Helmet from 'react-helmet';
import Availability from '../components/Availability';
import Description from '../components/Description';
import Hero from '../components/Hero';
import Highlights from '../components/Highlights';
import Gallery from '../components/Gallery';

export default function Page({ data }) {
  const { content, seo } = data.page;

  const pageElements = content.map((element) => {
    let el = null;
    switch (element._type) {
      case 'banner':
        el = <Hero key={element._key} {...element} />;
        break;
      case 'highlights':
        el = <Highlights key={element._key} {...element} />;
        break;
      case 'availableSpace':
        el = <Availability key={element._key} {...element} />;
        break;
      case 'titleWithDescription':
        el = <Description key={element._key} {...element} />;
        break;
      case 'gallery':
        el = <Gallery key={element._key} {...element} />;
        break;
      default:
        el = null;
        break;
    }
    return el;
  });
  return (
    <>
      {seo && (
        <Helmet>
          <html lang="en" />
          <meta charSet="utf-8" />
          {seo.metaTitle && <title>{seo.metaTitle}</title>}
          {seo.metaDescription && (
            <meta name="description" content={seo.metaDescription} />
          )}
        </Helmet>
      )}
      <main>{pageElements}</main>
    </>
  );
}

export const query = graphql`
  query ($slug: String!) {
    page: sanityPage(slug: { current: { eq: $slug } }) {
      title
      slug {
        current
      }
      seo {
        metaTitle
        metaDescription
      }
      ...pageContent
    }
  }
`;

Page.propTypes = {
  data: PropTypes.object,
};
