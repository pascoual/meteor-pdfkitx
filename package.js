Package.describe({
  name: 'pascoual:pdfkitx',
  version: '0.0.2',
  summary: 'PDFKit, the PDF generation library for servers and browsers.',
  git: 'https://github.com/pascoual/meteor-pdfkitx.git',
  documentation: 'README.md'
});

Npm.depends({
  'pdfkit': "0.7.1",
  'blob-stream': "0.1.3",
  'brfs': "1.4.1"
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.3');
  api.use('ecmascript');
  api.use('cosmos:browserify@0.8.1', 'client');
  api.addFiles('pdfkitx.browserify.js', 'client');
  api.addFiles('pdfkitx.client.js', 'client');
  api.addFiles('pdfkitx.server.js', 'server');
  api.export('PDFDocument');
  api.export('blobStream', 'client');
  api.export('brfs', 'client');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('pascoual:pdfkitx');
  api.addFiles('pdfkitx-tests.client.js', 'client');
  api.addFiles('pdfkitx-tests.server.js', 'server');
});
