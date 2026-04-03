import Container from "./Container";

const Headings = ({ title1, title2, shortDesc, className }) => {
  return (
    <Container className={`flex flex-col items-center justify-center gap-4 text-center mb-10 ${className}`}>
      <h2 className="text-3xl font-bold">
        {title1} <span className="text-primary">{title2}</span>
      </h2>
      <p className="max-w-3xl font-medium">{shortDesc}</p>
    </Container>
  );
};

export default Headings;
