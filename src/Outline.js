import React, { useState } from 'react'

import { hasOwnProperty } from './hasOwnProperty.js'
import { Link } from './MenuBar.js'

export const Outline = (props) => {
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
        if (hasOwnProperty(row,'path')) {
            return { title: row.title, path: row.path, component: row.component }
        }
    }


    const [curPath, setCurPath] = useState('')

    const items = props.links.filter(getPaths)

    // default to first if no path has been selected (first time in)
    const active = items.find(item => item.path === curPath) || items[0]

    return (
        <div className="sw-outline-flex">
            <div className="sw-outline-margin">
                <ul className="sw-outline-list">
                    {buildMainLink(props.links)}
                </ul>
            </div>
            <div className="sw-outline-selected_item">
                { active.component(props) }
            </div>
        </div>
    )
}
