import React,{useEffect} from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios'
import {useSelector,useDispatch} from 'react-redux';
import { hideLoading, showLoading } from '../redux/features/alertSlice';



export default function ProtectedRoute ({ children})  {
    
    
    

    if (localStorage.getItem("token")){
        return children;
    } else {
        return <Navigate to="/login"/>;
    }
  
    
}
