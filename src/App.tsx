import { useEffect } from "react";
import { Routes } from "./config";
import { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function App() {
  const history = useNavigate();
  useEffect(() => {
    if (window.location.pathname !== "/track") {
      localStorage.removeItem("trackStep");
    }
  }, [history]);
  return (
    <>
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 3000,
          style: {
            background: "#048372",
            color: "#FFFFFF",
          },
        }}
      />
      <Routes />
    </>
  );
}

export default App;
