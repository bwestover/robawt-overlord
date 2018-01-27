# Description:
#   Send a troll bomb.

sleep = (ms) ->
  start = new Date().getTime()
  continue while new Date().getTime() - start < ms

module.exports = (robot) ->

  robot.hear /troll bomb/i, (res) ->
      res.send('https://media.giphy.com/media/8oh42nM14t50Q/giphy-facebook_s.jpg',
                'https://vignette.wikia.nocookie.net/polandball/images/a/a5/Shitty_9gag_meme.jpg',
                'http://i3.kym-cdn.com/photos/images/newsfeed/000/247/207/813.gif');
