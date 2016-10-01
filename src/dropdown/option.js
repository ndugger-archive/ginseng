import React from 'react'
import * as Aphrodite from 'aphrodite/no-important'

import BaseGinsengComponent from '../base'
import CheckBox from '../checkbox'
import Style from './style'

export default class DropDownOption extends BaseGinsengComponent {

	render ( ) {
		const { className = '', label = '', multi = false, selected = false } = this.props
		const dropDownOptionClassName = `${ Aphrodite.css( Style.dropDownOption ) } ${ className }`
		const dropDownOptionCheckBoxClassName = `${ Aphrodite.css( Style.dropDownOptionCheckBox ) }`

		console.log(selected)

		return (
			<div className={ dropDownOptionClassName } { ...this.otherProps( ) }>

				{ multi && (
					<CheckBox checked={ selected } className={ dropDownOptionCheckBoxClassName }/>
				) }

				{ label }

			</div>
		)
	}
}
