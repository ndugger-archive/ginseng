import React, { Component } from 'react'
import Aphrodite from 'aphrodite'

import BaseGinsengComponent from '../base'
import Style from './style'

export default class Icon extends BaseGinsengComponent {

	render ( ) {
		const { className = '', glyph = 'photo', size = 22, style = { } } = this.props
		const iconClassName = `${ Aphrodite.css( Style.icon ) } ${ className }`
		const iconStyle = { fontSize: size, ...style }

		return (
			<i className={ iconClassName } style={ iconStyle } { ...this.otherProps( ) }>
				{ glyph }
			</i>
		)
	}
}
