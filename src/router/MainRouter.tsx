import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

const Test = () => <div>asd</div>;

export const MainRouter = () => {
  return (
    <Suspense fallback={null}>
      <div className="main-content">
        <Switch>
          <Route exact path="/" component={Test} />
        </Switch>
      </div>
    </Suspense>
  );
};
