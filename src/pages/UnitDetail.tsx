import React from 'react';
import { useLocation } from "react-router-dom";
import UnitDetailComponent from '../components/UnitDetail/UnitDetailComponent';

const UnitDetail = () => {
  const { state } = useLocation();

  return <UnitDetailComponent unit={state} />
}

export default UnitDetail;