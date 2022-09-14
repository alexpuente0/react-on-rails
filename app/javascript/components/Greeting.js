import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMessage } from '../redux/reducer';

const Greeting = () => {
  const dispatch = useDispatch();
  const { greeting } = useSelector((state) => state.greet);

  useEffect(() => {
    dispatch(fetchMessage);
  }, [dispatch]);

  return (
    <div>
      <h1>      
        {greeting}
        {' '}
        World!
      </h1>
    </div>
  );
};

export default Greeting;