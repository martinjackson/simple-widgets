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

    const items = props.menuTree.map(mi => getPaths(mi)).flat()
    const active = items.find(item => item.path === curMenuPath) || items[0]

    return (
        <div>
            <NavigateBar menuTree={props.menuTree} symbol={symbol} subsymbol={subSymbol} />
            {active.component()}
        </div>
    )
}