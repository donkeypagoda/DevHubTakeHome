let jsonObj = {
  "business_name": "",
  "street": "",
  "city": "",
  "postal_code": "",
  "country": "",
  "phone_number": ""
}

const formBiz = document.getElementById("formBiz");
const formStreet = document.getElementById("formStreet");
const formCity = document.getElementById("formCity");
const formState = document.getElementById("formState");
const formPc = document.getElementById("formPc");
const formCountry = document.getElementById("formCountry");
const formPhone = document.getElementById("formPhone");
const formButton = document.getElementById("formButton");


formButton.onclick = (e) => {
  e.preventDefault();
  modal.open();
  console.log(document.forms[0]);
};

const modal = new tingle.modal({
    footer: true,
    stickyFooter: false,
    closeMethods: ['overlay', 'button', 'escape'],
    closeLabel: "Close",
    cssClass: ['custom-class-1', 'custom-class-2'],
    onOpen: function() {
        console.log('modal open');
    },
    onClose: function() {
        console.log('modal closed');
    },
    // beforeClose: function() {
    //     // here's goes some logic
    //     // e.g. save content before closing the modal
    //     return true; // close the modal
    // 	return false; // nothing happens
    // }
});

// set content
modal.setContent('<h1>here\'s some content</h1>');

// add a button
modal.addFooterBtn('Button label', 'tingle-btn tingle-btn--primary', function() {
    // here goes some logic
    modal.close();
});

// add another button
modal.addFooterBtn('Dangerous action !', 'tingle-btn tingle-btn--danger', function() {
    // here goes some logic
    modal.close();
});

// open modal
// modal.open();

// close modal
// modal.close();

// function formSubmit(){
//   modal.open();
// }
