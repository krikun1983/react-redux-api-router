type Routing = {
  path: string;
  exact: boolean;
  component: () => JSX.Element;
};

export default Routing;
