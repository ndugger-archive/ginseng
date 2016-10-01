import React from 'react'
import * as Aphrodite from 'aphrodite/no-important'

import BaseGinsengComponent from '../base'
import Style from './style'

export default class ButtonGroup extends BaseGinsengComponent {

	render ( ) {
		const { children, className = '', style = { } } = this.props
        const buttonGroupClassName = `${ Aphrodite.css( Style.buttonGroup ) } ${ className }`

        return (
            <section className={ buttonGroupClassName } style={ style } { ...this.otherProps( ) }>
                { children }
            </section>
        )
	}
}
