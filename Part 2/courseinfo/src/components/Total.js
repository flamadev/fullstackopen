const Total = ({ parts }) => {
  const total = parts.reduce((total, part) => {
    const newTotal = total + part.exercises;
    return newTotal;
  }, 0);
  return (
    <p>
      <strong>Total of {total} exercises</strong>
    </p>
  );
};

export default Total;
