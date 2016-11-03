import React from 'react'
import * as Aphrodite from 'aphrodite/no-important'

import BaseGinsengComponent from '../base'
import Button from '../button'
import Icon from '../icon'

import FormFieldSet from './set'
import Style from './style'

const REG_EXP = {
	number: /^([0-9.-]+)?$/
}

export default class FormField extends BaseGinsengComponent {

	static Set = FormFieldSet

	static contextTypes = {
		form: React.PropTypes.object,
		theme: React.PropTypes.object
	}

	static defaultProps = {
		className: '',
		name: null,
		placeholder: '',
		style: { },
		type: 'text',
		value: '',
		submitOnEnter: false
	}

	state = { value: null }

	get value ( ) {
		return this.props.type === 'number' ? Number(this.state.value) : this.state.value
	}

	set value ( value ) {
		this.setState( { value } )
	}

	get mode ( ) {
		const { type } = this.props

		switch ( type ) {

			case 'number': return 'numeric'

			default: return undefined
		}
	}

	componentWillMount ( ) {
		this.setState( { value: this.props.value } )
	}

	componentDidMount ( ) {
		const { form } = this.context
		const { name, submitOnEnter } = this.props

		if ( form && name && submitOnEnter ) {
			form.fields[ name ] = this
		}
	}

	handleKeyDown ( event ) {
		const { form } = this.context
		const { keyCode } = event

		if ( keyCode === 13 && ( 'submit' in form ) ) {
			form.submit( e )
		}
	}

	handleChange ( event ) {
		const { value } = event.target
		const { type } = this.props

		if ( type in REG_EXP && REG_EXP[ type ].test( value ) ) {
			this.setState( { value } )

			if ( this.props.$onChange ) {
				this.props.$onChange( value )
			}
		}

		if ( !( type in REG_EXP ) ) {
			this.setState( { value } )

			if ( this.props.$onChange ) {
				this.props.$onChange( value )
			}
		}
	}

	numberSubtract ( ) {
		this.setState( { value: ( Number( this.state.value ) || 0 ) - 1 } )
	}

	numberAdd ( ) {
		this.setState( { value: ( Number( this.state.value ) || 0 ) + 1 } )
	}

	render ( ) {
		const { theme, form } = this.context
		const { value } = this.state
		const { children, className, name, style, placeholder, type } = this.props
		const formFieldClassName = `${ Aphrodite.css( Style.formField, theme.formField ) } ${ className }`

		if ( type === 'submit' ) {
			return (
				<Button onClick={ e => ( 'submit' in form ) && form.submit( e ) }>
					{ value || 'Submit' }
				</Button>
			)
		}

		if ( type === 'reset' ) {
			return (
				<Button onClick={ e => ( 'reset' in form ) && form.reset( e ) }>
					{ value || 'Reset' }
				</Button>
			)
		}

		return (
			<Button.Group>

				<input
					type='text'
					name={ name }
					onKeyDown={ e => this.handleKeyDown( e ) }
					onChange={ e => this.handleChange( e ) }
					inputMode={ this.mode }
					className={ formFieldClassName }
					placeholder={ placeholder }
					value={ value }
				/>

				{ type === 'number' && [
					<Button key='subtract' onClick={ e => this.numberSubtract( e ) }>
						<Icon glyph='remove'/>
					</Button>,
					<Button key='add' onClick={ e => this.numberAdd( e ) }>
						<Icon glyph='add'/>
					</Button>
				] }

				{ type === 'search' && (
					<Button onClick={ e => ( 'submit' in form ) && form.submit( e ) }>
						<Icon glyph='search'/>
					</Button>
				) }

				{ type === 'date' && (
					<Button>
						<Icon glyph='date_range'/>
					</Button>
				) }

			</Button.Group>
		)
	}
}
