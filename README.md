I used qulix.test to obtain a web-token.

I change the authentification script, because I couldn't write a web-token in React state. For this purpose I used https://www.npmjs.com/package/react-google-login .

If you don't use Windows, you should change this string: "start": "set PORT=80 && react-scripts start" inside  package.json. The right string for Linux and Mac is "start": "PORT=80 react-scripts start".

You need to install dependencies: npm install. 
After this you can launch this app: npm start.
You also need to change url from 'localhost' to 'http://qulix.test/'.

I hope I fullfiled essential requirements.

I add a feature, which allows you to remove email. You need to select email by checkbox and click trash-icon. This is the simplest feature without putting email in trash. You completely discard messages from your box without possibility to return them. I did this, because I neeed to gain practice with diffent types of HTTP-requests.

I add sending mail without attachments.
