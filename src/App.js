import { NavLink } from 'react-router-dom';
import AppRouter, { routes } from 'router';

function App() {
  return (
    <div className="App">
      {routes.map((route, index) => {
        return (
          <NavLink to={route.path} key={index}>
            {route.title}
          </NavLink>
        );
      })}
      <AppRouter />
    </div>
  );
}

export default App;
