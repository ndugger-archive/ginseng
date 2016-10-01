import React from 'react'
import * as Aphrodite from 'aphrodite/no-important'

import BaseGinsengComponent from '../base'
import Button from '../button'
import Icon from '../icon'
import TextBox from '../textbox'

import DropDownOption from './option'
import Style from './style'

export default class DropDown extends BaseGinsengComponent {

	static Option = DropDownOption

	root = null
	options = [ ]

	state = {
		selected: [ ],
		label: '',
		open: false,
		value: undefined
	}

	offclick = null

	get values ( ) {
		return this.props.children.map( ( option, i ) => option.props.value || option.props.label || i )
	}

	componentWillMount ( ) {
		const { children, multi } = this.props
		const values = this.values

		let selectedValues = [ ]

		children.forEach( ( option, i ) => {
			const { selected } = option.props

			if ( !selected ) {
				return
			}

			if ( multi ) {
				return selectedValues.push( values[ i ] )
			}

			selectedValues = [ values[ i ] ]
		} )

		const label = multi ? [ ] : ''
		const value = multi ? [ ] : undefined

		this.setState( { label, value, selected: selectedValues } )

		this.offClick = ::this.handleOffClick
		window.addEventListener( 'click', this.offClick )
	}

	componentWillUnmount ( ) {
		window.removeEventListener( 'click', this.offClick )
	}

	handleOffClick ( ) {
		const { open } = this.state

		if ( open ) {
			this.setState( { open: false } )
		}
	}

	handleClick ( event ) {
		const { open } = this.state
		const { onClick } = this.props

		event.stopPropagation( )

		if ( !open ) {
			this.setState( { open: true } )
		}

		if ( onClick ) {
			onClick( event )
		}
	}

	handleOptionClick ( event ) {
		const { $onChange, multi } = this.props
		const className = Aphrodite.css( Style.dropDownOption )
		const targetOption = event.target.closest( `[class~=${ className }]` )
		const optionIndex = [ ...event.currentTarget.children ].indexOf( targetOption )
		const checkedOption = this.options[ optionIndex ]
		const { label, value } = checkedOption.props

		const state = { }

		if ( multi ) {
			const newValues = [ ...this.state.value ]
			const newLabels = [ ...this.state.label ]

			if ( newValues.includes( value ) ) {
				newValues.splice( newValues.indexOf( value ), 1 )
				newLabels.splice( newLabels.indexOf( label ), 1 )
			}
			else {
				newValues.push( value )
				newLabels.push( label )
			}

			Object.assign( state, { label: newLabels, value: newValues, open: true } )
		}
		else {
			Object.assign( state, { label, value, open: false } )
		}

		this.setState( state )

		if ( $onChange ) {
			$onChange( state.value )
		}
	}

	renderSelection ( ) {
		const { label } = this.state
		const { multi } = this.props

		if ( multi ) {
			return label.join(', ')
		}

		return label
	}

	renderOptions ( ) {
		const { open } = this.state
		const { children, multi } = this.props

		this.options = [ ]

		if ( !open ) {
			return null
		}

		const values = this.values
		const clonedChildren = [ ]
		const ref = option => this.options.push( option )

		console.log('render option')

		children.forEach( ( option, key ) => {
			const selected = multi ? this.state.value.includes( values[ key ] ) : this.state.value === values[ key ]
			const props = { key, ref, selected, value: values[ key ], multi }

			clonedChildren.push( React.cloneElement( option, props ) )
		} )

		return clonedChildren
	}

	render ( ) {
		const { placeholder = 'Select...' } = this.props
		const more = { onClick: e => this.handleClick( e ) }

		return (
			<Button.Group className={ Aphrodite.css( Style.dropDown ) } { ...this.otherProps( more ) }>

				<TextBox className={ Aphrodite.css( Style.dropDownInput ) } value={ this.renderSelection( ) } placeholder={ placeholder } readOnly/>

				{ open && (
					<div className={ Aphrodite.css( Style.dropDownOptionContainer ) } onClick={ e => this.handleOptionClick( e ) }>
						{ this.renderOptions( ) }
					</div>
				) }

				<Button>
					<Icon glyph='expand_more'/>
				</Button>

			</Button.Group>
		)
	}
}
