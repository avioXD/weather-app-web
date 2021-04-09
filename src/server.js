/** Importing required files */
const express = require('express');
const path = require('path');
const hbs = require('hbs');
const chalk = require('chalk');
const fetch = require('node-fetch');
const { response } = require('express');
const { request } = require('http');

/** setiing up oprating variables */
const app = express();

/** setting up hbs engine */
app.set("view engine", "hbs");

//** setting up required paths */
const staticPath = path.join(__dirname, "../public");
const viewPath = path.join(__dirname, "../templates/views");
const partialPath = path.join(__dirname, "../templates/partials");

//** declear those static paths in express */

app.use(express.static(staticPath)); /** it will set path to 'project_root/public */
app.set("views", viewPath); /** it will set the views folder path 'project_root/templates/views */
hbs.registerPartials(partialPath); /** it will register those parcels in 'project_root/templates/parcels' folder */


//** Defining PORT */

const PORT = process.env.port || 8000;
app.listen(PORT);
console.log(chalk.greenBright.underline.inverse(" Server Running.... "));
console.log(chalk.blueBright.underline.inverse(PORT));




//** page switch  */

app.get('/', (request, response) => {
    response.render("index");

});
app.get('/about', (request, response) => {
    response.render('about');
});
app.get('/places', (request, response) => {
    response.render('places');
});
app.get('*', (request, response) => {
    response.render('404error');
})