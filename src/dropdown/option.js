import React from 'react'
import * as Aphrodite from 'aphrodite/no-important'

import BaseGinsengComponent from '../base'
import CheckBox from '../checkbox'
import Style from './style'

export default class DropDownOption extends BaseGinsengComponent {

	static defaultProps = {
		className: '',
		label: '',
		style: { }
	}

	static contextTypes = {
		multiple: React.PropTypes.bool,
		selected: React.PropTypes.any,
		handleOptionClick: React.PropTypes.func
	}

	get selected ( ) {
		return this.context.selected.includes( this.value )
	}

	get value ( ) {
		return this.props.value || this.props.label
	}

	handleClick ( event ) {
		this.context.handleOptionClick( this.value )

		if ( this.props.onClick ) {
			this.props.onClick( event )
		}
	}

	render ( ) {
		const { multiple } = this.context
		const { className, label } = this.props
		const optionClassName = `${ Aphrodite.css( Style.dropDownOption, this.selected && Style.dropDownOption__selected ) } ${ className }`
		const optionCheckBoxClassName = `${ Aphrodite.css( Style.dropDownOptionCheckBox, this.selected && Style.dropDownOptionCheckBox__checked ) }`
		const more = { onClick: e => this.handleClick( e ) }

		return (
			<div className={ optionClassName } { ...this.otherProps( more ) }>

				{ multiple && (
					<CheckBox checked={ this.selected } className={ optionCheckBoxClassName }/>
				) }

				{ label }

			</div>
		)
	}
}
