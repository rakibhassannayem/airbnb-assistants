const Headings = ({ title1, title2, shortDesc, className }) => {
  return (
    <div className={`flex flex-col items-center justify-center gap-4 text-center ${className}`}>
      <h2 className="text-3xl font-bold">
        {title1} <span className="text-primary">{title2}</span>
      </h2>
      <p className="max-w-3xl font-medium">{shortDesc}</p>
    </div>
  );
};

export default Headings;
