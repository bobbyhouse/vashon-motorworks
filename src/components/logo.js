import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Logo = ({ text }) => (
    <h1 style={{
        fontFamily: 'Pacifico',
        fontSize: '24px',
        margin: 0,
        color: 'white',
    }}>
        <Link
            to="/"
            style={{
                color: `white`,
                textDecoration: `none`,
            }}
        >
            {text}
        </Link>
    </h1>
);

Logo.propTypes = {
  text: PropTypes.string,
}

Logo.defaultProps = {
  text: ``,
}

export default Logo;
