const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const sequelize = require('./util/database');
const User = require('./models/blog');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended:false}))


const homeRoute = require('./routes/home');
const adminDashboardRouter = require('./routes/adminDashboard');
const createBlogRouter = require('./routes/createBlog');

app.use(homeRoute);
app.use('/admin',adminDashboardRouter);
app.use('/admin', createBlogRouter);

sequelize.sync({force:true})
.then(result => {app.listen(3000)})
.catch(err => {console.log(err)});


