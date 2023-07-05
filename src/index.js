import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList color="lightblue" />
      </div>
    </div>
  );
}
function Avatar() {
  return (
    <div>
      <img src="123.png" alt="kep" className="avatar" />
    </div>
  );
}
function Intro() {
  return (
    <div>
      <h2>Bertalan Erik</h2>
      <p>
        Hi, I'm Jonas! I'm one of Udemy's Top Instructors and all my premium
        courses have earned the best-selling status for outstanding performance
        and student satisfaction.
      </p>
    </div>
  );
}
function SkillList(props) {
  return (
    <div className="skill-list">
      <Skill color="lightblue" name="HTML" emoji="👌" />
      <Skill color="red" name="CSS" emoji="😈" />
      <Skill color="green" name="REACT" emoji="👨‍🎓" />
    </div>
  );
}
function Skill(props) {
  return (
    <div style={{ background: props.color }} className="skill">
      <span>{props.emoji}</span>
      <p>{props.name}</p>
    </div>
  );
}
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
