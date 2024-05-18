import PortfolioItem from "../../../components/PortfolioItem";

function Watchello() {
  const title = "Watchello: My Path from HTML to Machine Learning";
  const paragraphs = [
    "Watchello began as a small HTML and CSS project designed to practice working with grids, flexbox, and transitions. Eventually, I integrated a movie database API to fetch real movie data.",
    "At the time, I kept track of movies I wanted to watch and had watched using Evernote. This inspired me to transform the small movie app into a standalone application called Watchello.",
    "I implemented user management and a real-time database, enabling users to search for movies, add them to their watchlist, and track their viewing history.",
    "Over the months, I continuously added new features. Leveraging my machine learning experience, I developed a recommendation algorithm. Now, whenever users search for a movie, the app displays a compatibility percentage based on their viewing history.",
    "This project exemplifies the learning journey that comes from building your own tools. Starting small without a clear end goal, you gradually see opportunities to improve and expand. As a result, the project evolves alongside your growth as a developer.",
  ];
  return (
    <PortfolioItem
      title={title}
      paragraphs={paragraphs}
      src="/featured-projects/watchello.png"
      alt="Watchello"
      url="https://watchello.netlify.app/"
    />
  );
}
export default Watchello;
