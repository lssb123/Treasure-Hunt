const express = require("express");
const router = express.Router();
const User = require("../models/user");
const admin = require("../models/admin");
const sessions = require("../models/sessions");
const attempts = require("../models/attempts");

router.get("/", (req, res, next) => {
  return res.render("index.ejs");
});

router.get("/admin", (req, res, next) => {
  return res.render("admin.ejs");
});

router.get("/admindashboard", (req, res) => {
  // console.log('x')
  attempts.find({}, (err, data) => {
    // console.log(data)
    if (data) {
      res.render("admindashboard", { docs: data });
    }
  });
});

// ----------------------------------------------------------------

router.post("/admin", (req, res, next) => {

	admin.find({},(err,data)=>{
		console.log(data)
	})


  admin.findOne({ adminEmail: req.body.email }, (err, data) => {


	// let newAdmin = new admin({
	
	// 	adminName: "lssb",
	// 	adminEmail: "lssb@gmail.com",
	// 	password: "12345",
	//   });

	//   newAdmin.save((err, Person) => {
	// 	if (err) console.log(err);
	// 	else console.log("Success");
	//   });



    if (data) {
      if (data.password == req.body.password) {
        req.session.userId = data.unique_id;
        res.send({ Success: "Success!" });
      } else {
        res.send({ Success: "Wrong password!" });
      }
    } else {
      res.send({ Success: "This Email Is not regestered!" });
    }
  });
});

// ------------------------------------------------

router.post("/", (req, res, next) => {
  let personInfo = req.body;

  if (
    !personInfo.email ||
    !personInfo.username ||
    !personInfo.password ||
    !personInfo.passwordConf
  ) {
    res.send();
  } else {
    if (personInfo.password == personInfo.passwordConf) {
      User.findOne({ email: personInfo.email }, (err, data) => {
        if (!data) {
          let c;
          User.findOne({}, (err, data) => {
            if (data) {
              c = data.unique_id + 1;
            } else {
              c = 1;
            }

            let newPerson = new User({
              unique_id: c,
              email: personInfo.email,
              username: personInfo.username,
              password: personInfo.password,
              passwordConf: personInfo.passwordConf,
            });

            newPerson.save((err, Person) => {
              if (err) console.log(err);
              else console.log("Success");
            });
          })
            .sort({ _id: -1 })
            .limit(1);
          res.send({ Success: "You are regestered,You can login now." });
        } else {
          res.send({ Success: "Email is already used." });
        }
      });
    } else {
      res.send({ Success: "password is not matched" });
    }
  }
});

// router.get('/level5', (req, res, next) => {
// 	return res.render('level5.ejs');
// });

router.get("/level4", (req, res, next) => {
  // return res.render('level4.ejs');
  let id = req.sessionID;

  sessions.find({ _id: id }, (err, data) => {
    let userid = JSON.parse(data[0].session).userId;
    if (userid == undefined) {
      res.render("unauthorised.ejs");
    } else {
      User.findOne({ unique_id: userid }, function (err, data) {
        let details = {
          name: data.username,
          email: data.email,
        };
        res.render("level4.ejs", { data: details });
      });
    }
  });
});

router.get("/level3", (req, res, next) => {
  let id = req.sessionID;
  sessions.find({ _id: id }, (err, data) => {
    let userid = JSON.parse(data[0].session).userId;
    if (userid == undefined) {
      res.render("unauthorised.ejs");
    } else {
      User.findOne({ unique_id: userid }, function (err, data) {
        // console.log(data)
        let details = {
          name: data.username,
          email: data.email,
        };
        res.render("level3.ejs", { data: details });
      });
    }
  });
});

router.get("/level2", (req, res, next) => {
  // return res.render('level2.ejs');
  let id = req.sessionID;

  sessions.find({ _id: id }, (err, data) => {
    let userid = JSON.parse(data[0].session).userId;
    if (userid == undefined) {
      res.render("unauthorised.ejs");
    } else {
      User.findOne({ unique_id: userid }, function (err, data) {
        let details = {
          name: data.username,
          email: data.email,
        };
        res.render("level2.ejs", { data: details });
      });
    }
  });
});

