import React, { useState, useEffect } from 'react';
import { Link, hasOwnProperty } from './index.js'


let menuDropDown123 = [];
let menuStopCount123 = 0;

export const NavigateBar = (props) => {
    const STOP_VALUE = 4;

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
            menuDropDown123.push(false);
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

        for (let i = 0; i < menuDropDown123.length; i++) {
            menuDropDown123[i] = false;
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

/*    maj 2025-06-02 not used
    const calculateSubmenuPositionTop = (event, length) => {
        let subMenuHeight = event.target.offsetHeight * length;

        if ((event.target.offsetTop + subMenuHeight) > window.innerHeight - 100) {
            let newTop = event.target.offsetTop - subMenuHeight + event.target.offsetHeight;
            let cssRoot = document.querySelector(':root');
            cssRoot.style.setProperty('--sw-menu_top', `${newTop}px`);
        } else {
            let cssRoot = document.querySelector(':root');
            cssRoot.style.setProperty('--sw-menu_top', 'none');
        }
    }
*/
    const calculateSubmenuPositionBot = (event, length) => {
        let subMenuHeight = (event.target.offsetHeight) * length;

        if ((event.target.offsetTop + subMenuHeight) > window.innerHeight - 100) {
            let newBottom =  window.innerHeight - event.target.offsetTop - event.target.offsetHeight;
            if (window.screen.availHeight <= 1080) {
                newBottom -= 10;
            }

            if ((window.innerHeight - (newBottom + subMenuHeight + event.target.offsetHeight) < 0)) {
                let cssRoot = document.querySelector(':root');
                cssRoot.style.setProperty('--sw-menu_bottom', 'none');
            } else {
                let cssRoot = document.querySelector(':root');
                cssRoot.style.setProperty('--sw-menu_bottom', `${newBottom}px`);
            }
        } else {
            let cssRoot = document.querySelector(':root');
            cssRoot.style.setProperty('--sw-menu_bottom', 'none');
        }
    }

    const onMouseEnter = (event, index, length) => {
//        console.log('event :', event);
//        calculateSubmenuPositionTop(event, length);
        calculateSubmenuPositionBot(event, length);
        menuDropDown123[index] = true;
        forceRender();
    };

    const onMouseLeave = (index) => {
        if (index === undefined) {
            index = 0;
        }

        for (let i = index; i < menuDropDown123.length; i++) {
            menuDropDown123[i] = false;
        }

        setClick(false);

        menuStopCount123++;
        if (props.type === 'vertical' && menuStopCount123 === STOP_VALUE) {
            menuStopCount123 = 0;
        } else {
            forceRender();
        }
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
                            onMouseEnter={(event) => onMouseEnter(event, row.index, row.submenu.length)}
                            onMouseLeave={(_event) => onMouseLeave(row.index)}>
                                <Link
                                  className='sw-nav-links'
                                  title={props.title}   >
                                    {page + row.title + addition1}
                                </Link>
                                { (menuDropDown123[row.index] === true) ?
                                    <ul
                                        onClick={() => handleClickDD(row.index)}
                                        className={click ? 'sw-dropdown-menu2 clicked ' + navMargin : 'sw-dropdown-menu2 ' + navMargin}>
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
                                onMouseEnter={(event) => onMouseEnter(event, index, row.submenu.length)}
                                onMouseLeave={() => onMouseLeave(index)}>
                                <Link
                                  className='sw-nav-links'
                                  title={props.title}   >
                                    {page + row.title + addition2}
                                </Link>
                                { (menuDropDown123[index] === true) ?
                                    <ul
                                        onClick={() => handleClick()}
                                        className={click ? 'sw-dropdown-menu clicked ' + dropDownType : 'sw-dropdown-menu ' + dropDownType}>
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

