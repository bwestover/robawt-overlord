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

         return msg.send(`Production status: ${data.Production}\nDevelopment status: ${data.Development}`);
      });
  });
