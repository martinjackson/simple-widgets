import React, { useState, useEffect } from 'react';
import { Link } from './MenuBar';

let dropDown = [];

export const NavigateBar = (props) => {
    const [click, setClick] = useState(false);
    const [menuTree, setMenuTree] = useState([]);
    const [render, setRender] = useState(false);

    let count = 0;
    let addition1 = '';
    let addition2 = '';
    let page = '';

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

        for (let i = 0; i < count; i++) {
            dropDown.push(false);
        }
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

        for (let i = 0; i < dropDown.length; i++) {
            dropDown[i] = false;
        }

        setClick(value);
    }

    const forceRender = () => {
        if (render === false) {
            setRender(true);
        } else {
            setRender(false);
        }
    }

    const onMouseEnter = (event, index) => {
        dropDown[index] = true;
        forceRender();
    };

    const onMouseLeave = (index) => {
        if (index === undefined) {
            index = 0;
        }

        for (let i = index; i < dropDown.length; i++) {
            dropDown[i] = false;
        }

        forceRender();
        setClick(false);
    };

    const buildDropDowns = (row, index) => {
        let name = null;
        if (row.hasOwnProperty('title')) {
            name = row.title.replace(' ', '_') + index;
        }

        let navItem = 'nav-item';
        let navMargin = ' dropdown-menu2-horizontal';
        if (props.type === 'vertical') {
            navItem = 'nav-item-vertical';
            navMargin = ' dropdown-menu2-vertical';
        }

        if (row.hasOwnProperty('submenu')) {
            return (<li
                            key={name}
                            className={navItem}
                            onMouseEnter={(event) => onMouseEnter(event, row.index)}
                            onMouseLeave={(event) => onMouseLeave(row.index)}>
                                <Link className='nav-links'>
                                    {page + row.title + addition1}
                                </Link>
                                { (dropDown[row.index] === true) ?
                                    <ul
                                        onClick={() => handleClickDD(row.index)}
                                        className={click ? 'dropdown-menu2 clicked' + navMargin : 'dropdown-menu2' + navMargin}>
                                        {row.submenu.map(buildDropDowns)}
                                    </ul> : <></> }
                    </li> )
        } else if (row.hasOwnProperty('title')) {
            return (<li key={name}>
                            <Link
                                className="dropdown-link"
                                to={row.path}>
                                {page + row.title}
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
                                    {page + row.title + addition2}
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
                                    {page + row.title}
                                </Link>
                        </li> )
            }
        })
    }

    if (props.page === true) {
        page = '📄';
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
    let open = '';
    let menuIcon = null;
    if (props.type === 'horizontal') {
        navType = ' nav-menu-horizontal';
        if (props.open === 'horizontal' || props.open === 'slide') {
            open = 'navbar nav-horiz-open-horizontal';
        } else if (props.open === 'always') {
            open = 'navbar';
        }
    } else if (props.type === 'vertical') {
        navType = ' nav-menu-vertical';
        if (props.open === 'both') {
            open = `nav-menu-vertical-pad navbar_vertical nav-open-both nav-vertical`;
        } else if (props.open === 'horizontal' || props.open === 'slide') {
            open = `nav-menu-vertical-pad navbar_vertical nav-open-horizontal nav-vertical`;
        } else if (props.open === 'vertical') {
            open = `nav-menu-vertical-pad navbar_vertical nav-vertical nav-open-vertical`;
        } else if (props.open === 'always') {
            open = `navbar_vertical nav-vertical nav_menu_vertical_pad_always`;
        }
    }

    if (props.open !== 'always') {
        menuIcon = <div className="nav-center">&#x2630;</div>
    }

    const disabled = (props.disabled) ? true : null
    return (
        <nav className={'nav-nav-menu ' + open} disabled={disabled}>
            {menuIcon}
            <ul className={click ? 'nav-menu active' + navType : 'nav-menu' + navType}>
                {buildMainMenu(menuTree)}
            </ul>
        </nav>
    )
}

