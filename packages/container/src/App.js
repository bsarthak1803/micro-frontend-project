import React from "react";
import MarketingApp from "../components/MarketingApp";
// import Landing from './components/Landing'
// import Pricing from './components/Pricing'
// import {StylesProvider} from '@material-ui/core/styles'
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

export default () => {
  return (
    <>
      <h1>This is the container app running on port 8080</h1>
      <hr />
      <MarketingApp />
    </>
  );
};
