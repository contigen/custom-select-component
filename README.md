# Custom Select Component

The component features an HTML details element as the main element

https://user-images.githubusercontent.com/69436315/192927824-7d8a5c91-37cb-40fc-9ade-ce362352dcb1.mp4

The Select component has three props: `autoselect` (boolean) `multiple` (boolean) && `defaultArr` (required array), typed with React's PropTypes library.

The autoselect prop when added, activates automatic selections when using the _`tab key` or `ArrowUp && ArrowDown`_ to focus; **multiple** prop when added, enables multiple selections or a single selection when omitted. The **defaultArr** prop contains the default options of the Select component.

### Keyboard functionality

`esc` closes the component when open

`PageUp` moves the focus to the first item, while `PageDown` moves the focus to the last item





`ArrowUp` && `ArrowDown` keys control the focus of the items; the `tab` key does that by default, apparently.

**Gotcha** - using the Arrow keys to move focus once or twice after initial focus of the items has an awkward behaviour.

## Code Structure

`components` folder contains only the select component; this project might be extended to a bigger project for building custom components.

`utils` folder contains simple helper functions used for the component

`hooks` folder contains a custom array hook used in the component

## The Why

Something like a challenge, after seeing a random video about building a custom select component, I decided to do it, and be creative with it by avoiding unnecessary stuff - using the details HTML element as the main of the project, semantic by default.

## Contributing

If you think there's a feature that needs to be implemented or anything, open a PR.

## Usage

Feel free to use it, give credits.

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
