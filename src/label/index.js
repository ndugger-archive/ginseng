import React from 'react'
import * as Aphrodite from 'aphrodite/no-important'

import BaseGinsengComponent from '../base'

import LabelLink from './link'
import Style from './style'

export default class Label extends BaseGinsengComponent {

	static Link = LabelLink

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
		const labelClassName = `${ Aphrodite.css( Style.label, theme.label ) } ${ className }`

		return (
			<span className={ labelClassName } { ...this.otherProps( ) }>
				{ children }
			</span>
		)
	}
}
