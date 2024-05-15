/**
 * Colors work events based on title.
 */
function colorWorkEvents() {
  try {
    
    var today = new Date();
    var until = new Date();
    until.setDate(until.getDate() + 90);

    const scriptProperties = PropertiesService.getScriptProperties();
    const primaryCalId = scriptProperties.getProperty('PRIMARY_CAL_ID');
    const workKeyword = scriptProperties.getProperty('WORK_EVENT_KEYWORD');
    var calendar = CalendarApp.getCalendarById(primaryCalId);
    var events = calendar.getEvents(today, until);

    for (var i = 0; i < events.length; i++){
      var event = events[i];
      var eventId = event.getId();
      var eventTitle = event.getTitle();
      
      try {
        const organizer = Calendar.Events.get(primaryCalId, eventId.substring(0, eventId.length - 11)).organizer;
        
        // if work-related event (organized by, or has company name in title)
        if (lowerIncludes(organizer.email, workKeyword) || lowerIncludes(eventTitle, workKeyword)){

          var toColor = CalendarApp.EventColor.PALE_BLUE; // default color

          if (lowerIncludes(eventTitle, "check-in") || lowerIncludes(eventTitle, "chek-in")){
            toColor = CalendarApp.EventColor.MAUVE;
          }
          else if (lowerIncludes(eventTitle, "Team")) {
            toColor = CalendarApp.EventColor.PALE_GREEN;
          }
          
          try {
            if (event.getColor() !== toColor){ // if not already the proper color
              event.setColor(toColor); // set color
              Logger.log("Colored (" + toColor + ") Event: " + eventTitle);
            }
          } catch (err) {
            Logger.log("Error while coloring checkin events: " + err);
          }
        }

      } catch (err) {
        Logger.log("Error while identifying organizer: " + err);
      }
    }

  } catch (err) {
    Logger.log("Error while coloring work events: " + err);
  }
}

