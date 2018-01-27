# Description:
#   Script for controlling the doors.

module.exports = (robot) ->

  robot.respond /open the (.*) doors/i, (res) ->
    doorType = res.match[1]
    if doorType is "pod bay"
      res.reply "I'm afraid I can't let you do that."
    else
      res.reply "Opening #{doorType} doors. *Bzzt...Click.*"

  robot.respond /close the (.*)doors/i, (res) ->
    doorType = res.match[1]
    res.reply "Ok, I've closed the #{doorType} doors. When I close a door, I open a window. *bzzt..Slide*"

  robot.respond /close the window/i, (res) ->
    res.send "Sorry, I don't run Windows I run Linux."
