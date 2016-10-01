import React, { Component } from 'react'
import * as Aphrodite from 'aphrodite/no-important'

import BaseGinsengComponent from '../base'
import Icon from '../icon'
import Style from './style'

export default class CheckBox extends BaseGinsengComponent {

	state = { checked: false }

	componentWillMount ( ) {
		this.setState( { checked: Boolean( this.props.checked ) } )
	}

	handleClick ( event ) {
		const { onClick, $onChange } = this.props
		const checked = !this.state.checked

		this.setState( { checked } )

		if ( onClick ) {
			onClick( event )
		}

		if ( $onChange ) {
			$onChange( checked )
		}
	}

	render ( ) {
		const { checked } = this.state
		const { className = '', label = '', style = { } } = this.props
		const glyph = checked ? 'check_box' : 'check_box_outline_blank'
		const checkBoxClassName = `${ Aphrodite.css( Style.checkBox, checked && Style.checkBox__checked ) } ${ className }`
		const more = { onClick: e => this.handleClick( e ) }

		return (
			<span className={ Aphrodite.css( Style.checkBoxContainer ) } { ...this.otherProps( more ) }>
				<Icon glyph={ glyph } className={ checkBoxClassName }/>
				{ label }
			</span>
		)
	}
}
