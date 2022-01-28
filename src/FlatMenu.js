import React from 'react'

import { openGeneralStore } from './generalStore'

import { Link } from './MenuUtils'

export const FlatMenu = (props) => {

  const gs = openGeneralStore()     
  const [curMenuPath, setCurMenuPath] = gs.useMenuState()

    const items = props.menuItems

    // default to first if no path has been selected (first time in)
    const active = items.find(item => item.path === curMenuPath) || items[0]

    const named = items.filter(item => item.title)

    return <div>
                <nav>
                    <ul>
                        {
                          named.map((n, key) => (
                            <li key={key}>
                                <Link to={n.path}>{n.title}</Link>
                            </li>
                          ))
                        }
                    </ul>
                </nav>
                <hr />
                {active.component()}
            </div>


}

