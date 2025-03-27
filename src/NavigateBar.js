import React, { useState, useEffect } from 'react';
import { Link } from './MenuBar';

import { hasOwnProperty } from './hasOwnProperty.js'


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
            if (hasOwnProperty(menuTree[i], 'submenu')) {
                menuTree[i]['index'] = count;
                count++;
                buildTree(menuTree[i].submenu);
            }
        }

        return menuTree;
    }

    useEffect(() => {
        let menu = props.menuTree;
        setMenuTree(buildTree(menu));

        for (let i = 0; i < menu.length; i++) {
            dropDown.push(false);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.menuTree]);

    const handleClick = () => {
        let value = true;
        if (click === true) {
            value = false;
        }
        setClick(value);
    }

    const handleClickDD = (_index) => {
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
        if (hasOwnProperty(row, 'title')) {
            name = row.title.replace(' ', '_') + index;
        }

        let navItem = 'sw-nav-item';
        let navMargin = ' sw-dropdown-menu2-horizontal';
        if (props.type === 'vertical') {
            navItem = 'sw-nav-item-vertical';
            navMargin = ' sw-dropdown-menu2-vertical';
        }

        if (hasOwnProperty(row, 'submenu')) {
            return (<li
                            key={name}
                            className={navItem}
                            onMouseEnter={(event) => onMouseEnter(event, row.index)}
                            onMouseLeave={(_event) => onMouseLeave(row.index)}>
                                <Link
                                  className='sw-nav-links'
                                  title={props.title}   >
                                    {page + row.title + addition1}
                                </Link>
                                { (dropDown[row.index] === true) ?
                                    <ul
                                        onClick={() => handleClickDD(row.index)}
                                        className={click ? 'sw-dropdown-menu2 clicked' + navMargin : 'sw-dropdown-menu2' + navMargin}>
                                        {row.submenu.map(buildDropDowns)}
                                    </ul> : <></> }
                    </li> )
        } else if (hasOwnProperty(row, 'title')) {
            return (<li key={name}>
                            <Link
                                className="sw-dropdown-link"
                                title={props.title}
                                to={row.path}       >
                                {page + row.title}
                            </Link>
                    </li> )
        }
    }

    const buildMainMenu = (menuTree) => {
        return menuTree.map((row, index) => {
            let name = '';
            if (hasOwnProperty(row, 'title')) {
                name = row.title.replace(' ', '_') + index;
            }

            let navItem = 'sw-nav-item'
            if (props.type === 'vertical') {
                navItem = 'sw-nav-item-vertical';
            }

            let dropDownType = '';
            if (props.type === 'horizontal') {
                dropDownType = ' sw-dropdown-menu-horizontal';
            } else if (props.type === 'vertical') {
                dropDownType = ' sw-dropdown-menu-vertical';
            }

            if (hasOwnProperty(row, 'submenu')) {
                return ( <li
                                key={name}
                                className={navItem}
                                onMouseEnter={(event) => onMouseEnter(event, index)}
                                onMouseLeave={() => onMouseLeave(index)}>
                                <Link
                                  className='sw-nav-links'
                                  title={props.title}   >
                                    {page + row.title + addition2}
                                </Link>
                                { (dropDown[index] === true) ?
                                    <ul
                                        onClick={() => handleClick()}
                                        className={click ? 'sw-dropdown-menu clicked' + dropDownType : 'sw-dropdown-menu' + dropDownType}>
                                        {row.submenu.map(buildDropDowns)}
                                    </ul> : <></>
                                }
                            </li> )
            } else if (hasOwnProperty(row, 'title')) {
                return (<li key={name}
                            className={navItem}>
                                <Link
                                   to={row.path}
                                   className='sw-nav-links'
                                   title={props.title}   >
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
        navType = ' sw-nav-menu-horizontal';
        if (props.open === 'horizontal' || props.open === 'slide') {
            open = 'sw-navbar sw-nav-horiz-open-horizontal';
        } else if (props.open === 'always') {
            open = 'sw-navbar';
        }
    } else if (props.type === 'vertical') {
        navType = ' sw-nav-menu-vertical';
        if (props.open === 'both') {
            open = `sw-nav-menu-vertical-pad sw-navbar_vertical sw-nav-open-both sw-nav-vertical`;
        } else if (props.open === 'horizontal' || props.open === 'slide') {
            open = `sw-nav-menu-vertical-pad sw-navbar_vertical sw-nav-open-horizontal sw-nav-vertical`;
        } else if (props.open === 'vertical') {
            open = `sw-nav-menu-vertical-pad sw-navbar_vertical sw-nav-vertical sw-nav-open-vertical`;
        } else if (props.open === 'always') {
            open = `sw-navbar_vertical sw-nav-vertical sw-nav_menu_vertical_pad_always`;
        }
    }

    if (props.open !== 'always') {
        menuIcon = <div className="sw-nav-center">&#x2630;</div>
    }

    const disabled = (props.disabled) ? true : null
    return (
        <nav className={`${props.formatClass} ${open}`} disabled={disabled}>
            {menuIcon}
            <ul className={click ? 'sw-nav-menu active' + navType : 'sw-nav-menu' + navType}>
                {buildMainMenu(menuTree)}
            </ul>
        </nav>
    )
}

