import React from 'react'
import * as Aphrodite from 'aphrodite/no-important'

import BaseGinsengComponent from '../base'
import Icon from '../icon'
import RadioButtonGroup from './group'
import Style from './style'

export default class RadioButton extends BaseGinsengComponent {

	static Group = RadioButtonGroup

	state = { checked: false }

	componentWillMount ( ) {
		this.setState( { checked: Boolean( this.props.checked ) } )
	}

	render ( ) {
		const { checked } = this.state
		const { className = '', label = '', style = { }, direction = 'row' } = this.props
		const isRow = direction === 'row'
		const radioButtonContainerClassName = Aphrodite.css( Style.radioButtonContainer, isRow && Style.radioButtonContainer__row )
		const radioButtonClassName = `${ Aphrodite.css( Style.radioButton, checked && Style.radioButton__checked ) } ${ className }`
		const glyph = checked ? 'radio_button_checked' : 'radio_button_unchecked'

		return (
			<span className={ radioButtonContainerClassName } { ...this.otherProps( ) }>
				<Icon glyph={ glyph } className={ radioButtonClassName } />
				{ label }
			</span>
		)
	}
}
