let jsonObj = {}
let siteURL = ""
const bizForm = document.getElementById("bizForm");
const formButton = document.getElementById("formButton");

const modal = new tingle.modal({
  footer: true,
  stickyFooter: false,
  closeMethods: ['escape'],
  closeLabel: "Close",
  cssClass: ['custom-class-1', 'custom-class-2'],
});

modal.addFooterBtn('Close', 'tingle-btn tingle-btn--primary', function() {
  modal.close();
});

modal.addFooterBtn('Export', 'tingle-btn tingle-btn--danger', function() {
  console.log(jsonObj);
  bizForm.reset();
  modal.close();
});

formButton.onclick = (e) => {
  e.preventDefault();

  for (let i = 0; i < bizForm.elements.length - 1; i++){
    let key = bizForm.elements[i].id;
    jsonObj[key] = bizForm.elements[i].value;
  }
  
  siteURL = JSON.stringify(jsonObj);
  const url= `http://cloudtemplates.cloudfrontend.net/app/live-preview/?clone_id=1576931&site=${encodeURIComponent(siteURL)}`
  modal.setContent(`<iframe src=${url}></iframe>`);
  modal.open();
};
