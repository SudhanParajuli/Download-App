const apkFileUrl = 'PU Civil Engineering Notes_1_1.0.apk';

document.getElementById('downloadBtn').addEventListener('click', function() {
  downloadApkFile(apkFileUrl);
});

function downloadApkFile(url) {
  const anchor = document.createElement('a');
  anchor.style.display = 'none';
  anchor.href = url;
  anchor.download = 'Engineering.apk'; 

 
  document.body.appendChild(anchor);

  anchor.click();

  document.body.removeChild(anchor);
}
