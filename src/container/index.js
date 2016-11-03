import React from 'react'
import * as Aphrodite from 'aphrodite/no-important'

import BaseGinsengComponent from '../base'

import Style from './style'

export default class Container extends BaseGinsengComponent {

	static contextTypes = {
		theme: React.PropTypes.object
	}

	static defaultProps = {
		className: '',
		style: { }
	}

	render ( ) {
		const { theme } = this.context
		const { children, className, style } = this.props
		const containerClassName = `${ Aphrodite.css( Style.container, theme.container ) } ${ className }`

		return (
			<section className={ containerClassName } style={ style } { ...this.otherProps( ) }>
				{ children }
			</section>
		)
	}
}
