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
        doc.fontSize(12);
        doc.text('PDFKit is simple', 10, 30, {align: 'center', width: 200});
        doc.write(process.env.PWD + '/PDFKitExample.pdf');
        ```

## Documentation
You can find information about the PDFKit node package here:
* [PDFKit
  documentation](https://github.com/devongovett/pdfkit/docs)
* [PDFKit
  GIT](https://github.com/devongovett/pdfkit/)

## WARNING
This package does not use Fibered methods but new stream management from PDFKit

## Contributors
* Pascal Richier @pascalrichier

## Contributing
Contributors are very welcome. There are many things you can help with,
including adding testing feature, creating examples for the examples folder...
Some guidelines below:

* **Questions**: It's okay to ask a question on Github Issues if you're
  having trouble since the volume is manageable. Just prefix your Github Issue with
  'Question: ' so we can differentiate easily. Also, please make sure you've read through
  PDFKit documentation and tried a few things before asking. This way you can be very
  specific in your question. Also, please provide a cloneable Github repository
  if the issue is complex. For more complex questions sometimes it's hard to get all of the context
  required to solve a problem by just looking at text.

* **New Features** & **Bugs**: You need to ask new features and bugs corrections to PDFKit creator
  on his GIT: https://github.com/devongovett/pdfkit/

* **Answer Questions!**: If you can help another user please do!

## TODO
1. Add testing
2. Check if PDFKit is blocking node or is fibered

## License
MIT

