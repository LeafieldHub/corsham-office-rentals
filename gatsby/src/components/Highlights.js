import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'

export default function Highlights({ topHighlightsText, firstImage, bottomHighlightsText, secondImage }) {
  return (
    <div className="container mx-auto px-6 py-12">
      {/* Top Row - Always Shows */}
      <div className="flex flex-wrap items-center mb-12">
        <div className="w-full sm:w-1/2 px-8 sm:px-6 mb-6 sm:mb-0">
          {firstImage?.asset?.gatsbyImageData && (
            <GatsbyImage
              className="object-cover bg-gray-100 rounded-lg"
              image={firstImage.asset.gatsbyImageData}
              alt={topHighlightsText?.title || "Highlight image"}
            />
          )}
        </div>
        <div className="w-full sm:w-1/2 px-8 sm:px-6">
          <h2 className="font-extrabold pb-3 text-3xl">
            {topHighlightsText?.title}
          </h2>
          <hr className="w-16 border-gray-300" />
          <p className="mt-3 text-gray-500 text-lg">
            {topHighlightsText?.text}
          </p>
        </div>
      </div>

      {/* Bottom Row - Only shows IF you type something in Sanity */}
      {bottomHighlightsText?.title && (
        <div className="flex flex-wrap items-center flex-col-reverse sm:flex-row">
          <div className="w-full sm:w-1/2 px-8 sm:px-6">
            <h2 className="font-extrabold pb-3 text-3xl">
              {bottomHighlightsText.title}
            </h2>
            <hr className="w-16 border-gray-300" />
            <p className="mt-3 text-gray-500 text-lg">
              {bottomHighlightsText.text}
            </p>
          </div>
          <div className="w-full sm:w-1/2 px-8 sm:px-6 mb-6 sm:mb-0">
            {secondImage?.asset?.gatsbyImageData && (
              <GatsbyImage
                className="object-cover bg-gray-100 rounded-lg"
                image={secondImage.asset.gatsbyImageData}
                alt={bottomHighlightsText.title}
              />
            )}
          </div>
        </div>
      )}
    </div>
  )
}
