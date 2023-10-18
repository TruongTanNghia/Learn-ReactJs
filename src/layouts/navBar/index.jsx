import NavlinkActive from '@/routers/navlinkActive';

import './navbar.css';
const NavBar = () => {
  return (
    <>
      <ul className="display">
        <li className="thefirst">
          <NavlinkActive to=""> Home </NavlinkActive>
        </li>
        <li className="thefirst">
          <NavlinkActive to="useState"> useState</NavlinkActive>
          <ul className="sub-menu2">
            <li>
              <NavlinkActive to="useState/bai1useState">Exercise 1</NavlinkActive>
            </li>
            <li>
              <NavlinkActive to="useState/bai2useState">Exercise 2</NavlinkActive>
            </li>
            <li>
              <NavlinkActive to="useState/bai3useState">Exercise 3</NavlinkActive>
            </li>
          </ul>
        </li>
        <li className="thefirst">
          <NavlinkActive to="useEffect"> useEffect</NavlinkActive>
          <ul className="sub-menu2">
            <li>
              <NavlinkActive to="useEffect/bai1useEffect">Exercise 1</NavlinkActive>
            </li>
            <li>
              <NavlinkActive to="useEffect/bai2useEffect">Exercise 2</NavlinkActive>
            </li>
            <li>
              <NavlinkActive to="useEffect/bai4useEffect">Exercise 4</NavlinkActive>
            </li>
          </ul>
        </li>
        <li className="thefirst">
          <NavlinkActive to="useRef"> useRef </NavlinkActive>
          <ul className="sub-menu2">
            <li>
              <NavlinkActive to="useRef/bai1UseRef">Exercise 1</NavlinkActive>
            </li>
          </ul>
        </li>
        <li className="thefirst">
          <NavlinkActive to="projects/projects1">TodoList</NavlinkActive>
        </li>
      </ul>
    </>
  );
};

export default NavBar;
