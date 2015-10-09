Tinytest.add('PDFKit Client side', function (test) {
  var doc = new PDFDocument({size: 'A4', margin: 50});
  doc.fontSize(12);
  doc.text('PDFKit is simple', 10, 30, {align: 'center', width: 200});
  doc.write('PDFKitExampleClientSide.pdf');
});
