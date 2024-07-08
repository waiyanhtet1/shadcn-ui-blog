// import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import CharacterList from "./pages/CharacterList";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route index path="/" element={<CharacterList />} />
    </>
  )
);

function App() {
  return (
    <div className="m-w-[70rem] my-[10rem] mx-[10rem]">
      <RouterProvider router={router} />;
    </div>
  );
}

export default App;
