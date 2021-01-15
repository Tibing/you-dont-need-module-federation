import RedTitle from "./RedTitle";
import React from "react";

const BlueTitle_Remote = React.lazy(() => import("app2/BlueTitle"));

const App = () => (
  <div>
    <RedTitle />
    <React.Suspense fallback="Loading Remote Title">
      <BlueTitle_Remote/>
    </React.Suspense>
  </div>
);

export default App;
