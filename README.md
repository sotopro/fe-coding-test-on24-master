## Coding Test
This package contains a small application that serves JSON data related to Webcast Events via a REST API. Your job is to build a UI on top of the API, based on the provided wireframes.

### About the application
The application generates random data at startup via json-server and stores that in-memory, making it available via the following exposted REST API:

1. `api/events/` GET - lists the webcast events and their data.
2. `api/events/{id}` GET - data for a specific webcast event.

### Extending the application
We'd like you to build an SPA on top of the existing two API endpoints. It should allow a user to browse the list of webcasts. 
While the visual design of the application is important to us, we don't expect you to be a designer, so we are not looking
for you to fill in the design details with high fidelity/style. However, we do expect you to be able to craft an intuitive and friendly experience.

Contained in this package is a wireframe for the views which you will be building.

![Webcasts UI Wireframe](fe-coding-test-on24-wireframe.png)

We primarily use React to build the Webcast Elite front end. So, for this exercise, 
we want your solution to be written using the React library.
Here are some other constraints:

* The solution only needs to work on modern browsers (one or both of the latest Chrome/Firefox).
* No other JavaScript frameworks and application libraries are allowed, e.g. Angular, Vue, Backbone, MUI etc.
* JS variants such as TypeScript are allowed.
* Build/Development tools are allowed.
* Polyfills are allowed.
* Babel is allowed.
* No CSS frameworks are allowed, e.g. Bootstrap, Bulma, etc.
* pre/post processors, e.g. LESS, SASS, or PostCSS are allowed.
* CSS Resets/Normalizers are allowed.

Additional Requirements:
* A User should be able to bookmark any of the views in your app. Each view should be accessible via a link. Visiting a specific Webcast Event using an ID should be possible.
* Clicking on "Start Time" in All Webcast Events view should sort the table of events by Start Time and toggle between ascdending and descending order.
* The "Help" view can contain static text of your choosing, but should be a noticeably separate view.
* Either "Events" or "Help" in the left bar should be highlighted indicating which section of the app is currently active.
* Please note: A developer should be able to access the above aforementioned requirements after only running one command: 
```sh
$ npm run start
```

Questions are expected and encouraged. So please let us know if you need any clarifications.

When you've completed the challenge, please delete the node_modules directory and compress the package contents as a compressed zip file.
You can also submit the package to your own GitHub private repository. Please reach out to your point of contact for additional instructions if you want to do this.
Be prepared to walk someone through your solution and expand upon the work you've done.

Good luck and have fun with your coding challenge!

### Starting the app
* This application requires Node v14.17.5 (LTS at time of writing), or later.

Install npm and node.
* We often recommend candidates use https://github.com/nvm-sh/nvm, to install Node if it is not installed already.

Install dependencies
```sh
$ npm install
```

Running the app.
```sh
$ npm run start
```

Links: 
* API: `https://localhost:4000/api/events`
* UI Entry point: `https://localhost:4000/`
