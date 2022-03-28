import { NavLink } from 'react-router-dom';
import AppRouter, { routes } from 'router';

const styles = {
  marginRight: '10px',
};

function App() {
  return (
    <div className="App">
      {routes.map((route, index) => {
        return (
          <NavLink to={route.path} key={index} style={styles}>
            {route.title}
          </NavLink>
        );
      })}
      <AppRouter />
    </div>
  );
}

export default App;
