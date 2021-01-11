import "./index.css";

function JobContent({ jobPosition, company, date, children }) {
  return (
    <section>
      <div className="experience-titles">
        <p>{jobPosition}</p>
        <p>{company}</p>
        <p>{date}</p>
      </div>
      {children}
    </section>
  );
}

export default JobContent;
