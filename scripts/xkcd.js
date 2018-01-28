// Description:
//   Return XKCD comics
//
// Commands:
//   hubot xkcd - returns xkcd comics
module.exports = robot =>

  robot.respond(/xkcd\b ?(.*)/i, function(msg) {
    const comicNum = msg.match[1];
    // need to check if there is an argument, and if it is a number
    if(comicNum == '') {
      n = Math.floor(Math.random() * 1947) + 1;
    }
    else {
      if(isNaN(comicNum)){
        return msg.send("Argument must be a number.");
      };
      n = comicNum
    };
    msg.http(`https://xkcd.com/${n}/info.0.json`)
      .get()(function(err, res, body) {
         if (err) {
           robot.logger.error(err);
           return robot.emit('error', err, msg);
         }
         comic = JSON.parse(body).img;
         return msg.send(comic);
      });
  });
