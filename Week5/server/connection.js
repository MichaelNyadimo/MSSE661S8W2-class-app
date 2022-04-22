const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost//4000');

mongoose.connection.once('open', function(){
console.log('Connection made')
}).on ('error', function(error){
    console.log('connection error:', error);
});