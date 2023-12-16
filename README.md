# PURPOSE / OBJECTIVE
The function of the code, summarily, is a chrome extension classifying the content on webpages and identifying potential fields that indicate a checkout form as well as isolating the elements for further features to be built upon. Currently, it is focused on finding checkout pages to potentially autofill, but the code can very easily be adapted to find any category of elements in the DOM as it is fully accessible and fully customizable


# INSTRUCTIONS
- to install the backend `run npm install` in the backend folder, any version of node above 18 should work

- be sure to provide an api key in the `OPENAI_API_KEY` section outlined in the ".env.example" file, you will have to make your own .env file with this info or the backend will not function

- make sure to have the backend running or the extension will fail, the command is simple, navigate to the backend folder and `node backend.js`

- load this extension into chrome or brave by toggling developer mode then loading in the contents of the extension folder unpacked

- the extension works automatically on every page and will classify the fields when you select `identify the checkout parameters` either in the extension menu or hte context menu on page

- you can view the results of classifcation in the alert generated, in the node.js background or in the console in the web browser

# ENHANCEMENTS / CUSTOMIZATIONS
- one can easily modify the "content" section in the backend.js to attune the classification prompt to adapt to whatever paradigm they choose when it comes to searching and classifying elements in the DOM
- it would take a fair bit of work, but one can also actually fill the elements by adding handlers for various iframes/bot protections/ etc. to fill and submit forms, some code is provided to start in popup.html and popup.js

# CREDITS
- The openai API is primarily used along with the `gpt-3.5-turbo-1106` large language model to power the classification algorithm
