import React from 'react'
import * as Aphrodite from 'aphrodite/no-important'

import BaseGinsengComponent from '../base'
import Style from './style'

export default class RadioButtonGroup extends BaseGinsengComponent {

	static defaultProps = {
		className: '',
		direction: 'row',
		eventHandlers: { },
		style: { }
	}

	static childContextTypes = {
		checked: React.PropTypes.any,
		direction: React.PropTypes.string,
		handleRadioClick: React.PropTypes.func
	}

	state = { checked: null }

	getChildContext ( ) {
		return {
			checked: this.state.checked,
			direction: this.props.direction,
			handleRadioClick: value => this.handleOptionClick( value )
		}
	}

	componentWillMount ( ) {
		const { children } = this.props
		const checkedRadio = children.find( x => x.props.checked )

		if ( checkedRadio ) {
			this.setState( { checked: checkedRadio.props.value || checkedRadio.props.label } )
		}
	}

	handleOptionClick ( value ) {
		this.setState( { checked: value } )

		if ( this.props.$onChange ) {
			this.props.$onChange( value )
		}
	}

	render ( ) {
		const { children, className, direction, style } = this.props
		const radioButtonGroupClassName = `${ Aphrodite.css( Style.radioButtonGroup ) } ${ className }`
		const radioButtonGroupStyle = { flexDirection: direction, alignItems: direction.match('column') ? 'inherit' : 'center', ...style }

		return (
			<div className={ radioButtonGroupClassName } style={ radioButtonGroupStyle } { ...this.otherProps( ) }>
				{ children }
			</div>
		)
	}
}
