const glob = require('glob'); // Ensure glob is imported correctly
const fs = require('fs');
const path = require('path');

// Synchronously get all React files
function getReactFilesSync(directory) {
  return glob.sync(`${directory}/**/*.{js,jsx}`); // This pattern will include all JS and JSX files recursively
}

// Function to read and concatenate code
function extractReactCode() {
  try {
    const reactFiles = getReactFilesSync('src'); // Include all files inside 'src', including subfolders like 'components'
    let allCode = '';

    // Read each file and append its content to allCode
    for (const file of reactFiles) {
      const code = fs.readFileSync(file, 'utf-8');
      allCode += `\n// File: ${file}\n`;
      allCode += code;
      allCode += '\n';
    }

    // Write all code to a text file
    const outputPath = path.join(__dirname, 'react_code_output.txt');
    fs.writeFileSync(outputPath, allCode, 'utf-8');
    console.log(`React code extracted to ${outputPath}`);
  } catch (error) {
    console.error('Error extracting React code:', error);
  }
}

// Call the function
extractReactCode();
