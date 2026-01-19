import { DefaultLayout } from "../layout/index";
import MainPage from "../slides/index";

const publicRoutes = [
  {
    path: "/",
    component: MainPage,
    layout: DefaultLayout,
  },
];

const privateRoutes: Array<{
  path: string;
  component: React.ComponentType<any>;
  layout?: React.ComponentType<any>;
}> = [];

export { publicRoutes, privateRoutes };
