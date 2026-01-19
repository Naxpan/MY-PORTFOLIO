import { Routes, Route } from "react-router-dom";
import DefaultLayout from "./layout/DefaultLayout";
import { publicRoutes } from "./route";

function App() {
  return (
    <Routes>
      {publicRoutes.map((route, index) => {
        const Layout = (route.layout ||
          DefaultLayout) as React.ComponentType<any>;
        const Page = route.component as React.ComponentType<any>;
        return (
          <Route
            key={index}
            path={route.path}
            element={
              <Layout>
                <Page />
              </Layout>
            }
          />
        );
      })}
    </Routes>
  );
}

export default App;
