/**File: books.js
 * Author: Zeyu Ma
 * StudentID: 300737060
 * App Name: COMP308-W2019-MidTerm-300737060 */

let mongoose = require('mongoose');

// create a model class
let gamesSchema = mongoose.Schema({
    Title: String,
    Description: String,
    Price: Number,
    Author: String,
    Genre: String
},
{
  collection: "books"
});

module.exports = mongoose.model('books', gamesSchema);
