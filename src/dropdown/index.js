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

	static childContextTypes = {
		selected: React.PropTypes.array,
		multiple: React.PropTypes.bool,
		handleOptionClick: React.PropTypes.func
	}

	static defaultProps = {
		placeholder: 'Select...'
	}

	state = {
		selected: [ ],
		label: '',
		open: false,
		value: undefined
	}

	get label ( ) {
		const { selected } = this.state
		const { children, multiple } = this.props

		if ( multiple ) {
			const options = children.filter( x => selected.includes( x.props.label || x.props.value ) )
			return options.length ? options.map( x => x.props.label || x.props.value ).join(', ') : undefined
		}
		else {
			const option = children.find( x => selected.includes( x.props.label || x.props.value ) )
			return option ? (option.props.label || option.props.value) : undefined
		}
	}

	getChildContext ( ) {
		return {
			selected: this.state.selected,
			multiple: this.props.multiple,
			handleOptionClick: value => this.handleOptionClick( value )
		}
	}

	componentWillMount ( ) {
		this.offClick = this.handleOffClick.bind( this )

		window.addEventListener('click', this.offClick)
	}

	componentWillUnmount ( ) {
		window.removeEventListener('click', this.offClick)
	}

	handleOffClick ( ) {
		if ( this.state.open ) {
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

	handleButtonClick ( event ) {
		event.stopPropagation( )
		this.setState( { open: !this.state.open } )
	}

	handleOptionClick ( value ) {
		const { $onChange, multiple } = this.props

		if ( multiple ) {
			const selected = [ ...this.state.selected ]

			if ( selected.includes( value ) ) {
				selected.splice( selected.indexOf( value ), 1 )
			}
			else {
				selected.push( value )
			}

			this.setState( { selected } )

			if ( $onChange ) {
				$onChange( selected )
			}
		}
		else {
			this.setState( { selected: [ value ], open: false } )

			if ( $onChange ) {
				$onChange( value )
			}
		}
	}

	render ( ) {
		const { open } = this.state
		const { children, placeholder } = this.props
		const more = { onClick: e => this.handleClick( e ) }

		return (
			<Button.Group className={ Aphrodite.css( Style.dropDown ) } { ...this.otherProps( more ) }>

				<TextBox className={ Aphrodite.css( Style.dropDownInput ) } value={ this.label } placeholder={ placeholder } readOnly/>

				{ open && (
					<div className={ Aphrodite.css( Style.dropDownOptionContainer ) }>
						{ children }
					</div>
				) }

				<Button className={ Aphrodite.css( Style.dropDownButton ) } onClick={ e => this.handleButtonClick( e ) }>
					<Icon glyph={ open ? 'expand_less' : 'expand_more' }/>
				</Button>

			</Button.Group>
		)
	}
}
