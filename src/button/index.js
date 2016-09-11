import React from 'react'
import Aphrodite from 'aphrodite'

import BaseComponent from '../base'
import Style from './style'

export default class Button extends BaseComponent {

    state = { active: false }

    render ( ) {
        const { active, children, eventHandlers } = this.props

        return (
            <button className={ Aphrodite.css( Style.button, active && Style.button__active ) } { ...eventHandlers }>
                { children }
            </button>
        )
    }
}
