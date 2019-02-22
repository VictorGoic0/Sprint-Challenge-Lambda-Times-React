import React from 'react';

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

// Make sure you include PropTypes on your props.

export default Tab;
