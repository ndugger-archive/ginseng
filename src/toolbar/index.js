import React from 'react'
import Aphrodite from 'aphrodite'

import BaseComponent from '../base'
import Style from './style'

export default class Toolbar extends BaseComponent {

    static Separator ( ) {
        return (
            <div className={ Aphrodite.css( Style.toolbarSeparator ) }/>
        )
    }

    render ( ) {
        const { children, eventHandlers } = this.props

        return (
            <section className={ Aphrodite.css( Style.toolbar ) } { ...eventHandlers }>
                { children }
            </section>
        )
    }
}
