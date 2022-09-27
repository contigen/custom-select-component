# Custom Select Component

The component features an HTML details element as the main

The Select component has three props: `autoselect` (boolean) `multiple` (boolean) && `defaultArr` (required array), enforced with React's PropTypes library.

The autoselect prop when added, activates automatic selections when using the _`tab key`_ to focus; **multiple** prop when added, enables multiple selections or a single selection when omitted. The **defaultArr** prop contains the default options of the Select component.

## Code Structure

`components` folder contains only the select component; this project might be extended to a bigger project for building custom components.

`utils` folder contains two simple helper functions

`hooks` folder contains a custom array hook used in the component

## The Why

Something like a challenge, after seeing a random video about building a custom select component, I decided to do it, and be creative with it by avoiding unnecessary stuff - using the details HTML element as the main of the project, semantic by default.

## Contributing

If you think there's a feature that needs to be implemented or anything, open a PR.

## Usage

Feel free to use it, credits will be appreciated.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
