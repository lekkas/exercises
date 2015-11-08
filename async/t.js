var async = require('./');

var getUser = function(userId) {
  return function(cb) {
      setTimeout(function() {
            cb(null, {userId: userId, name: 'Joe'});
          }, Math.random() * 100);
    };
};

var upperCaseName = function(cb, user) {
  cb(null, user.name.toUpperCase());
};

var userThunk = getUser(22);

async.sequence([userThunk, upperCaseName])(function(err, data) {
  console.log(data);
});

var userThunk1 = getUser(1);
var userThunk2 = getUser(2);

async.parallel([userThunk1, userThunk2])(function(err, users) {
  console.log(users);
});

var faster = function(cb) {
  setTimeout(cb.bind(null, null, "I'm faster"), 10);
}

async.race([userThunk1, faster])(function(err, winner) {
  console.log(winner);
});
