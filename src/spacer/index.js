import React from 'react'
import * as Aphrodite from 'aphrodite/no-important'

import BaseGinsengComponent from '../base'

import SpacerLineBreak from './linebreak'
import Style from './style'

export default class Spacer extends BaseGinsengComponent {

	static LineBreak = SpacerLineBreak

	static contextTypes = {
		theme: React.PropTypes.object
	}

	static defaultProps = {
		className: '',
		style: { },
		width: 0,
		height: 0
	}

	render ( ) {
		const { theme } = this.context
		const { className, style, width, height } = this.props
		const spacerClassName = `${ Aphrodite.css( Style.spacer, theme.spacer ) } ${ className }`
		const spacerStyle = { width, height, ...style }

		return (
			<div className={ spacerClassName } style={ spacerStyle }/>
		)
	}
}
