# Description:
#   Script for controlling the doors.

sleep = (ms) ->
  start = new Date().getTime()
  continue while new Date().getTime() - start < ms

module.exports = (robot) ->

  robot.hear /troll bomb/i, (res) ->
      res.send "https://media.giphy.com/media/8oh42nM14t50Q/giphy-facebook_s.jpg"
      sleep 2000
      res.send "https://vignette.wikia.nocookie.net/polandball/images/a/a5/Shitty_9gag_meme.jpg"
      sleep 2000
      res.send "http://i3.kym-cdn.com/photos/images/newsfeed/000/247/207/813.gif"
