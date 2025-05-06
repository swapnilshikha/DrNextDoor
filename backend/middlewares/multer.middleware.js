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
  const doctorStorage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/doctors');  // doctor-specific folder
    },
    filename: function (req, file, cb) {
      const uniqueName = Date.now() + '-' + file.originalname;
      cb(null, uniqueName);
    }
  });
  
  const uploadDoctor = multer({ storage: doctorStorage });
  const upload = multer({ storage: storage });
  
  module.exports = {upload,uploadDoctor};
