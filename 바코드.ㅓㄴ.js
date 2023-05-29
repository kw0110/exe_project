<script src="https://cdn.jsdelivr.net/npm/quagga/dist/quagga.min.js"></script>
<div id="scanner-container"></div>
// Specify the container for the scanner
const scannerContainer = document.getElementById('scanner-container');

// Initialize the QuaggaJS scanner
Quagga.init({
  inputStream: {
    name: 'Live',
    type: 'LiveStream',
    target: scannerContainer
  },
  decoder: {
    readers: ['ean_reader', 'upc_reader'] // Specify the barcode types to detect
  }
}, function(err) {
  if (err) {
    console.error(err);
    return;
  }
  console.log('QuaggaJS initialized.');

  // Start the scanner
  Quagga.start();
});

// Listen for barcode detection events
Quagga.onDetected(function(result) {
  console.log('Barcode detected:', result.codeResult.code);
});
