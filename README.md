How to get the code running locally:

Step 0: Download Node.js. This code depends on it heavily, and you will need to be able to write commands with it in the terminal. There are many sources online on how to do this, as it is the standard for countless JavaScript projects. This is the link that has worked for me consistently on how to install it: https://nodejs.org/en/download/

Step 1: Get this code. Either download it as a zip file, clone it, etc.

Step 2: Open the folder that contains all of this code in an IDE (preferrably Visual Studio Code)

Step 3: Open the terminal in your IDE (for Visual Studio Code, this is done with ctrl + `), or separately in the same directory as the code

Step 4: In the terminal, type the command, "npm i" in order to install all of the dependencies the project requires. If the command is not found, then you should go back and see if you missed any steps involving installing node.

Step 5: The terminal may prompt you with dependency vulnerabilities. This is fixed easily by typing the command, "npm audit fix"

Step 6: After letting the command finish, you should have a new folder called node_modules. You do not want to commit this folder when changes are made. Now, in the terminal, type the command "make"

Step 7: Once that command is done, with no errors, type the command, "make dev"

Step 8: Now the terminal should prompt you with a link to a localhost (typically 8080). Open the link, or type in the link into Chrome (Firefox should work, but Chrome is more reliable). 

Step 9: If the page prompts you with some kind of security message, click a drop down and select the option to follow the link anyway. If this option is not available to you, then follow this link for the simple solution: https://stackoverflow.com/questions/35531347/localhost-blocked-on-chrome-with-privacy-error

Once the code compiles in your terminal, the Jitsi Meet homepage opens, and then start a new conference and see the viewer.


If you look at the code on Visual Studio Code, you may notice that there are red lines indicating errors throughout despite the code compiling and running successfully. This is because the code was originally in typescript. In order to get rid of these error signs, go to the extensions tab on the side bar, search for @builtin, scroll to the bottom where TypeScript and JavaScript Language Features is. Click on it, disable it, and then reload.
