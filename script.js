
// Select elements
const dropArea = document.getElementById('drop-area');
const fileList = document.getElementById('fileList');
const manualText = document.getElementById('manualText');

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

// Handle file input and display the file names
function handleFiles(files) {
    for (let file of files) {
        const li = document.createElement('li');
        li.textContent = `File added: ${file.name}`;
        fileList.appendChild(li);

        // Optional: Upload file to a server or show a preview
        console.log(`File added: ${file.name}`);
    }
}

// Handle manual text submission
function submitManualText() {
    const text = manualText.value.trim();
    if (text === '') {
        alert('Please enter some text before submitting.');
        return;
    }

    console.log('Submitted text:', text);
    alert('Your text has been submitted successfully!');
    manualText.value = ''; // Clear the text area after submission
}
