import React, { useState, useEffect } from 'react';
import { Link } from "./MenuUtils";

const NavigateBar = (props) => {
    const [dropDown, setDropDown] = useState([]);
    const [click, setClick] = useState(false);
    const [menuTree, setMenuTree] = useState([]);

    let count = 0;
    let addition1 = '';
    let addition2 = '';

    const buildTree = (menuTree) => {
        for (let i = 0; i < menuTree.length; i++) {
            if (menuTree[i].hasOwnProperty('submenu')) {
                menuTree[i]['index'] = count;
                count++;
                buildTree(menuTree[i].submenu);
            }
        }

        return menuTree;
    }

    useEffect(() => {
        let menu = props.menuTree;
        count = menu.length;
        setMenuTree(buildTree(menu));
        let drop = [];
        for (let i = 0; i < count; i++) {
            drop.push(false);
        }

        setDropDown(drop);
    }, [props.menuTree]);

    const handleClick = () => {
        let value = true;
        if (click === true) {
            value = false;
        }
        setClick(value);
    }

    const handleClickDD = (index) => {
        let value = true;
        if (click === true) {
            value = false;
        }

        let localDD = [...dropDown];

        for (let i = 0; i < localDD.length; i++) {
            localDD[i] = false;
        }

        setDropDown(localDD);
        setClick(value);

//        let localDD = [...dropDown];
//        localDD[index] = false;

//        setDropDown(localDD);
    }

    const onMouseEnter = (event, index) => {
        let localDD = [...dropDown];

        localDD[index] = true;
        setDropDown(localDD);
    };

    const onMouseLeave = (index) => {
        let localDD = [...dropDown];

        for (let i = index; i < localDD.length; i++) {
            localDD[i] = false;
        }

        setDropDown(localDD);
        setClick(false);
    };

    const buildDropDowns = (row, index) => {
        let name = null;
        if (row.hasOwnProperty('title')) {
            name = row.title.replace(' ', '_') + index;
        }

        let navItem = 'nav-item'
        if (props.type === 'vertical') {
            navItem = 'nav-item-vertical';
        }

        if (row.hasOwnProperty('submenu')) {
            return (<li
                            key={name}
                            className={navItem}
                            onMouseEnter={(event) => onMouseEnter(event, row.index)}
                            onMouseLeave={() => onMouseLeave(row.index)}>
                                <Link className='nav-links'>
                                    {row.title + addition1}
                                </Link>
                                { (dropDown[row.index] === true) ?
                                    <ul
                                        onClick={() => handleClickDD(row.index)}
                                        className={click ? 'dropdown-menu2 clicked' : 'dropdown-menu2'}>
                                        {row.submenu.map(buildDropDowns)}
                                    </ul> : <></> }
                    </li> )
        } else if (row.hasOwnProperty('title')) {
            return (<li key={name}>
                            <Link
                                className="dropdown-link"
                                to={row.path}>
                                    {row.title}
                            </Link>
                    </li> )
        }
    }

    const buildMainMenu = (menuTree) => {
        return menuTree.map((row, index) => {
            let name = '';
            if (row.hasOwnProperty('title')) {
                name = row.title.replace(' ', '_') + index;
            }

            let navItem = 'nav-item'
            if (props.type === 'vertical') {
                navItem = 'nav-item-vertical';
            }
    
            let dropDownType = '';
            if (props.type === 'horizontal') {
                dropDownType = ' dropdown-menu-horizontal';
            } else if (props.type === 'vertical') {
                dropDownType = ' dropdown-menu-vertical';
            }

            if (row.hasOwnProperty('submenu')) {
                return ( <li
                                key={name}
                                className={navItem}
                                onMouseEnter={(event) => onMouseEnter(event, index)}
                                onMouseLeave={() => onMouseLeave(index)}>
                                <Link className='nav-links'>
                                    {row.title + addition2}
                                </Link>
                                { (dropDown[index] === true) ?
                                    <ul
                                        onClick={() => handleClick()}
                                        className={click ? 'dropdown-menu clicked' + dropDownType : 'dropdown-menu' + dropDownType}>
                                        {row.submenu.map(buildDropDowns)}
                                    </ul> : <></>
                                }
                            </li> )
            } else if (row.hasOwnProperty('title')) {
                return (<li key={name}
                            className={navItem}>
                                <Link to={row.path} className='nav-links'>
                                    {row.title}
                                </Link>
                        </li> )
            }
        })
    }

    if (props.symbol === 'arrow') {
        addition1 = ' \u2BC8';
    } else if (props.symbol === 'dots') {
        addition1 = ' \u2026';
    } else if (props.symbol !== 'none') {
        addition1 = ' ' + props.symbol;
    }

    if (props.subsymbol === 'arrow') {
        addition2 = ' \u25BC';
    } else if (props.subsymbol !== 'none') {
        addition2 = ' ' + props.subsymbol;
    }

    let navType = '';
    let openType = '';
    let menuIcon = null;
    if (props.type === 'horizontal') {
        navType = ' nav-menu-horizontal';
        openType = 'navbar'
    } else if (props.type === 'vertical') {
        navType = ' nav-menu-vertical';
        if (props.openType === 'both') {
            openType = `navbar_vertical nav-open-both nav-vertical`;
        } else if (props.openType === 'horizontal') {
            openType = `navbar_vertical nav-open-horizontal nav-vertical`;
        } else if (props.openType === 'vertical') {
            openType = `navbar_vertical nav-vertical nav-open-vertical`;
        } else if (props.openType === 'none') {
            openType = `navbar_vertical nav-vertical`;
        }

        if (props.openType !== 'none') {
            menuIcon = <div className="nav-center">&#x2630;</div>
        }
    }

    return (
        <nav className={openType}>
            {menuIcon}
            <ul className={click ? 'nav-menu active' + navType : 'nav-menu' + navType}>
                {buildMainMenu(menuTree)}
            </ul>
        </nav>
    )
}

export default NavigateBar;