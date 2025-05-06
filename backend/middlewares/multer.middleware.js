const multer = require('multer')

const storage = multer.diskStorage({  //patient image upload and storing
    destination: function (req, file, cb) {
      cb(null, 'uploads/patients/')
    },
    filename: function (req, file, cb) {
      const newName = Date.now() + '-' + file.originalname
      cb(null, newName)
    }
  })
  const doctorStorage = multer.diskStorage({  //doctor image upload and storing
    destination: function (req, file, cb) {
      cb(null, 'uploads/doctors/');  
    },
    filename: function (req, file, cb) {
      const newName = Date.now() + '-' + file.originalname;
      cb(null, newName);
    }
  });
  
  const upload = multer({ storage: storage });
  
  const doctorUpload = multer({ storage: doctorStorage })
  module.exports = {upload,doctorUpload};