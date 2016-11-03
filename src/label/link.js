import React from 'react'
import * as Aphrodite from 'aphrodite/no-important'

import BaseGinsengComponent from '../base'

import Style from './style'

export default class Label extends BaseGinsengComponent {

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
		const labelClassName = `${ Aphrodite.css( Style.labelLink, theme.labelLink ) } ${ className }`

		return (
			<span className={ labelClassName } { ...this.otherProps( ) }>
				{ children }
			</span>
		)
	}
}
