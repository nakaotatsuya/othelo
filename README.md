# What is this
This is an othelo game which enables us to play online.

# Quick Demo
```bash
git clone https://github.com/nakaotatsuya/othelo.git
```
you may need to install this at the ~/othelo/ directory.
```bash
npm install --save redis express socket.io
```
if you don`t install redis, you should this code.
```bash
brew install redis
```

Start the redis server
```bash
redis-server
```
And, on another terminal, you should type this.
```bash
node index.js
```

If you can access http://localhost:80 , it works well.

# Another PC
If you want to play the game via another PC, you should use ngrok.
```bash
brew install ngrok
```

```bash
ngrok http 80
```
You will find like this.

```
ession Status                online
Session Expires               7 hours, 59 minutes
Version                       2.3.35
Region                        United States (us)
Web Interface                 http://127.0.0.1:4040
Forwarding                    http://d53df4b32f91.ngrok.io -> http://localhost:80
Forwarding                    https://d53df4b32f91.ngrok.io -> http://localhost:80
```
You can access http://d53df4b32f91.ngrok.io or https://d53df4b32f91.ngrok.io instead of http://localhost:80. So, you can access by another PC.
