// This will validate the form
function validate() {
    // Create variables
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;

    // Regular expression for Email
    // If email doesn't pass this regular expression,
    // the form won't go through.
    var emailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    // These three sets of if statements allows the
    // user to see when they correctly input something
    // into the form
    if (name !='') {
        // This statement will return background style
        // to normal
        document.getElementById("name").style.backgroundColor = '#f2f2f2';
        // These next two statements take out a notice
        // created by Christian
        // The notice told the user to input a name
        var element = document.getElementById("nameErr");
        // first, check if the "notice" exists
        if (element != null) {
            element.parentNode.removeChild(element);
        }
    }
    if (email !='' && email.match(emailReg)) {
        document.getElementById("email").style.backgroundColor = '#f2f2f2';
        // This will remove emailErr
        var element = document.getElementById("emailErr");
        // first, check if the "notice" exists
        if (element != null) {
            element.parentNode.removeChild(element);
        }
        // This will remove regErr
        var element = document.getElementById("regErr");
        // first, check if the "notice" exists
        if (element != null) {
            element.parentNode.removeChild(element);
        }
    }
    if (subject !='') {
        document.getElementById("subject").style.backgroundColor = '#f2f2f2';
        var element = document.getElementById("subjectErr");
        // first, check if the "notice" exists
        if (element != null) {
            element.parentNode.removeChild(element);
        }
    }

    // Force form to pass these conditions
    if (name != '' && email != '' && email.match(emailReg) && subject != '') {
        // Only pass the form when all conditions are met
        return true;
    } else if (name == '') {
        console.log("Please enter a name");
        // if the form doesn't pass a condition, highlight
        // the particular element that didn't pass and force
        // user to correct their form entry
        document.getElementById("name").style.backgroundColor = 'rgba(229, 42, 51, 0.7)';
        var newDiv = document.createElement("p");
        var newContent = document.createTextNode("Please enter a name");
        newDiv.appendChild(newContent);
        newDiv.style.paddingTop = '10px';
        newDiv.style.color = 'red';
        if (document.getElementById("nameErr") == null) {
            var element = document.getElementById("nameErr");
            newDiv.setAttribute("id", "nameErr");
            var currentDiv = document.getElementById("name");
            currentDiv.parentNode.insertBefore(newDiv, currentDiv.nextSibling);
        }
        // returning false stops the form from passing through
        return false;
    } else if (email == '') {
        console.log("Please enter an email");
        document.getElementById("email").style.backgroundColor = 'rgba(229, 42, 51, 0.7)';
        var newDiv = document.createElement("p");
        var newContent = document.createTextNode("Please enter an email");
        newDiv.appendChild(newContent);
        newDiv.style.paddingTop = '10px';
        newDiv.style.color = 'red';
        // Two use cases:
        // 1. Check to see if user ignored "valid email"
        // notice
        if (document.getElementById("regErr") != null) {
            var element = document.getElementById("regErr");
            // removes regErr to make space
            // for emailErr
            element.parentNode.removeChild(element);
            newDiv.setAttribute("id", "emailErr");
            var currentDiv = document.getElementById("email");
            currentDiv.parentNode.insertBefore(newDiv, currentDiv.nextSibling);
        }
        // 2. Check to see if user ignored "enter email"
        // notice
        if (document.getElementById("emailErr") == null) {
            var element = document.getElementById("emailErr");
            newDiv.setAttribute("id", "emailErr");
            var currentDiv = document.getElementById("email");
            currentDiv.parentNode.insertBefore(newDiv, currentDiv.nextSibling);
        }
        // In above if statements, remove if notice already exists, to avoid
        return false;
    } else if (!(email.match(emailReg))) {
        console.log("Please enter a valid email");
        document.getElementById("email").style.backgroundColor = 'rgba(229, 42, 51, 0.7)';
        var newDiv = document.createElement("p");
        var newContent = document.createTextNode("Please enter a valid email");
        newDiv.appendChild(newContent);
        newDiv.style.paddingTop = '10px';
        newDiv.style.color = 'red';
        // Two use cases:
        // 1. Check to see if user ignored "valid email"
        // notice
        if (document.getElementById("regErr") == null) {
            var element = document.getElementById("regErr");
            newDiv.setAttribute("id", "regErr");
            var currentDiv = document.getElementById("email");
            currentDiv.parentNode.insertBefore(newDiv, currentDiv.nextSibling);
        }
        // 2. Check to see if user ignored "enter email"
        // notice
        if (document.getElementById("emailErr") != null) {
            var element = document.getElementById("emailErr");
            element.parentNode.removeChild(element);
            newDiv.setAttribute("id", "regErr");
            var currentDiv = document.getElementById("email");
            currentDiv.parentNode.insertBefore(newDiv, currentDiv.nextSibling);
        }
        // In above if statements, remove if notice already exists, to avoid
        // duplicate notices
        return false;
    } else if (subject == '') {
        console.log("Please enter an inquiry");
        document.getElementById("subject").style.backgroundColor = 'rgba(229, 42, 51, 0.7)';
        var newDiv = document.createElement("p");
        var newContent = document.createTextNode("Please enter an subject");
        newDiv.appendChild(newContent);
        newDiv.style.paddingTop = '10px';
        newDiv.style.color = 'red';
        if (document.getElementById("subjectErr") == null) {
            var element = document.getElementById("subjectErr");
            newDiv.setAttribute("id", "subjectErr");
            var currentDiv = document.getElementById("subject");
            currentDiv.parentNode.insertBefore(newDiv, currentDiv.nextSibling);
        }
        return false;
    }
}
