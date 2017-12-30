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
  siteURL = JSON.stringify(jsonObj);
  console.log(siteURL);
  modal.open();
};

const modal = new tingle.modal({
    footer: true,
    stickyFooter: false,
    closeMethods: ['escape'],
    closeLabel: "Close",
    cssClass: ['custom-class-1', 'custom-class-2'],
});

modal.setContent('<iframe>http://cloudtemplates.cloudfrontend.net/app/live-preview/?clone_id=1576931&site={siteURL}</iframe>');

modal.addFooterBtn('Close', 'tingle-btn tingle-btn--primary', function() {
    modal.close();
});

modal.addFooterBtn('Export', 'tingle-btn tingle-btn--danger', function() {
    console.log(jsonObj);
    bizForm.reset();
    modal.close();
});
