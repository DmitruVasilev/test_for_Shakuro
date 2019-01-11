findIndexString = (string, a, b) => {
    try {
        if (typeof string !== 'string') {
            throw new Error('Type is not a string')
        }

        let stringLength = string.length - 1;

        while (stringLength > 0) {
            let substring = string.substring(stringLength, stringLength + 1)
            if (substring === a || substring === b) {
                return stringLength;
            }
            stringLength = stringLength - 1;
        }
        return -1;
    }
    catch (e) {
        console.error(e.message);
    }
}


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.