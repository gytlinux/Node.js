
var routes = {
    index:require('./main'),
    skill:require('./skill'),
    admin:require('./admin')
    }

module.exports = function(app){

app.use('/',routes.index);
app.use('/skill',routes.skill);
app.use('/admin',routes.admin);


}
