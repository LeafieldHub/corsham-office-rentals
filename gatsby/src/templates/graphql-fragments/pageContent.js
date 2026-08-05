import { graphql } from 'gatsby';

export const pageContent = graphql`
  fragment pageContent on SanityPage {
    content {
      ... on SanityBanner {
        _key
        _type
        image {
          asset {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
        title
        text
      }
      ... on SanityAvailableSpace {
        _key
        _type
        title
        availabilitySelect {
          image {
            asset {
              gatsbyImageData(placeholder: BLURRED, width: 384)
            }
          }
          roomType
          text
          title
        }
      }
      ... on SanityHighlights {
        _key
        _type
        bottomHighlightsText {
          text
          title
        }
        firstImage {
          asset {
            gatsbyImageData(placeholder: BLURRED, width: 760)
          }
        }
        secondImage {
          asset {
            gatsbyImageData(placeholder: BLURRED, width: 760)
          }
        }
        topHighlightsText {
          text
          title
        }
      }
      ... on SanityTitleWithDescription {
        _key
        _type
        description
        title
      }
      ... on SanityGallery {
        _key
        _type
        images {
          title
          image {
            asset {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
      }
    }
  }
`;
