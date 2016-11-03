import React, { Component } from 'react'
import * as Aphrodite from 'aphrodite/no-important'

import BaseGinsengComponent from '../base'

import Style from './style'

export default class Toolbar extends BaseGinsengComponent {

    static Separator ( props ) {
        const { className = '', style = { } } = props
        const separatorClassName = `${ Aphrodite.css( Style.toolbarSeparator ) } ${ className }`

        return (
            <div className={ separatorClassName }/>
        )
    }

    render ( ) {
        const { children, className = '', style = { } } = this.props
        const toolbarClassName = `${ Aphrodite.css( Style.toolbar ) } ${ className }`

        return (
            <nav className={ toolbarClassName } style={ style } { ...this.otherProps( ) }>
                { children }
            </nav>
        )
    }
}
