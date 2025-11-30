 # Node File Sorter & Organizer
---
Intelligent File Management Tool
---
# Overview

The Nullify-Gutter: Node File Sorter & Organizer is a robust, command-line utility built with Node.js designed to automatically clean up and categorize files within a specified directory.
This tool reads a file's extension (e.g., .jpg, .pdf, .mp3) and automatically creates a corresponding folder named after that extension (e.g., a folder named jpg, pdf, or mp3) before moving the files into the correct locations. This provides an immediate solution for managing cluttered directories, enforcing a clean and organized file system structure.
---
Current Sorting Logic:

Default Behavior: Files are moved into a folder named after their extension (e.g., document.pdf moves into the pdf/ folder).

Excluded Files: The script automatically skips its own configuration files, specifically files ending in .js or .json.

Error Handling: Includes a try...catch block to report errors gracefully during file processing.
---
# Features

Extension-Based Sorting: Creates destination directories based directly on the file extension found.

Automatic Folder Creation: Creates destination directories only if they do not already exist.

In-Place Sorting: Operates directly on the specified directory, modifying the file structure efficiently.

Safe Execution: Skips files essential to the Node project itself (.js and .json files) to prevent errors.

Logging: Provides console output confirming which file is currently being processed.
---
# Installation

To use this tool, you must have Node.js installed on your system.

Clone the Repository:

git clone [https://github.com/sanjayzorojuro/Nullify-Gutter.git](https://github.com/sanjayzorojuro/Nullify-Gutter.git)


cd Nullify-Gutter

---
Install Dependencies:

npm install


(Note: This project does not require external NPM dependencies, but this is best practice.)

---


# Configuration & Customization

The core logic is self-contained within the main JavaScript file.

To customize the primary directory:

Open the main sorting script (index.js).

Locate the line defining the base path:

const baseurl = "X:\\Nullify-gutter";


Change the value to your desired folder path.


---

# Contribution

We welcome contributions to expand the functionality of this project! If you have suggestions for improvements (e.g., handling files without extensions, better configuration methods):

Fork the repository.

Create a new feature branch.

Commit your changes.

Push to the branch.

Open a Pull Request.
