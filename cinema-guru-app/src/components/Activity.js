import "./components.css";

// Create src/components/Activity.js:
//  - The file should import components.css
//  - The file should export a functional component named Activity as default:
//    - Activity must return a html li containing these elements and others:
//      - p: Formatted sentence according to the activity (see design)


const Activity = ({activity}) => {
  const date = new Date(activity.createdAt);
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  const m = months[date.getMonth()];
  const d = date.getDate();
  const y = date.getFullYear();

  const formattedDate = `${m} ${d}, ${y}`;

  return (
    <li>
      <p><span>{activity.user.username}</span> added <span>{activity.title.title}</span> to {activity.activityType} - <span className="date">{formattedDate}</span></p>
    </li>
  );
};

export default Activity;
