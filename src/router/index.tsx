import { BrowserRouter as Router } from 'react-router-dom';
import { RouterViews } from './baseConfig';

export const RouterView = (): JSX.Element => (
  <Router>
    <RouterViews />
  </Router>
);
