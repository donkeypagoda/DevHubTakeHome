let jsonObj = {}
let siteURL = ""
const bizForm = document.getElementById("bizForm");
const formButton = document.getElementById("formButton");

formButton.onclick = (e) => {
  e.preventDefault();
  for (let i = 0; i < bizForm.elements.length - 1; i++){
    let key = bizForm.elements[i].id;
    jsonObj[key] = bizForm.elements[i].value;
  }
  // siteURL = JSON.stringify(jsonObj);

  // alternate method using serialize from jQuery, still doesn't match cloud template input format, so still unrecognized
  let jQ = $("#bizForm")
  siteURL = jQ.serialize();
  console.log(siteURL);
  //

  modal.open();
};

const modal = new tingle.modal({
    footer: true,
    stickyFooter: false,
    closeMethods: ['escape'],
    closeLabel: "Close",
    cssClass: ['custom-class-1', 'custom-class-2'],
});

modal.setContent('<iframe src="http://cloudtemplates.cloudfrontend.net/app/live-preview/?clone_id=1576931&site="{siteURL}""></iframe>');
// modal.setContent('<iframe src="http://cloudtemplates.cloudfrontend.net/app/live-preview/?clone_id=1576931&site={%22business%22:{%22business_name%22:%20%22Johnson%20Legal%20Partners%22}}"></iframe>');


modal.addFooterBtn('Close', 'tingle-btn tingle-btn--primary', function() {
    modal.close();
});

modal.addFooterBtn('Export', 'tingle-btn tingle-btn--danger', function() {
    console.log(jsonObj);
    bizForm.reset();
    modal.close();
});
