import React from 'react'
import * as Aphrodite from 'aphrodite/no-important'

import BaseGinsengComponent from '../base'

import Style from './style'

export default class SpacerLineBreak extends BaseGinsengComponent {

	static contextTypes = {
		theme: React.PropTypes.object
	}

	static defaultProps = {
		className: '',
		style: { },
	}

	render ( ) {
		const { theme } = this.context
		const { className, style } = this.props
		const spacerLineBreakClassName = `${ Aphrodite.css( Style.spacerLineBreak, theme.spacerLineBreak ) } ${ className }`

		return (
			<div className={ spacerLineBreakClassName } style={ style }/>
		)
	}
}
