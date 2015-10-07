PDFKitX
============

Create PDF with [PDFKit Node.js package](https://www.npmjs.com/package/pdfkit) in your Meteor application, server-side and browser-side.

For a server-side only version, with better perfomance and Fibered methods
(non-blocking thread, but synchronous) see this package
[pascoual:pdfkit](https://github.com/pascoual/meteor-pdfkit)

## Quick Start
1. `meteor add pascoual:pdfkitx`
2. Example: create a PDF server-side 


        ```js
        var doc = new PDFDocument({size: 'A4', margin: 50});
        var imageBase64 = Meteor.users.findOne(this.userId).profile.picture;
        var imageBuffer2 = new Buffer(imageBase64.replace('data:image/png;base64,','') || '', 'base64');
        doc.image(imageBuffer2, 10, 10, {height: 75});
        doc.fontSize(12);
        doc.text('PDFKit is simple', 10, 30, {align: 'center', width: 200});
        // Save it on myApp/public/pdf folder (or any place) with the Fibered sync methode:
        doc.writeSync(process.env.PWD + '/public/pdf/PDFKitExample.pdf);
        ```
3. Example: a route that creates and serves a PDF (thanks @babak49)
``` 
