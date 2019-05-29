const add = document.querySelector("#add");
const namevalue = document.querySelector("#name").value;
const emailvalue = document.querySelector("#email").value;
const phonevalue = document.querySelector("#phone").value;
const relationvalue = document.querySelector("#select").value;



function submit() {
    return addContact;

}


class AddressBook {
    constructor() {

        this.name = namevalue;
        this.email = emailvalue;
        this.phonevalue = phonevalue;
        this.relationvalue = relationvalue;

    }




    deleteAt(deleteAt) {
        this.address.splice(deleteAt, 0);
        console.log(address);


    }


}

document.getElementById("add").addEventListener("click", display)

function display() {

    let x = document.createElement("ul");

    x.setAttribute("class", "contact-list");

    let t = document.createElement("li");

    let t1 = document.createTextNode("Name: " + document.getElementById('name').value);

    t.appendChild(t1);

    let u = document.createElement("li");


    let u1 = document.createTextNode("Email: " + document.getElementById('email').value);

    u.appendChild(u1);

    let v = document.createElement("li");

    let v1 = document.createTextNode("Phone: " + document.getElementById('phone').value);

    v.appendChild(v1);

    let w = document.createElement("li");

    let w1 = document.createTextNode("Relation: " + document.getElementById('select').value);
    w.appendChild(w1);

    let i = document.createElement("p");
    let i1 = document.createTextNode("Delete");
    i.appendChild(i1);
    i.style.color = "blue";

    i.addEventListener("click", function() {
        x.style.display = "none";
    });



    x.appendChild(t);
    x.appendChild(u);
    x.appendChild(v);
    x.appendChild(w);
    x.appendChild(i);

    document.body.appendChild(x);
    x.insertBefore(document.getElementById('blank'), x.childNodes[0])
    let y = document.getElementById('blank');




    // let userEmail = document.getElementById('email').value;
    // document.getElementById('userEmail').innerHTML = 'Email:' + userEmail;
    // let userPhone = document.getElementById('phone').value;
    // document.getElementById('userPhone').innerHTML = 'Phone:' + userPhone;
    // let userRelation = document.getElementById('select').value;
    // document.getElementById('userRelation').innerHTML = 'Relation:' + userRelation;

    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';

    y.appendChild(x);









}







const info = {
    name: namevalue,
    email: emailvalue,
    phone: phonevalue,
    relation: relationvalue,
}

const addContact = new AddressBook(namevalue, emailvalue, phonevalue, relationvalue);




const address = new AddressBook();