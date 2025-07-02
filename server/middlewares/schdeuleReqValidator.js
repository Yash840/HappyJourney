export const validateScheduleRequest = (req, res, next) => {
  if(!req.query.source || !req.query.destination || !req.query.date){
    return res.status(400).json({
      message: "Insufficient Details"
    });
  }
  next();
};
