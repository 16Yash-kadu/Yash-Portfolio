import React, { useState, useEffect, Suspense } from "react";
import { SyncLoader } from "react-spinners";
import Home from "./routes/Home";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the delay as needed
    return () => clearTimeout(timer);
  }, []);

  const loaderStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    width: "100vw",
  };

  return (
    <Suspense
      fallback={
        <div style={loaderStyle}>
          <SyncLoader color="#4e65ff" height={4} />
        </div>
      }
    >
      {loading ? (
        <div style={loaderStyle}>
          <SyncLoader color="#4e65ff" height={4} />
        </div>
      ) : (
        <Home />
      )}
    </Suspense>
  );
};

export default App;
