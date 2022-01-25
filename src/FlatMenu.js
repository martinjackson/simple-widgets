import { set } from 'js-cookie';
import React, {useEffect} from 'react'
import { atom, useRecoilState, useRecoilValue } from 'recoil';

export const menuState = atom({
    key: 'menuState', // unique ID (with respect to other atoms/selectors)
    default: '', // default value (aka initial value)
  });

const menuParms = atom({
    key: 'menuParms', // unique ID (with respect to other atoms/selectors)
    default: {}, // default value (aka initial value)
  });


export const useMenuParms = () => {
    return useRecoilValue(menuParms)
}

export const Redirect = (props) => {
    const [curMenuPath, setCurMenuPath] = useRecoilState(menuState);
    const [curMenuParms, setCurMenuParms] = useRecoilState(menuParms);

    useEffect(() => {
        setCurMenuPath(props.to)
        setCurMenuParms(props.parms)
    }, [])

    return <></>
}

export const Link = (props) => {
    const [curMenuPath, setCurMenuPath] = useRecoilState(menuState);
    const [curMenuParms, setCurMenuParms] = useRecoilState(menuParms);

    if (!props.to || props.to === "")
       return <span className="nav-links">{props.children}</span>

    const click = (e) => {
        e.preventDefault();
        console.log(`You clicked ${props.to}`);
        setCurMenuPath(props.to)
        setCurMenuParms(props.parms)
    }

    const cname = props.className || ""

    return <span className={'nav-links '+cname} href={props.to} onClick={click}>{props.children}</span>
}

export const FlatMenu = (props) => {

    const [curMenuPath, setCurMenuPath] = useRecoilState(menuState);

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

