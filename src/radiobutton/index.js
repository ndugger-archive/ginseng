import React from 'react'
import * as Aphrodite from 'aphrodite/no-important'

import BaseGinsengComponent from '../base'
import Icon from '../icon'
import RadioButtonGroup from './group'
import Style from './style'

export default class RadioButton extends BaseGinsengComponent {

	static Group = RadioButtonGroup

	static defaultProps = {
		className: '',
		label: '',
		style: { },
	}

	static contextTypes = {
		checked: React.PropTypes.any,
		direction: React.PropTypes.string,
		handleRadioClick: React.PropTypes.func
	}

	get checked ( ) {
		return this.context.checked === this.value
	}

	get value ( ) {
		return this.props.value || this.props.label
	}

	handleClick ( e ) {
		this.context.handleRadioClick( this.value )

		if ( this.props.onClick ) {
			this.props.onClick( e )
		}
	}

	render ( ) {
		const { className, label, style } = this.props
		const isRow = this.context.direction === 'row'
		const radioButtonContainerClassName = Aphrodite.css( Style.radioButtonContainer, isRow && Style.radioButtonContainer__row )
		const radioButtonClassName = `${ Aphrodite.css( Style.radioButton, this.checked && Style.radioButton__checked ) } ${ className }`
		const glyph = this.checked ? 'radio_button_checked' : 'radio_button_unchecked'
		const more = { onClick: e => this.handleClick( e ) }

		return (
			<span className={ radioButtonContainerClassName } { ...this.otherProps( more ) }>
				<Icon glyph={ glyph } className={ radioButtonClassName } />
				{ label }
			</span>
		)
	}
}
