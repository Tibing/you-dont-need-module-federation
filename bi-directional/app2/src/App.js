import BlueTitle from "./BlueTitle";
import React from "react";

const RedTitle_Remote = React.lazy(() => import("app1/RedTitle"));

const App = () => (
  <div>
    <BlueTitle />
    <React.Suspense fallback="Loading Remote Title">
      <RedTitle_Remote/>
    </React.Suspense>
  </div>
);

export default App;
