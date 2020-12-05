import React from 'react'
import {
	QuantityWrapper,
	MinusButton,
	PlusButton,
	MinusIcon,
	PlusIcon,
	QuantityInput
} from './styles'

function ItemQuantityControls() {
	return (
		<QuantityWrapper>
			<MinusButton>
				<MinusIcon />
			</MinusButton>
			<QuantityInput
				defaultValue='1'
				maxLength={3}
				keyboardType='number-pad'
			/>
			<PlusButton>
				<PlusIcon />
			</PlusButton>
		</QuantityWrapper>
	)
}

export default ItemQuantityControls
