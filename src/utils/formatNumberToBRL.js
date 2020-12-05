const numberFormatter = new Intl.NumberFormat('pt-BR', {
	style: 'currency',
	currency: 'BRL'
})

function formatNumberToBRL(number) {
	return numberFormatter.format(number).split('$').join('$ ')
}

export default formatNumberToBRL
