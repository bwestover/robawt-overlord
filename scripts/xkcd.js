// Description:
//   Return XKCD comics
//
// Commands:
//   hubot xckd - returns a random XKCD comics
module.exports = robot =>

  robot.respond(/xkcd\b/i, function(msg) {
    robot.logger.debug("Hello World");
    msg.http("https://xkcd.com/614/info.0.json")
      .get()(function(err, res, body) {
         robot.logger.debug(body);
         if (err) {
           robot.logger.error(err);
           return robot.emit('error', err, msg);
         }
         comic = JSON.parse(body).img;
         robot.logger.debug(comic);
         return msg.send(comic);
      });
  });
