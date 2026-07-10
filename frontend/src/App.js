import Dashboard from "./pages/Dashboard";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <Dashboard />

      <ToastContainer
        position="top-right"
        autoClose={3000}
        theme="dark"
        newestOnTop
      />
    </>
  );
}

export default App;