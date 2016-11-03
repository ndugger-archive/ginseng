import React from 'react'
import * as Aphrodite from 'aphrodite/no-important'

import BaseGinsengComponent from '../base'
import Container from '../container'
import Label from '../label'

import Style from './style'

export default class FormFieldSet extends BaseGinsengComponent {

	static contextTypes = {
		theme: React.PropTypes.object
	}

	static defaultProps = {
		className: '',
		label: '',
		style: { }
	}

	render ( ) {
		const { theme } = this.context
		const { children, className, label, style } = this.props
		const formFieldSetClassName = `${ Aphrodite.css( Style.formFieldSet, theme.formFieldSet ) } ${ className }`

		return (
			<Container className={ formFieldSetClassName } style={ style } { ...this.otherProps( ) }>

				<Label className={ Aphrodite.css( Style.formFieldSetLabel, theme.formFieldSetLabel ) }>
					{ label }
				</Label>

				{ children }

			</Container>
		)
	}
}
