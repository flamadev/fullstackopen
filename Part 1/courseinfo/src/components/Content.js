import Part from './Part';

const Content = ({ part1, part2, part3 }) => (
  <>
    <Part part={part1.name} exercise={part1.exercises} />
    <Part part={part2.name} exercise={part2.exercises} />
    <Part part={part3.name} exercise={part3.exercises} />
  </>
);

export default Content;
