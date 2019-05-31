I used qulix.test to obtain a web-token.

I change the authentification script, because I couldn't write a web-token in React state. For this purpose I used https://www.npmjs.com/package/react-google-login .

If you don't use Windows, you should change this string: "start": "set PORT=80 && react-scripts start" inside  package.json. The right string for Linux and Mac is "start": "PORT=80 react-scripts start".

You need to install dependencies: npm install. 
After this you can launch this app: npm start.
You also need to change url from 'localhost' to 'http://qulix.test/'.

I hope I fullfiled essential requirements.
