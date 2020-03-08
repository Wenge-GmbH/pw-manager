import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

export const MainRouter = () => {
  return (
    <Suspense fallback={null}>
      <div className="main-content">
        <Switch>
          <Route exact path="/" component={<div></div>} />
        </Switch>
      </div>
    </Suspense>
  );
};
