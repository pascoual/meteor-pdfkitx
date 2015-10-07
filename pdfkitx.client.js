PDFDocument.PX_PER_CM = 28.33;


PDFDocument.prototype.write = function (filename) {
  stream = this.pipe(blobStream());
  this.end();
  stream.on('finish', function() {
    // or get a blob URL
    var url = this.toBlobURL();
    window.open(url);
  });
}
