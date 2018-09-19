import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

import './index.css';

export const Header = ({ currentPage, history }) => {
  return (
    <div>
      <div className="heading">
        <span onClick={history.goBack} className="go-back">
          <i className="fas fa-arrow-left" />
        </span>
        <h1 className="header-title">FlamesFinder</h1>
      </div>
      <h3>{currentPage}</h3>
    </div>
  );
};

Header.propTypes = {
  currentPage: PropTypes.string,
  history: PropTypes.object
};

export default withRouter(Header);
