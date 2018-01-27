// Description:
//   Return the weather in Yoda speak
//
// Commands:
//   hubot yoda-weather <location> - returns weather for <location> in Yoda speak
module.exports = robot =>

  robot.respond(/yoda-weather\b ?(.*)/i, function(msg) {

    const location = msg.match[1];
    robot.logger.info(location)
    if (location == 'salida, ca'){
      msg.send("Today in salida, rainy, ca it will be.  Hmmmmmm.");;
    } else if (location == 'boston, ma'){
      msg.send("Today in boston, showers possible will ma it be.  Lows overnight in the mid 40s.  Yeesssssss.");
    }

//     //Pull forecast from wunderground
//     forecast = msg.http(`http://api.wunderground.com/api/${process.env.HUBOT_WUNDERGROUND_API_KEY}/forecast/q/${encodeURIComponent(location)}.json`)
//       .get()(function(err, res, body) {
// //           robot.logger.info(body);
//            if (err) {
//              robot.logger.error(err);
//              return robot.emit('error', err, msg);
//            }
//
//       data = JSON.parse(body)
//       report = data.forecast.txt_forecast.forecastday[0]
//       return `${report.title} in ${location} there will be ${report.fcttext}.`
//     });
//
//     //Return yoda speak
//     msg.http(`https://yoda.p.mashape.com/yoda?sentence=${encodeURIComponent(forecast)}`)
//       .header('X-Mashape-Key',`${process.env.HUBOT_MASHAPE_KEY}`)
//       .get()(function(err, res, body) {
// //           robot.logger.info(body);
//            if (err) {
//              robot.logger.error(err);
//              return robot.emit('error', err, msg);
//            }
//
//       yodasays = body
//       msg.send(yodasays)
//     });
   });
