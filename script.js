
// Select elements
const dropArea = document.getElementById('drop-area');
const fileList = document.getElementById('fileList');

// Highlight drop area when file is dragged over it
['dragenter', 'dragover'].forEach(eventName => {
    dropArea.addEventListener(eventName, e => {
        e.preventDefault();
        e.stopPropagation();
        dropArea.classList.add('highlight');
    }, false);
});

['dragleave', 'drop'].forEach(eventName => {
    dropArea.addEventListener(eventName, e => {
        e.preventDefault();
        e.stopPropagation();
        dropArea.classList.remove('highlight');
    }, false);
});

// Handle dropped files
dropArea.addEventListener('drop', e => {
    const files = e.dataTransfer.files;
    handleFiles(files);
});

// Handle manual file selection
function handleFiles(files) {
    for (let file of files) {
        const li = document.createElement('li');
        li.textContent = file.name;
        fileList.appendChild(li);

        // Optional: Upload file to the server or show preview here
        console.log(`File added: ${file.name}`);
    }
}
