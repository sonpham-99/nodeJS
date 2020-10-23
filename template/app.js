var express = require ('express');
var nunjucks  = require('nunjucks');

var app = express();
app.use(express.static('/public'));

nunjucks.configure(['views/'], { // set folders with templates
    autoescape: true, 
    express: app
});

app.get( '/', function( req, res ) {
    var users = [
        {
            fiNa: 'Annabelle',
            laNa: ' Stigma',
            age: '18'
        },
        {
            fiNa: 'Libra',
            laNa: ' Beacon',
            age: '17'
        },
        {
            fiNa: 'Annabelle',
            laNa: ' Stigma',
            age: '18'
        },
        {
            fiNa: 'Libra',
            laNa: ' Beacon',
            age: '17'
        }
    ]
    return res.render( 'index.html', {nguoidung: users} ) ;
    } ) ;

app.listen(3000, function() {
    console.log('Example app listening on port 3000...');
    });