import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import { Link } from "gatsby";

const AboutBlurb = () => {

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

    }
  `)
    return (
        <div className="about-blurb">
            <div className="container">
                <div className="inner-blurb">
                    <div className="content" data-sal="fade" data-sal-easing="ease" data-sal-delay="300" data-sal-duration="1000">
                      <h3>Get to know me!</h3>
                      <p>Justin Macki B. Julhusin is a 3rd year student of National University-Manila.
                        He is currently taking up Bachelor of Science in Information Technology with specialization
                        in Multimedia Arts and Animation. He is currently working hard as a full scholar of the
                        university in pursuit of his dreams.
                      </p>
                      <div className="btn-row">
                        <Link to="/work">View Series</Link>
                      </div>
                    </div>
                    <div className="images">
                      <div className="top-right" data-sal="slide-up" data-sal-easing="ease" data-sal-delay="300" data-sal-duration="1000">
                        <Img fluid={data.poppinShades.childImageSharp.fluid}/>
                      </div>
                      <div className="bottom-left" data-sal="slide-up" data-sal-easing="ease" data-sal-duration="1000">
                        <Img fluid={data.diamonds.childImageSharp.fluid}/>
                      </div>

                    </div>
                </div>
            </div>
            <div className="black-box" data-sal="slide-right" data-sal-duration="1000"></div>
            <div className="black-box overlay" data-sal="slide-right" data-sal-duration="1000"></div>
        </div>
    )
} 

export default AboutBlurb