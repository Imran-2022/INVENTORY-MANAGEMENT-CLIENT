import React, { useContext } from 'react';
import { NavLink } from "react-router-dom";
import "./Navigation.css"
import { GrVirtualMachine } from 'react-icons/gr';
import { Dropdown } from 'react-bootstrap';
import { userContext } from '../../Context/Context';
const Navigation = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext)
    const [click, setClick] = React.useState(false);
    const handleClick = () => setClick(!click);
    const Close = () => setClick(false);
    return (
        <div>
            <div className={click ? "main-container" : ""} onClick={() => Close()} />
            <nav className="navbar " onClick={e => e.stopPropagation()}>
                <div className="nav-container">
                    <NavLink to="/" className="nav-logo nav-links"><GrVirtualMachine /> MACHINERY</NavLink>
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <NavLink

                                to="/"
                                activeclassname="active"
                                className="nav-links"
                                onClick={click ? handleClick : null}
                            >
                                HOME
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink

                                to="/blogs"
                                activeclassname="active"
                                className="nav-links"
                                onClick={click ? handleClick : null}
                            >
                                BLOGS
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink

                                to="/about-us"
                                activeclassname="active"
                                className="nav-links"
                                onClick={click ? handleClick : null}
                            >
                                ABOUT US
                            </NavLink>
                        </li>
                        {
                            (JSON.parse(localStorage.getItem('authUser'))?.email || loggedInUser.email) ? <li className="nav-item">
                                <Dropdown >
                                    <Dropdown.Toggle variant="warning" id="dropdown-basic">
                                        MANAGE-INVENTORY
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item><NavLink className='nav-linkss' onClick={click ? handleClick : null} to="manage-items">MANAGE ITEMS</NavLink></Dropdown.Item>
                                        <Dropdown.Item><NavLink className='nav-linkss' onClick={click ? handleClick : null} to="add-items">ADD ITEMS</NavLink></Dropdown.Item>
                                        <Dropdown.Item><NavLink className='nav-linkss' onClick={click ? handleClick : null} to="my-items">MY ITEMS</NavLink></Dropdown.Item>
                                        <Dropdown.Item> <NavLink className='nav-linkss' to="/sign-in" onClick={() => {
                                            setLoggedInUser({})
                                            localStorage.removeItem('authUser')
                                        }}>SIGN OUT</NavLink></Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </li> : <li className="nav-item">
                                <NavLink

                                    to="/sign-in"
                                    activeclassname="active"
                                    className="nav-links"
                                    onClick={click ? handleClick : null}
                                >
                                    Sign In
                                </NavLink>
                            </li>

                        }
                        {

                        }

                    </ul>
                    <div className="nav-icon" onClick={handleClick}>
                        <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
                    </div>
                </div>
            </nav>
        </ div>
    );
};

export default Navigation;