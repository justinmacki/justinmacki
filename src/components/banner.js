import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const Banner = () => {
    const data = useStaticQuery(graphql`
    query {
      poppinShades: file(relativePath: { eq: "poppin-shades.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      diamonds: file(relativePath: { eq: "diamonds.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      orange: file(relativePath: { eq: "sexy-orange.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
    return (
        <div className="banner">
            <div className="container">
                <div className="row">
                    <div className="side-image left" data-sal="slide-left" data-sal-easing="ease" data-sal-duration="1000">
                        <Img fluid={data.diamonds.childImageSharp.fluid} />
                    </div>
                    <div className="main-text" data-sal="fade" data-sal-easing="ease" data-sal-delay="1000" data-sal-duration="1000">Justin Macki Julhusin</div>
                    <div className="main-image" data-sal="slide-up" data-sal-easing="ease" data-sal-duration="1000">
                        <Img fluid={data.poppinShades.childImageSharp.fluid} />
                    </div>
                    <div className="side-image right" data-sal="slide-right" data-sal-easing="ease" data-sal-duration="1000">
                        <Img fluid={data.orange.childImageSharp.fluid} />
                    </div>
                </div>
                <div className="scroll">
                    <span>Scroll down</span>
                </div>
            </div>
            <div className="fixed-misc">Web Developer and Graphics Designer</div>
        </div>
    )
} 

export default Banner