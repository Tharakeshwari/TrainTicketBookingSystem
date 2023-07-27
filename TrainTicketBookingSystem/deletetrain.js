import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';
import ManageTrain from './ManageTrain';

function DeleteTrain() {
  const navigate = useNavigate();
  const location = useLocation();
  const key = location.state.id;

  useEffect(() => {
      console.log(key);
    axios
      .delete(`http://localhost:8181/trains/${key}`)
      .then(() => {
          navigate('/adminhome');
          console.log('Train deleted successfully');
        })
      .catch((error) => {
        console.error('Error deleting train:', error);
        // Handle the error gracefully here, e.g., show an error message to the user
      });
  }, []);

  console.log(key);

  return <></>;
}

export default DeleteTrain;