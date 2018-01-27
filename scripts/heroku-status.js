// Description:
//   Return Heroku system status
//
// Commands:
//   hubot heroku status - returns heroku status
module.exports = robot =>

  robot.respond(/heroku status/i, function(msg) {
    msg.http("https://status.heroku.com/api/v3/current-status")
      .get()(function(err, res, body) {
         robot.logger.info(`Body:${body}`);
         if (err) {
           robot.logger.error(err);
           return robot.emit('error', err, msg);
         }
         data = JSON.parse(body).status;
         if (data.Production == "green") {
           prodStatus = ":rocket: Green :white_check_mark:"
         } else {
           prodStatus = data.Production
         }
         if (data.Development == "green") {
           devStatus = ":computer: Green :white_check_mark:"
         } else {
           devStatus = data.Development
         }
         return msg.send(`Production status: ${prodStatus}\nDevelopment status: ${devStatus}`);
      });
  });
