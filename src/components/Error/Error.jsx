import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { clearError, selectErrorMessage } from "../../store/slices/errorSlice";
import 'react-toastify/dist/ReactToastify.css';

export const Error = () => {
  const errorMessage = useSelector(selectErrorMessage);
  const dispatch = useDispatch()
  useEffect(() => {
    if (errorMessage) {
      toast.info(errorMessage);
      dispatch(clearError())
    }

  }, [errorMessage,dispatch]);

  return <ToastContainer position="top-right" autoClose={5000} />;
};
