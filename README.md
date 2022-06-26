# :blue_heart: Chopin JS
A simpler SMTP client for Node.js backend eviroment.

# Getting Started
You can get the library by cloning it like follow bellow:

```bach
npm install chopinjs
```

After that, you can import the library on your node enviroment:

```javascript
import Chopin from 'chopinjs';
```

# Client

The client can be configured like bellow:

```javascript
import Chopin from 'chopinjs'  

const config = {
  host: 'mail.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: 'user@email.com',
    pass: 'foo@bar'
  }
};
const client = new Chopin(config);
```

# Sending a email

To send a email, you can do like follow the example bellow:

```javascript
const client = new Chopin();

const email = await client.send({
  from: 'contact@domain.com',
  to: 'example@email.com',
  subject: 'Hello',
  html: '<h1>Contact support</h1>'
});
```
