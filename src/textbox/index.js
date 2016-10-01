import React from 'react'
import * as Aphrodite from 'aphrodite/no-important'

import BaseGinsengComponent from '../base'
import Style from './style'

export default class TextBox extends BaseGinsengComponent {

	render ( ) {
		const {
			className = '',
			disabled = false,
			placeholder = '',
			readOnly = false,
			required = false,
			rows = 1,
			style = { },
			type = 'text',
			value = ''
		} = this.props
		const textBoxClassName = `${ Aphrodite.css( Style.textBox ) } ${ className }`
		const props = { disabled, placeholder, readOnly, required, style, ...this.otherProps( ) }

		if ( readOnly || disabled ) {
			props.value = value
		}
		else {
			props.defaultValue = value
		}

		if ( rows > 1 ) {

			return (
				<textarea className={ textBoxClassName } rows={ rows } { ...props }/>
			)
		}

		return (
			<input className={ textBoxClassName } type={ type } { ...props }/>
		)
	}
}
