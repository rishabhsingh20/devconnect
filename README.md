Installation
```bash
# Install dependencies for server
npm install

# Install dependencies for client
npm run client-install

# Run the client & server with concurrently
npm run dev

# Run the Express server only
npm run server

# Run the React client only
npm run client
```

for MongoDB:
generate a key and use it aas follows
```
module.exports = {
  mongoURI: 'YOUR_OWN_MONGO_URI',
  secretOrKey: 'YOUR_OWN_SECRET'
};
```
