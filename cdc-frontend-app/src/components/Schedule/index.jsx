import React, { useMemo } from "react";
import "./styles.scss";

function ScheduleTable({ events }) {
  const dateOptions = { hour: "numeric", minute: "numeric", hour12: true };
  return (
    <table>
      <tr>
        <th>Time</th>
        <th>Event</th>
        <th>Host</th>
        <th>Type</th>
        <th>Location</th>
      </tr>
      {events.map((item) => (
        <tr>
          <td>
            {new Date(item.start).toLocaleString(undefined, dateOptions)}
            {item.finish &&
              ` - ${new Date(item.finish).toLocaleString(undefined, dateOptions)}`}
          </td>
          <td>{item.event}</td>
          <td>{item.host}</td>
          <td>{item.type}</td>
          <td>{/^(ftp|http|https):\/\/[^ "]+$/.test(item.location) ? <a href={item.location} target="_blank">{new URL(item.location).hostname}</a> : item.location}</td>
        </tr>
      ))}
    </table>
  );
}

function Schedule({ content }) {
  const schedules = useMemo(() => {
    if (content?.events == null || content.events?.length < 1) return null;
    const grouped = content.events?.reduce((groups, item) => {
      const date = new Date(item.start);
      const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      const day = date.toLocaleString(undefined, dateOptions);
      if (!groups[day]) groups[day] = [item];
      else groups[day].push(item);
      return groups;
    }, {});
    const res = Object.entries(grouped)
      .sort((a, b) => new Date(a[0]) - new Date(b[0]))
      .map((val) => ({
        day: val[0],
        events: val[1].sort((a, b) => new Date(a.start) - new Date(b.start)),
      }));
    return res;
  }, [content]);

  return schedules && schedules.length > 0 ? (
    <div className="Schedule" id="schedule">
      <header>
        <h1>Schedule</h1>
        <h3>All times in {new Date().toString().match(/\(([A-Za-z\s].*)\)/)[1]}</h3>
      </header>
      <div className="container">
        {schedules.map((schedule) => (
          <>
            <h2>{schedule.day}</h2>
            <ScheduleTable events={schedule.events} />
          </>
        ))}
      </div>
    </div>
  ) : null;
}

export default Schedule;
