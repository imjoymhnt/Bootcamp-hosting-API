exports.getBootcamps = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: "Get all bootcamps",
  });
};

exports.getBootcamp = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: "Get Single bootcamps",
  });
};

exports.createBootcamp = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: "Create bootcamp",
  });
};

exports.updateBootcamp = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: "Update bootcamp",
  });
};

exports.deleteBootcamp = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: "delete bootcamp",
  });
};
