// This file is a wrapper for app.js to maintain compatibility with commands that expect server.js
import './app.js';

// The actual server logic is in app.js
console.log('Server started via server.js wrapper');
