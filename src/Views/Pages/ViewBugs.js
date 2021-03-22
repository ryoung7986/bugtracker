import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBugs } from '../../Controllers/Redux/bugSlice';
import BugCard from '../Components/BugCard/BugCard';
import BugView from '../Components/BugView/BugView';

export default () => {
  const [displayBug, setDisplayBug] = useState({
    name: "",
    isDisplayed: false,
  })
  const { bugs } = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBugs());
  }, [bugs.length < 1])

  const bugClicked = (name) => {
    console.log(name);
    setDisplayBug({
      name: name,
      isDisplayed: !displayBug.isDisplayed,
    })
  }

  return (
    <div className="page-container">
      {bugs.map((bug, key) => (
        <BugCard
          key={key}
          bug={bug}
          name={bug.name}
          priority={bug.priority}
          version={bug.version}
          clicked={bugClicked}
        />
      ))}
      {displayBug.isDisplayed &&
        <BugView
          clicked={bugClicked}
          bug={bugs.filter((bug) => bug.name === displayBug.name)[0]}
        />}
    </div>
  )
}
