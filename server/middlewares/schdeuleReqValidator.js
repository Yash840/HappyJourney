export const validateScheduleRequest = (req, res, next) => {
  if(!req.body.source || !req.body.destination || !req.body.date){
    return res.status(400).json({
      message: "Insufficient Details"
    });
  }
  next();
};
