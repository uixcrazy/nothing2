# 🐾 	🐾 	🐾  nothing 🐾 	🐾 	🐾

## Installation

### UI

  1. icon: https://material.io/tools/icons/?style=baseline

#### Before you start

* [node](https://nodejs.org/) version should be 6 or above (to check `node -v`) or use [nvm](https://github.com/creationix/nvm)
* [npm](https://www.npmjs.com/) version should be 3 or above (to check `npm --version`)

#### Clone the repo and install

```sh
git clone https://github.com/uixcrazy/nothing.git
cd nothing
yarn
```

To run project on your local: ```yarn start```

Then open ```http://localhost:3000/``` to see your app.


## Explanation Front-end tech stack

> It help you create new project by own.

1. This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

    ```
      npx create-react-app nothing
      cd nothing
      npm start
      npm run eject
    ```

2. Code Splitting

    [Code Splitting in Create React App](https://serverless-stack.com/chapters/code-splitting-in-create-react-app.html)
      or
    [Code Splitting with React and React Router](https://tylermcginnis.com/react-router-code-splitting/)

3. Create Mock API

    We use [json-schema-faker](https://github.com/json-schema-faker/json-schema-faker).

    Three steps:

      3.1 Declare the schema

      [JSON Schema](http://json-schema.org/)
      [Miscellaneous Examples
](http://json-schema.org/learn/miscellaneous-examples.html) vs [jsf](https://github.com/json-schema-faker/json-schema-faker#inferred-types)

        ```
        {
          "$id": "https://example.com/person.schema.json",
          "$schema": "http://json-schema.org/draft-07/schema#",
          "title": "Person",
          "type": "object",
          "properties": {
            "firstName": {
              "type": "string",
              "description": "The person's first name."
            },
            "lastName": {
              "type": "string",
              "description": "The person's last name."
            },
            "age": {
              "description": "Age in years which must be equal to or greater than zero.",
              "type": "integer",
              "minimum": 0
            }
          }
        }
        ```

      3.2 Generate random data: ```npm run mock-api```

        ```
        {
          "firstName": "John",
          "lastName": "Doe",
          "age": 21
        }
        ```

      3.3 Serve random data: Create **Provider** to connect data be like real API
        [JSON server](https://github.com/typicode/json-server) creates a realistic API using the static JSON file we created

    REFs:

      [Sample](https://medium.freecodecamp.org/rapid-development-via-mock-apis-e559087be066)


## Folder Structure (update later)

After creation, your project should look like this:

```
my-app/
  README.md
  node_modules/
  package.json
  config/
  scripts/
  public/
    index.html
    favicon.ico
  ...

  src/
    ...
```


## Conding Standard

* [eslint](https://eslint.org/docs/user-guide/configuring)
* [airbnb](https://github.com/airbnb/javascript)







# Next Step

- build structure mock data: for api team vs create mockData

- create (Tags:) lasted, related

-   ⇡ xổ thành dropdown xuống
- hiển thị 20 topic mới click gần nhất (the lasted history topic)

- lazy load (React)

- open detail dialog

- add icon loading, love, download
