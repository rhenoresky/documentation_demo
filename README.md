# 📘 Adding and Editing Content in the `docs` Folder

This documentation explains how to add and edit content in the `docs` folder.

## 📂 `docs` Folder Structure

By default, the `docs` folder structure in the web-docs project looks like this:

```
my-site/
├── docs/
│   ├── faqs.mdx
│   ├── welcome.mdx
│   ├── why.mdx
│   ├── setup/
│   │   ├── apis.mdx
│   │   ├── quick-start.mdx
```

## ✏️ Adding a New Document

1. **Create a new file in the `docs` folder**

   Add a new Markdown file in the `docs` folder. For example, create a file named `new-document.mdx`:

   ```sh
   touch docs/new-document.mdx
   ```

2. **Write the document content**

   Add content to `new-document.mdx` using the following format:

   ```mdx
   ---
   title: New Documentation
   description: New Description
   sidebar_position: 3
   ---

   # New Documentation

   This is an example of a new document in web-docs.
   ```

3. **Add to Sidebar (Optional)**

   If using a manual sidebar (`sidebars.js`), add an entry for the new document:

   ```js
   module.exports = {
     tutorialSidebar: [
       { type: "doc", id: "faqs" },
       { type: "doc", id: "welcome" },
       { type: "doc", id: "why" },
       { type: "category", label: "Setup", items: ["setup/apis", "setup/quick-start"] },
       { type: "doc", id: "new-document" },
     ],
   };
   ```

## 📝 Editing Existing Content

1. **Open the file to be edited**

   Locate the file you want to update in the `docs` folder. For example, to edit `faqs.mdx`:

   ```sh
   nano docs/faqs.mdx
   ```

2. **Make changes to the content**

   Update the text, title, or content as needed. Example:

   Before:

   ```mdx
   # FAQ

   This is the FAQ page.
   ```

   After:

   ```mdx
   # Frequently Asked Questions (FAQ)

   This is the updated FAQ page with more information.
   ```

3. **Save the changes**

   If using a terminal editor like `nano`, press `CTRL + X`, then `Y` to save.

## 🚀 Running and Checking Changes

1. Run the development server to see the changes:

   ```sh
   npm run start
   ```

2. Open your browser and access `http://localhost:3000/docs/faqs` or the edited page to view the results.

Your new document is now available on your web-docs site! 🚀
