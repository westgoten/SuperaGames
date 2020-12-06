import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { changeGameUnits } from '../../actions/cartActions'
import {
	GAME_UNITS_MAX,
	GAME_UNITS_MIN
} from '../../utils/consts/gameUnitsLimits'
import {
	QuantityWrapper,
	MinusButton,
	PlusButton,
	MinusIcon,
	PlusIcon,
	QuantityInput
} from './styles'

function ItemQuantityControls({ item }) {
	const [inputText, setInputText] = useState(item.units.toString())
	const dispatch = useDispatch()

	useEffect(() => {
		setInputText(item.units.toString())
	}, [item])

	return (
		<QuantityWrapper>
			<MinusButton onPress={decrementGameUnits}>
				<MinusIcon />
			</MinusButton>
			<QuantityInput
				value={inputText}
				maxLength={2}
				keyboardType='number-pad'
				onChangeText={handleTextChange}
				onEndEditing={handleEditingEnd}
			/>
			<PlusButton onPress={incrementGameUnits}>
				<PlusIcon />
			</PlusButton>
		</QuantityWrapper>
	)

	function decrementGameUnits() {
		if (item.units > GAME_UNITS_MIN)
			dispatch(changeGameUnits(item.game.id, item.units - 1))
	}

	function handleTextChange(text) {
		if (isInputValid(text)) setInputText(text)
	}

	function isInputValid(text) {
		const invalidInputRegex = /\D/
		return !invalidInputRegex.test(text)
	}

	function handleEditingEnd() {
		if (!isInputEmptyOrEqualsToZero())
			dispatch(changeGameUnits(item.game.id, Number(inputText)))
		else setInputText(item.units.toString())
	}

	function isInputEmptyOrEqualsToZero() {
		return Number(inputText) === 0
	}

	function incrementGameUnits() {
		if (item.units < GAME_UNITS_MAX)
			dispatch(changeGameUnits(item.game.id, item.units + 1))
	}
}

export default ItemQuantityControls
