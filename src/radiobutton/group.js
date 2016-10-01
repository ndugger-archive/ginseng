import React from 'react'
import * as Aphrodite from 'aphrodite/no-important'

import BaseGinsengComponent from '../base'
import Style from './style'

export default class RadioButtonGroup extends BaseGinsengComponent {

	radioButtons = [ ]
	state = { checked: null }

	handleClick ( event ) {
		const { onClick, $onChange } = this.props
		const radioButtonContainer = Aphrodite.css( Style.radioButtonContainer )
		const target = event.target.closest( `[class~=${ radioButtonContainer }]` )
		const checked = [ ...event.currentTarget.children ].indexOf( target )

		this.radioButtons.forEach( ( radioButton, i ) =>
			radioButton.setState( { checked: i === checked } ) )

		if ( onClick ) {
			onClick( event )
		}

		if ( $onChange ) {
			const checkedRadioButton = this.radioButtons[ checked ]
			const { label = null, value } = checkedRadioButton.props

			$onChange( value || label )
		}
	}

	render ( ) {
		const { children, className = '', direction = 'row', eventHandlers = { }, style = { } } = this.props
		const radioButtonGroupClassName = `${ Aphrodite.css( Style.radioButtonGroup ) } ${ className }`
		const radioButtonGroupStyle = { flexDirection: direction, alignItems: direction.match('column') ? 'inherit' : 'center' }
		const more = { onClick: e => this.handleClick( e ) }

		const clonedChildren = [ ]
		const ref = radioButton => this.radioButtons.push( radioButton )

		children.forEach( ( radioButton, key ) =>
			clonedChildren.push( React.cloneElement( radioButton, { key, ref, direction } ) ) )

		return (
			<div className={ radioButtonGroupClassName } style={ radioButtonGroupStyle } { ...this.otherProps( more ) }>
				{ clonedChildren }
			</div>
		)
	}
}
