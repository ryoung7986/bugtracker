import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBugs } from '../../Controllers/Redux/bugSlice';
import BugCard from '../Components/BugCard/BugCard';

export default () => {
  const { bugs } = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBugs());
  }, [bugs.length < 1])

  const bugClicked = (name) => {
    console.log("WHATUP")
  }

  return (
    <div className="page-container">
      {bugs.map((bug, key) => (
        <BugCard
          key={key}
          name={bug.name}
          priority={bug.priority}
          version={bug.version}
          clicked={bugClicked}
        />
      ))}
    </div>
  )
}
