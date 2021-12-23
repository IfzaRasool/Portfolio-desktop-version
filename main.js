const openModalButtons = document.querySelector('.open-button');
function openModal() {
  if (window.showModalDialog) {
    window.showModalDialog('http://example.com', 'name', 'dialogWidth:255px;dialogHeight:250px');
  } else {
    window.open('modal.html', 'name', 'height=500,width=500,toolbar=no,directories=no,status=no, linemenubar=no,scrollbars=no,resizable=no ,modal=yes');
  }
}
openModalButtons.addEventListener('click', openModal);
