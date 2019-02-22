import React from 'react';
import PropTypes from 'prop-types';

const Tab = props => {
  return (
    <div
      className={`tab${props.tab === props.selectedTab ? ' active-tab' : ''}`}
      onClick={() => props.selectTabHandler(props.tab)}
    >
      {props.tab.toUpperCase()}
    </div>
  );
};

Tab.propTypes = {
  tab: PropTypes.string.isRequired
}

export default Tab;
