const Total = ({ parts }) => {
  let total = 0;
  parts.forEach((part) => (total += part.exercises));
  return (
    <p>
      <strong>Total of {total} exercises</strong>
    </p>
  );
};

export default Total;
