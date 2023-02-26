function uploadImage() {
  const input = document.getElementById('file-input');
  const preview = document.getElementById('preview');
  const width = document.getElementById('width-input').value;
  const height = document.getElementById('height-input').value;
  
  if (input.files && input.files[0]) {
    const reader = new FileReader();
    reader.onload = function(e) {
      const img = new Image();
      img.src = e.target.result;
      img.onload = function() {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = width;
        canvas.height = height;
        ctx.drawImage(img, 0, 0, width, height);
        preview.src = canvas.toDataURL();
        const downloadLink = document.getElementById('download-link');
        downloadLink.href = canvas.toDataURL('image/png');
        downloadLink.style.display = 'block';
      }
    }
    reader.readAsDataURL(input.files[0]);
  }
  const downloadLink = document.getElementById('download-link');
downloadLink.href = canvas.toDataURL('image/png');
downloadLink.style.display = 'inline-block';

}
