const app = require('./app');
var passport = require('passport');
var appStarter = require('./appStarter');
var crypto = require('crypto');
var mime = require('mime');
var multer = require('multer');
const path = require('path');
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './images')
    },
    filename: function (req, file, cb) {
        crypto.pseudoRandomBytes(8, function (err, raw) {
            cb(null, raw.toString('hex') + '-' + Date.now() + '.' + mime.extension(file.mimetype));
        });
    }
});
var upload = multer({
        storage: storage,
        fileFilter: function (req, file, cb) {
            var filetypes = /jpeg|jpg/;
            var mimetype = filetypes.test(file.mimetype);
            var extname = filetypes.test(path.extname(file.originalname).toLowerCase());
            if (mimetype && extname) {
                return cb(null, true);
            }
            cb("Error: File upload only supports the following filetypes - " + filetypes);
        }
    }
);


app.get('/', function (req, res) {
    res.sendfile('./mainPage.html');
});

app.get('/signup', function(req, res, next){
    res.sendfile('./signup.html');
});

app.post('/signup', passport.authenticate('local.signup', {
    successRedirect: '/mainPage',
    failureRedirect: '/signup',
    failureFlash: true
}));

app.get('/signin', function (req, res, next) {
    res.sendfile('./signin.html');
});

app.get('/exe', (req, res) => {
    appStarter.getOutput((error, results) => {
        res.send(results);
    });
});

app.post('/', upload.array('images', 12), function (req, res, next) {
    res.redirect('/');
});

/**
 * @api {post} /user/signin
 * @apiName Signin
 * @apiGroup checkData
 */
app.post('/user/signin', passport.authenticate('local.signin', {
    successRedirect: '/',
    failureRedirect: './signin.html',
    failureFlash: true
}));