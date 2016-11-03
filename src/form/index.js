import React from 'react'
import * as Aphrodite from 'aphrodite/no-important'

import BaseGinsengComponent from '../base'
import Container from '../container'

import FormField from './field'
import Style from './style'

export default class Form extends BaseGinsengComponent {

	static Field = FormField

	static contextTypes = {
		theme: React.PropTypes.object
	}

	static defaultProps = {
		action: '/',
		className: '',
		method: 'post',
		style: { }
	}

	static childContextTypes = {
		form: React.PropTypes.object
	}

	fields = { }

	getChildContext ( ) {
		return {
			form: {
				fields: this.fields,
				submit: e => this.handleSubmit( e ),
				reset: e => this.handleReset( e )
			}
		}
	}

	handleSubmit ( event ) {
		const data = { }

		for ( const field in this.fields ) {
			data[ field ] = this.fields[ field ].value
		}

		if ( this.props.onSubmit ) {
			this.props.onSubmit( event )
		}
	}

	handleReset ( event ) {

		if ( this.props.onReset ) {
			this.props.onReset( event )
		}
	}

	render ( ) {
		const { theme } = this.context
		const { children, className, style } = this.props
		const containerClassName = `${ Aphrodite.css( Style.form, theme.form ) } ${ className }`

		return (
			<Container className={ containerClassName } style={ style } { ...this.otherProps( ) }>
				{ children }
			</Container>
		)
	}
}
