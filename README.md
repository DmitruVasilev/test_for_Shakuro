gh-pages: https://dmitruvasilev.github.io/test_for_Shakuro/

## Refactoring

```
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
```

```
"dependencies": {
    "normalize.css": "^8.0.1", // нормализация стилей
    "prop-types": "^15.6.1", // проверка типов
    "react": "^16.7.0",
    "react-dom": "^16.7.0", // точка входа в DOM и средство рендеринга сервера для React
    "react-scripts": "2.1.3" // солянка react-create-app
  },
  "devDependencies": {
    "eslint-config-airbnb": "^17.1.0", // Популярный конфиг для eslint
    "eslint-plugin-import": "^2.7.0", // плагин для поддержки синтаксиса импорта / экспорта
    "eslint-plugin-jsx-a11y": "^6.1.2", // eslint правила для элементов JSX
    "eslint-plugin-react": "^7.12.0", // eslint правила для реакта
    "gh-pages": "^2.0.1", // хостинг
    "husky": "^1.3.1", // Пре коммит
    "lint-staged": "^8.1.0", // Запускает поочередно линтеры
    "prettier-eslint-cli": "^4.7.1", // Использует конфиг EsLint для Prettier
    "react-test-renderer": "^16.2.0" // для тестов
  },
```

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
