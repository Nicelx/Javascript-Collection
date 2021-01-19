function dropdownToggle() {
	$('ul.dropdown').toggleClass('dropdown-active')
}

$('p.dropdown-trigger').on('click', dropdownToggle)