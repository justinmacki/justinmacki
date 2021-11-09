import { Link } from "gatsby"
import React from "react"

const Footer = () => (
  <footer>
    <div className="container">
      <div className="inner-header">
      <div className="logo">
        <Link to="/">2021 All rights reserved.</Link>
      </div>
      <div className="navigation">
        <nav>
          <Link to="/contact">e-mail: justinmacki@outlook.com</Link>
        </nav>
      </div>
      </div>
    </div>
  </footer>
)

export default Footer
