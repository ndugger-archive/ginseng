import React from 'react'
import * as Aphrodite from 'aphrodite/no-important'

import BaseGinsengComponent from '../base'
import ButtonGroup from './group'
import Style from './style'

export default class Button extends BaseGinsengComponent {

    static Group = ButtonGroup

    render ( ) {
        const { active, children, className, style } = this.props
        const buttonClassName = `${ Aphrodite.css( Style.button, active && Style.button__active ) } ${ className }`

        return (
            <button className={ buttonClassName } style={ style } { ...this.otherProps( ) }>
                { children }
            </button>
        )
    }
}
