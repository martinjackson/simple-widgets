import React from 'react';

import { openGeneralStore } from './generalStore'

import NavigateBar from './NavigateBar';

export const MenuBar = (props) => {

    const gs = openGeneralStore()
    const [curMenuPath, setCurMenuPath] = gs.useMenuState();

    const getPaths = (row) => {
        if (row.hasOwnProperty('submenu')) {
            return row.submenu.map(getPaths).flat();
        } else {
            return { path: row.path, component: row.component }
        }
    }

    let subSymbol = 'none';
    if (props.hasOwnProperty('subsymbol')) {
        subSymbol = props.subsymbol;
    }

    let symbol = 'none';
    if (props.hasOwnProperty('symbol')) {
        symbol = props.symbol;
    }

    let type = 'horizontal';
    if (props.hasOwnProperty('type')) {
        type = props.type;
        if (type !== 'horizontal' && type !== 'vertical') {
            type = 'horizontal';
        }
    }

    let openType = 'none';
    if (props.hasOwnProperty('openType')) {
        openType = props.openType;
        if (openType !== 'none' && 
            openType !== 'horizontal' && openType !== 'vertical' && 
            openType !== 'both') {
            openType = 'none';
        }
    }

    let noSide = false;
    if (props.hasOwnProperty('noSide')) {
        noSide = true;
    } else if (type === 'horizontal') {
        noSide = true;
    }

    const items = props.menuTree.map(mi => getPaths(mi)).flat()
    const active = items.find(item => item.path === curMenuPath) || items[0]

    const classStyle = (noSide === true) ? "" : "menubar";

    return (
        <div className={classStyle}>
            <NavigateBar menuTree={props.menuTree} symbol={symbol} subsymbol={subSymbol} type={type} openType={openType} />
            {active.component()}
        </div>
    )
}