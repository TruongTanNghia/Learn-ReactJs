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
          <NavlinkActive to="hooks"> Hook</NavlinkActive>
          <ul className="sub-menu2">
            <li className="thefirst">
              <NavlinkActive to="hooks/useState"> useState</NavlinkActive>
              <ul className="sub-menu3">
                <li>
                  <NavlinkActive to="hooks/useState/bai1useState">Exercise 1</NavlinkActive>
                </li>
                <li>
                  <NavlinkActive to="hooks/useState/bai2useState">Exercise 2</NavlinkActive>
                </li>
                <li>
                  <NavlinkActive to="hooks/useState/bai3useState">Exercise 3</NavlinkActive>
                </li>
              </ul>
            </li>
            <li className="thefirst">
              <NavlinkActive to="hooks/useEffect"> useEffect</NavlinkActive>
              <ul className="sub-menu3">
                <li>
                  <NavlinkActive to="hooks/useEffect/bai1useEffect">Exercise 1</NavlinkActive>
                </li>
                <li>
                  <NavlinkActive to="hooks/useEffect/bai2useEffect">Exercise 2</NavlinkActive>
                </li>
                <li>
                  <NavlinkActive to="hooks/useEffect/bai4useEffect">Exercise 4</NavlinkActive>
                </li>
              </ul>
            </li>

            <li className="thefirst">
              <NavlinkActive to="hooks/useRef"> useRef </NavlinkActive>
              <ul className="sub-menu3">
                <li>
                  <NavlinkActive to="hooks/useRef/bai1UseRef">Exercise 1</NavlinkActive>
                </li>
                <li>
                  <NavlinkActive to="hooks/useRef/bai2UseRef">Exercise 2</NavlinkActive>
                </li>
                <li>
                  <NavlinkActive to="hooks/useRef/bai3useRef">Exercise 3</NavlinkActive>
                </li>
                <li>
                  <NavlinkActive to="hooks/useRef/bai4useRef">Exercise 4</NavlinkActive>
                </li>
                <li>
                  <NavlinkActive to="hooks/useRef/bai5useRef">Exercise 5</NavlinkActive>
                </li>
                <li>
                  <NavlinkActive to="hooks/useRef/bai6useRef">Exercise 6</NavlinkActive>
                </li>
              </ul>
            </li>
            <li className="thefirst">
              <NavlinkActive to="hooks/useReducer"> useReducer </NavlinkActive>
              <ul className="sub-menu3">
                <li>
                  <NavlinkActive to="hooks/useReducer/bai1UseReducer/">Exercise 1</NavlinkActive>
                </li>
                {/* <li>
              <NavlinkActive to="useRef/bai2UseRef">Exercise 2</NavlinkActive>
            </li> */}
              </ul>
            </li>

            <li className="thefirst">
              <NavlinkActive to="projects/projects1">TodoList</NavlinkActive>
            </li>
          </ul>
        </li>
        <li className="thefirst">
          <NavlinkActive to="libs"> Libs </NavlinkActive>
          <ul className="sub-menu2">
            <li className="thefirst">
              <NavlinkActive to="libs/redux"> React-Redux </NavlinkActive>
              <ul className="sub-menu3">
                <li>
                  <NavlinkActive to="libs/redux/bai1Redux">Exercise 1</NavlinkActive>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </>
  );
};

export default NavBar;
