import React from 'react'
import * as Aphrodite from 'aphrodite/no-important'

import BaseGinsengComponent from '../base'
import Style from './style'

export default class App extends BaseGinsengComponent {

	render ( ) {
		const { children, className = null, style = { } } = this.props
		const appClassName = `${ Aphrodite.css( Style.app ) } ${ className }`

		return (
			<main role='main' className={ appClassName } style={ style } { ...this.otherProps( ) }>
				{ children }
			</main>
		)
	}
}
