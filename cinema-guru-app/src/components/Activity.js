import "./components.css";

// Create src/components/Activity.js:
//  - The file should import components.css
//  - The file should export a functional component named Activity as default:
//    - Activity must return a html li containing these elements and others:
//      - p: Formatted sentence according to the activity (see design)


const Activity = ({activity}) => {
  return (
    <li>
      <p>{activity}</p>
    </li>
  );
};

export default Activity;
