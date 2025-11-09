import fs from "fs/promises";
import path from "path";

const baseurl = "X:\\Nullify-gutter";   //main folder where the files are located.

const files = await fs.readdir(baseurl);  //reades all the files in the main folder and returns array of files names.

for (const item of files) {
  console.log("File is running for", item);
  const ext = item.split(".").pop(); // splits when the . is found and then pop the top one.

  // Skip JS and JSON files
  if (ext !== "js" && ext !== "json" && item.includes(".")) {    // also skips the files which do not have dot.
    const extFolder = path.join(baseurl, ext);

    try {
      // Create the folder if it doesn’t exist
      await fs.mkdir(extFolder, { recursive: true });   //recursive: true is used so that it dont show error if the folder already exists.

      // Move the file into the folder
      await fs.rename(path.join(baseurl, item), path.join(extFolder, item));       //fs.rename(path.join(oldurl) ,path.join(newurl))
      
    } catch (err) {
      console.error(`Error processing ${item}:`, err);
    }
  }
}
