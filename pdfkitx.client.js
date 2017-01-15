PDFDocument.PX_PER_CM = 28.33;


PDFDocument.prototype.write = function (filename) {
  stream = this.pipe(blobStream());
  stream.on('finish', function() {
    var link = document.createElement('a');
    link.href = this.toBlobURL('application/pdf')
    link.download = filename;

	document.body.appendChild(link); // add element to DOM
    link.click(); // programmatically click the link
	document.body.removeChild(link); // remove element from DOM
  });
  this.end();
}
