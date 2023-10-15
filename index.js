const express = require('express');
const app = express();
const port = 8000;
const expressLayouts = require('express-ejs-layouts');

// static files
app.use(express.static('./assets'));

// use express-ejs-layouts
app.use(expressLayouts);

// extract styles and scripts from sub pages into the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

// use express router
app.use('/', require('./routes'));

// view engine set up
app.set('view engine', 'ejs');
app.set('views', './views');

app.listen(port, function(err){
    if(err){
        console.log(`Error in starting Server: ${err}`);
    }

    console.log(`Server is running on port: ${port}`);
})