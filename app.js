var submit = document.querySelector('#submit')
var inputName = document.querySelector('#input-name')
var inputPhone = document.querySelector('#input-phone')
var inputAddress = document.querySelector('#input-address')
var contactlist = document.querySelector('#contact-list')

var contact = []
var name
var phone
var address

function addContact() {
  var getname = inputName.value
  var getphone = inputPhone.value
  var getaddress = inputAddress.value
  contact.push({
    'name': getname,
    'phone': getphone,
    'address': getaddress
  })
  name = getname
  phone = getphone
  address = getaddress
}

function addRow() {
  addContact()
  var row = contactlist.insertRow(2)
  var cellname = row.insertCell(0)
  var cellphone = row.insertCell(1)
  var celladdress = row.insertCell(2)
  cellname.innerHTML = name
  cellphone.innerHTML = phone
  celladdress.innerHTML = address
}

submit.addEventListener('click', addRow)