router.get("/level1", (req, res, next) => {
  // return res.render('level1.ejs');
  let id = req.sessionID;

  sessions.find({ _id: id }, (err, data) => {
    let userid = JSON.parse(data[0].session).userId;
    if (userid == undefined) {
      res.render("unauthorised.ejs");
    } else {
      User.findOne({ unique_id: userid }, function (err, data) {
        let details = {
          name: data.username,
          email: data.email,
        };
        res.render("level1.ejs", { data: details });
      });
    }
  });
});

router.get("/login", (req, res, next) => {
  return res.render("login.ejs");
});

router.post("/login", (req, res, next) => {
  User.findOne({ email: req.body.email }, (err, data) => {
    if (data) {
      if (data.password == req.body.password) {
        req.session.userId = data.unique_id;

        res.send({ Success: "Success!" });
      } else {
        res.send({ Success: "Wrong password!" });
      }
    } else {
      res.send({ Success: "This Email Is not regestered!" });
    }
  });
});

router.get("/profile", (req, res, next) => {
  User.findOne({ unique_id: req.session.userId }, (err, data) => {
    if (!data) {
      res.redirect("/");
    } else {
      return res.render("data.ejs", { name: data.username, email: data.email });
    }
  });
});

router.get("/logout", (req, res, next) => {
  if (req.session) {
    // delete session object
    req.session.destroy((err) => {
      if (err) {
        // return next(err);
        console.log(err);
      } else {
        localStorage.clear();
        return res.redirect("/");
      }
    });
  }
});

router.get("/results", (req, res) => {
  let id = req.sessionID;
  // console.log(req.url)
  sessions.find({ _id: id }, (err, data) => {
    let userid = JSON.parse(data[0].session).userId;
    if (userid == undefined) {
      res.render("unauthorised.ejs");
    } else {
      User.findOne({ unique_id: userid }, function (err, data) {
        let details = {
          name: data.username,
          email: data.email,
        };
        res.render("results.ejs", { data: details });
      });
    }
  });
  // res.render('results')
});

router.post("/results", (req, res) => {
  // console.log(req.body);
  console.log(req.url);
  let id = req.sessionID;
  sessions.find({ _id: id }, (err, data) => {
    let userid = JSON.parse(data[0].session).userId;
    User.findOne({ unique_id: userid }, function (err, data) {
      let details = {
        name: data.username,
        email: data.email,
      };

      // console.log(req.body)
      if (req.body.level1 == null) {
        req.body.level1 = 0;
      }
      if (req.body.level2 == null) {
        req.body.level2 = 0;
      }
      if (req.body.level3 == null) {
        req.body.level3 = 0;
      }
      if (req.body.level4 == null) {
        req.body.level4 = 0;
      }
      console.log(req.body);
      let userattempts = new attempts({
        name: details.name,
        email: details.email,
        level1: req.body.level1,
        level2: req.body.level2,
        level3: req.body.level3,
        level4: req.body.level4,
        accuracy: req.body.accuracy,
      });

      userattempts.save((err, myattempts) => {
        if (err) console.log(err);
        else console.log("Success");
      });
    });
  });
});

router.get("/intro", (req, res, next) => {
  let id = req.sessionID;

  sessions.find({ _id: id }, (err, data) => {
    let userid = JSON.parse(data[0].session).userId;
    if (userid == undefined) {
      res.render("unauthorised.ejs");
    } else {
      User.findOne({ unique_id: userid }, function (err, data) {
        let details = {
          name: data.username,
          email: data.email,
        };
        res.render("intro.ejs", { data: details });
      });
    }
  });
});

router.get("/forgetpass", (req, res, next) => {
  res.render("forget.ejs");
});

router.post("/forgetpass", (req, res, next) => {
  User.findOne({ email: req.body.email }, (err, data) => {
    if (!data) {
      res.send({ Success: "This Email Is not regestered!" });
    } else {
      if (req.body.password == req.body.passwordConf) {
        data.password = req.body.password;
        data.passwordConf = req.body.passwordConf;

        data.save((err, Person) => {
          if (err) console.log(err);
          else console.log("Success");
          res.send({ Success: "Password changed!" });
        });
      } else {
        res.send({
          Success: "Password does not matched! Both Password should be same.",
        });
      }
    }
  });
});

module.exports = router;
