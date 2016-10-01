import React, { Component } from 'react'
import * as Aphrodite from 'aphrodite/no-important'

import Style from './style'

export default class Toolbar extends Component {

    static Separator ( props ) {
        const { className = '', style = { } } = props
        const separatorClassName = `${ Aphrodite.css( Style.toolbarSeparator ) } ${ className }`

        return (
            <div className={ separatorClassName }/>
        )
    }

    render ( ) {
        const { children, className = '', eventHandlers = { }, style = { } } = this.props
        const toolbarClassName = `${ Aphrodite.css( Style.toolbar ) } ${ className }`

        return (
            <nav className={ toolbarClassName } style={ style } { ...eventHandlers }>
                { children }
            </nav>
        )
    }
}
