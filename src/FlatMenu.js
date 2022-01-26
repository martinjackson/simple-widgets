import React, {useEffect} from 'react'

import { useMenuState } from './MenuUtils'

export const FlatMenu = (props) => {

    const [curMenuPath, setCurMenuPath] = useMenuState();

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

