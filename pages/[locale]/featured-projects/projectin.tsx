import PortfolioItem from "../../../components/PortfolioItem";

function ProjectIn() {
  const title = "ProjectIn: Mastering Time Management for Freelancers";
  const paragraphs = [
    "As a freelancer, managing your time effectively across multiple projects can be challenging. You often find yourself making progress on one task while feeling frustrated about pausing another. For years, I tracked my working hours manually, noting down how I spent each day.",
    "ProjectIn was born out of the need to streamline this process. The app allows you to log work sessions for each project and provides weekly and monthly metrics to help you understand how your time is spent.",
    "Interestingly, ProjectIn had several false starts. My first attempt was a project called Revery, built with Gatsby and Material UI. Despite being well-designed, it didn't align with my previous manual time-tracking methods, so I continued using my old system.",
    "The second attempt involved creating an app with Flutter, which I was learning at the time. Although I got it working, it still didn't meet my needs perfectly.",
    "The third attempt was successful. I used basic HTML, CSS, and vanilla JavaScript, along with local storage to avoid needing a database initially. I mimicked my old note-taking method, resulting in a tool that I began using daily.",
    "Over time, I improved ProjectIn with user management and a real-time database. Now, I rely on ProjectIn every day, and I've left behind the days of manually recording my work activities.",
  ];
  return (
    <PortfolioItem
      title={title}
      paragraphs={paragraphs}
      src="/featured-projects/projectin.png"
      alt="ProjectIn"
      url="https://projectin.netlify.app/"
    />
  );
}
export default ProjectIn;
