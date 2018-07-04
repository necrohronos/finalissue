function myForm() {
    var name = document.querySelector('#name');
    var vName = document.querySelector('#fname');
    var surname = document.querySelector('#surname');
    var vSurname = document.querySelector('#fsurname');
    var phone = document.querySelector('#phone');
    var vPhone = document.querySelector('#fphone');
    name.textContent = vName.value;
    surname.textContent = vSurname.value;
    phone.textContent = "+48 " + vPhone.value;

}
