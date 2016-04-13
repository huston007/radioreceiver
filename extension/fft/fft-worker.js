importScripts('../dsp.js');
importScripts('fft.js');
var FFT_SIZE = 4096;
FFT.init(FFT_SIZE);

onmessage = function(event) {
    var buffer = event.data.buffer;
    var IQ = iqSamplesFromUint8(buffer);
    var real = IQ[0];
    var imagine = IQ[1];

    FFT.fft1d(real, imagine);

    postMessage(real);
};

