import React from 'react';
import PriorityController from '../../../Controllers/PriorityController';
import './BugCard.css';

export default ({ name, priority, version, clicked }) => {
  const { level, color } = PriorityController(priority);

  const click = () => {
    clicked(name);
  }

  return (
    <div
      className="bug-card"
      onClick={click}
      style={{ color: color }}
    >
      <h2 className="name">
        {name}
      </h2>
      <h4 className="priority">
        {level}
      </h4>
      <h5 className="version">
        {version}
      </h5>
    </div>
  )
}
