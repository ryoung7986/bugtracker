import React from 'react';
import ViewSection from './component/BugViewSection';
import BugModel from '../../../Models/bugModel';
import { useDispatch } from 'react-redux';
import { markComplete } from '../../../Controllers/Redux/bugSlice';
import './BugView.css';

export default (props) => {
  const bug = new BugModel(props.bug);
  const dispatch = useDispatch();

  return (
    <div className="bug-view">
      <button
        className="close-btn"
        onClick={props.clicked}
      >X</button>
      <h1>{bug.name}</h1>
      <ViewSection title="Details" info={bug.details} />
      <ViewSection title="Steps" info={bug.steps} />
      <ViewSection title="Priority" info={bug.priority} />
      <ViewSection title="Creator" info={bug.creator} />
      <ViewSection title="App Version" info={bug.version} />
      <ViewSection title="Time Created" info={bug.time} />
      <button onClick={() => { dispatch(markComplete()) }}>Mark Completed</button>
    </div>
  )
}
