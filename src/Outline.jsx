import React, { useState, useRef, useEffect } from 'react'

import { hasOwnProperty, Link } from './index.js'

export const Outline = (props) => {
    const outlineRef = useRef();

    const [outlineHeight, setOutlineHeight] = useState(0);
    const [curPath, setCurPath] = useState('')

    useEffect (() => {
        if (hasOwnProperty(props, 'scroll') === true) {
            setOutlineHeight(window.innerHeight - outlineRef.current.offsetTop - 5);
        }
    }, []);

    function reportWindowSize() {
        setOutlineHeight(window.innerHeight - outlineRef.current.offsetTop - 5)
    }

    if (hasOwnProperty(props, 'scroll') === true) {
        window.onresize = reportWindowSize;
    }

    const buttonClick = (path) => {
        setCurPath(path)
    }

    const buildMainLink = (links) => {
        let disabled = false
        let buttonClass = 'sw-outline-button'
        if (hasOwnProperty(props, 'disabled')) {
            disabled = props.disabled
            buttonClass = (disabled === true) ? 'sw-outline-button_disable' : 'sw-outline-button'
        }

        return links.map ((row, i) => {
            let fontClass = 'sw-outline-font_plain'
            if (hasOwnProperty(row,'textStyle')) {
                if (row.textStyle === 'bold') {
                    fontClass = 'sw-outline-font_bold'
                } else if (row.textStyle === 'italic') {
                    fontClass = 'sw-outline-font_italic'
                }
            }

            let indentClass = ''
            if (hasOwnProperty(row,'indent') && row.indent === true) {
                indentClass = 'sw-outline-indent_normal'
            }

            if (hasOwnProperty(row,'spacing')) {
                let root = document.documentElement
                root.style.setProperty(`--sw-outline-indentation_amount`, row.spacing)
                indentClass = 'sw-outline-indent_spacing'
            }

            if (hasOwnProperty(row,'path')) {
                if (hasOwnProperty(row,'type') && row.type === 'new') {
                    return  <li key={i} className={`${indentClass}`} >
                                <div className={`${buttonClass} ${fontClass}`} >
                                    <Link to={row.path}>{row.title}</Link>
                                </div>
                            </li>

                } else {  // type defaults to side
                    return  <li key={i} className={`${indentClass}`}>
                                <button className={`${fontClass} ${buttonClass}`} disabled={disabled} onClick={() => buttonClick(row.path)}>{row.title}</button>
                            </li>
                }
            } else {
                return  <li key={i} className={`sw-outline-item ${fontClass} ${indentClass}`}>{row.title}</li>
            }
        })
    }

    const getPaths = (row) => {
        if (hasOwnProperty(row,'path') === true) {
            return { title: row.title, path: row.path, component: row.component }
        }
    }


    const items = props.links.filter(getPaths)

    // default to first if no path has been selected (first time in)
    const active = items.find(item => item.path === curPath) || ((props.nodefaultpage === true) ? null : items[0]);
//    const active = items.find(item => item.path === curPath) || items[0];

    let divList = null;
    if (hasOwnProperty(props, 'scroll') === true) {
        divList =   <div ref={outlineRef} style={{ height: outlineHeight }}
                        className="sw-outline-margin sw-outline-scroll">
                            <ul className="sw-outline-list">
                                {buildMainLink(props.links)}
                            </ul>
                    </div>;
    } else {
        divList =   <div className="sw-outline-margin">
                        <ul className="sw-outline-list">
                            {buildMainLink(props.links)}
                        </ul>
                    </div>;
    }

    return (
        <div className="sw-outline-flex">
            {divList}
            <div className="sw-outline-selected_item">
                { (active !== null) ? active.component(props) : null }
            </div>
        </div>
    )
}
