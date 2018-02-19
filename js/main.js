document.getElementById("newForm").addEventListener('submit', saveDetails);

function saveDetails(e) {

    var fullname = document.getElementById("fullname").value;
    var email = document.getElementById("email").value;
    var passWord = document.getElementById("password").value;
    var gender = document.getElementById("gender").value;
    var country = document.getElementById("country").value;

    var detail = {
        fname: fullname,
        email: email,
        pass: password,
        gender: gender,
        count: country
    }
    if (localStorage.getItem('details') === null) {
        var details = [];

        details.push(detail);

        localStorage.setItem('details', JSON.stringify(details));
    } else {

        var details = JSON.parse(localStorage.getItem('details'));

        details.push(detail);

        localStorage.setItem('details', JSON.stringify(details));
    }


    document.getElementById('myForm').reset();


    e.preventDefault();
}

function sValidate() {
    var s = document.getElementById("country");
    var optionSelIndex = s.options[s.selectedIndex].value;
    var optionSelectedText = s.options[s.selectedIndex].text;
    if (optionSelIndex == 0) {
        alert("Please select a option");
    } else {
        alert("Success !! You have selected option : " + optionSelectedText);;
    }
}