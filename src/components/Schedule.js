import React, { Component } from 'react';
import BaseLayout from './BaseLayout';

export default class Schedule extends Component {

  render() {
    return (
      <BaseLayout>
      <div className="calendarContent">
        <h4>Check out our calendar below to see when we'll be in an area near you.</h4>
        <div className="googleCalendar">
          <iframe src="https://calendar.google.com/calendar/embed?showTitle=0&amp;showNav=0&amp;showDate=0&amp;showPrint=0&amp;showTabs=0&amp;showCalendars=0&amp;showTz=0&amp;height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;src=jellis720%40gmail.com&amp;color=%231B887A&amp;ctz=America%2FNew_York" width="800" height="600" frameBorder="0" scrolling="no"></iframe>
        </div>
      </div>
      </BaseLayout>
    );
  }
}
