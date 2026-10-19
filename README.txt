MARGINALIA — PROJECT SETUP

This is a single-file static web app. The main file is index.html.

PROJECT SETUP
1. Extract the Marginalia.zip file.
2. Open your code editor.
3. Choose Open Folder (or File > Open Folder).
4. Select the extracted Marginalia folder — the folder that contains index.html.
5. Inspect the project and make the changes you want.

LOCAL PREVIEW
In your terminal, from this folder, run:
  python -m http.server 8000
Then open:
  http://localhost:8000
Stop the server with Ctrl+C.

DEPLOYMENT
This project has no build step or package dependencies. Deploy the folder as a static site. The root directory should contain index.html. Your hosting provider will give you a public URL; localhost is only for your own computer.

