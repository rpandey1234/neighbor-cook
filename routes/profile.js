var db = require('../models');

exports.view = function(req, res) {
  db.User
    .find({
      where: { id: req.params.id },
      include: [ db.Item ]
    })
    .success(function(user) {
      if (!user) {
        // TODO: alert user doesn't exist
        console.log('User ' + req.params.id + ' does not exist');
        res.redirect('/');
      } else {
        var data = {
          editable: req.isAuthenticated() && user.id == req.user.id,
          name: user.getFullname(),
          image: user.img_path,
          location: 'Stanford, CA',
          donated: 19,
          received: 4,
          inventory: user.items
        };
        res.render('profile', data);
      }
    });
};