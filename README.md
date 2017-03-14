The challenge is to be able to do the following actions in a given website:
 * Trigger form submit with a pair of credentials.
 * Find the form elements in the dom.
 * Obtain the values from the login elements in the dom.

# Load The Extension

1. Go to 'chrome://extensions' in your chrome browser.
2. In the upper right corner check 'Developer mode'
3. In the menu that appeared select 'Load unpacked extension...'
4. Select this folder.

In order to reload your changes:
1. Go to 'chrome://extensions' in your chrome browser.
2. Click 'Update extensions now', 'Ctrl+r', or 'Cmd+r'.


# The Challenge

In this folder there is a file called challenge.js with three functions that you will need to override.
Currently challenge.js has sample code that shows a proof of concept for https://facebook.com

You can test the functions by clicking the UnifyID icon in the top right corner of Google Chrome and select the function
to test from the menu.

Here is what is expected when selecting each option from the menu:
 * Detect Fields: This will call your function `detectFormFields` and put a border around the elements.
 * Login: This will call your function `loginWithCredentials` with fake credentials.
 * Get Form Values: This will alert the result from your function `obtainFieldsValues`

You can change the credentials for testing the Log In in the file ./dist/credentials.json

# Optional

In case that you need to preserve a global state across several pages you can use the background script (background.js)
that is in this folder.
More about background scripts: https://developer.chrome.com/extensions/background_pages
More about communication with the background script: https://developer.chrome.com/extensions/nativeMessaging

# David's Contribution

## Confirming testing with FB

After going into Instagram I went back to FB to tweek around the getInputFields function and changed the jQuery to detect name instead of ID.

I tried to make conditionals from this.location.href but it doesn't work.

Found out that the jQuery still returned a value even when the element with that name seach didn't exist so I decided to make a conditional within the function when grabbing the username and password. It's also detecting correctly the field forms. Onto paypal.

Got paypal to work by adding in more conditional if's but realized the detect isn't detecting the login button so I'm going back to do that. I think working on page to page is better since I'm sifting through the html anyways.

Found the button on instagram and did the same conditional idea with paypal. Somehow the login also works on Instagram already, taking my saved credentials from the browser rather than the credentials from the json file. Now onto BoA.

Finished BOA and moving on to Citi, but wondering if there is a better way to do this. It gets the job done but it certainly is ugly.

Citi somehow gets the form values already but fails to detect everything. Citi is really weird because they labeled their form box name username so the inputs inside get caught on something else. Detecting all forms seems like it's not highlighting the username box but it is detecting it and would login if it had the right info. Onto Yahoo.

Yahoo is the worst... they have 2 pages for some reason, one for username and the second for the password.
Interestingly enough it works. I just have to use the extension twice to submit it because our login function will just press the button when executed.

The last change I made was to replace the username and password variables from the function arguments in the loginWithCredentials function so that if a user has their username and password saved on their browser it can use that to login instead of reaching into the credentials.json file.
