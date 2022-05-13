import React, { useState } from 'react';
import { Link } from './MenuUtils';

const Outline = (props) => {
    const buttonClick = (path) => {
        setCurPath(path);
    }
    
    const buildMainLink = (links) => {
        let disabled = false;
        let buttonClass = 'sw-outline-button';
        if (props.hasOwnProperty('disabled')) {
            disabled = props.disabled;
            buttonClass = 'sw-outline-button_disable'
        }

        return links.map ((row, i) => {
            let fontClass = 'sw-outline-font_plain';
            if (row.hasOwnProperty('textStyle')) {
                if (row.textStyle === 'bold') {
                    fontClass = 'sw-outline-font_bold';
                } else if (row.textStyle === 'italic') {
                    fontClass = 'sw-outline-font_italic';
                }
            }
    
            let indentClass = '';
            if (row.hasOwnProperty('indent') && row.indent === true) {
                indentClass = 'sw-outline-indent_normal';
            }
    
            if (row.hasOwnProperty('spacing')) {
                let root = document.documentElement;
                root.style.setProperty(`--indentation_amount`, row.spacing);
                indentClass = 'sw-outline-indent_spacing';
            }
    
            if (row.hasOwnProperty('path')) {
                if (row.hasOwnProperty('type') && row.type === 'new') {
                    return  <li key={i} className={`${fontClass} ${indentClass}`} >
                                <div className={buttonClass}>
                                    <Link to={row.path}>{row.title}</Link>
                                </div>
                            </li>

                } else {  // type defaults to side
                    return  <li key={i} className={`${fontClass} ${indentClass}`}>
                                <button className={buttonClass} disabled={disabled} onClick={() => buttonClick(row.path)}>{row.title}</button>
                            </li>
                }
            } else {
                return  <li key={i} className={`sw-outline-item ${fontClass} ${indentClass}`}>{row.title}</li>
            }
        })
    }
    
    const getPaths = (row) => {
        if (row.hasOwnProperty('path')) {
            return { title: row.title, path: row.path, component: row.component }
        }
    }
    
    
    const [curPath, setCurPath] = useState('');

    const items = props.links.filter(getPaths);

    // default to first if no path has been selected (first time in)
    const active = items.find(item => item.path === curPath) || items[0]

    return (
        <div className="sw-outline-flex">
            <div className="sw-outline-margin">
                <ul className="sw-outline-list">
                    {buildMainLink(props.links)}
                </ul>
            </div>
            <div>
                { active.component() }
            </div>
        </div>
    )
}

export default Outline;