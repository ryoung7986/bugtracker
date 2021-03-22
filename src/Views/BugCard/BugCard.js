import React from 'react';
import './BugCard.css';

export default ({ name, priority, version, clicked }) => {

  const click = () => {
    clicked(name);
  }

  return (
    <div className="bug-card" onClick={click}>
      <h2 className="name">
        {name}
      </h2>
      <h4 className="name">
        {priority}
      </h4>
      <h5 className="name">
        {version}
      </h5>
    </div>
  )
}
