const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

const readdir = promisify(fs.readdir);
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);
const stat = promisify(fs.stat);

// Font class mapping
const fontClassMapping = {
  'font-inter': 'font-satoshi-bold',
  'font-ibm-plex': 'font-satoshi-regular',
  'font-ibm-plex-mono': 'font-satoshi-medium'
};

// Function to recursively get all files in a directory
async function getFiles(dir) {
  const subdirs = await readdir(dir);
  const files = await Promise.all(subdirs.map(async (subdir) => {
    const res = path.resolve(dir, subdir);
    return (await stat(res)).isDirectory() ? getFiles(res) : res;
  }));
  return files.flat();
}

// Function to update font classes in a file
async function updateFontClasses(filePath) {
  try {
    // Only process certain file types
    if (!/\.(tsx|ts|jsx|js|css)$/.test(filePath)) {
      return false;
    }

    // Read the file content
    const content = await readFile(filePath, 'utf8');
    
    // Create a new content with replacements
    let newContent = content;
    
    // Replace all font classes
    for (const [oldClass, newClass] of Object.entries(fontClassMapping)) {
      const regex = new RegExp(oldClass, 'g');
      newContent = newContent.replace(regex, newClass);
    }
    
    // Only write to the file if changes were made
    if (newContent !== content) {
      await writeFile(filePath, newContent, 'utf8');
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error);
    return false;
  }
}

// Main function to run the script
async function main() {
  try {
    const srcDir = path.resolve(__dirname, 'src');
    const files = await getFiles(srcDir);
    
    let changedFilesCount = 0;
    
    for (const file of files) {
      const changed = await updateFontClasses(file);
      if (changed) {
        changedFilesCount++;
        console.log(`Updated font classes in ${file}`);
      }
    }
    
    console.log(`\nCompleted! Updated ${changedFilesCount} files.`);
  } catch (error) {
    console.error('Error:', error);
  }
}

// Run the script
main();
