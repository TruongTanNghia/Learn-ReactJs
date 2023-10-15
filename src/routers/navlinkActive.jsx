import { NavLink } from 'react-router-dom';

const navlinkActive = (probs) => {
  return (
    <NavLink
      style={({ isActive }) => {
        return isActive ? { color: 'red' } : {};
      }}
      {...probs}
    />
  );
};

export default navlinkActive;
