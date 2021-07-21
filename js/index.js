function showFormButton () {
	let form = document.getElementById('fomWrapper')
	form.classList.remove('formHi')
	form.classList.add('formShow')

}

function HiddenForms(){
	let form = document.getElementById('fomWrapper')
	let cleanForm = document.getElementById('Form')
	cleanForm.reset()
	form.classList.add('formHi')
	form.classList.remove('formShow')
}	
