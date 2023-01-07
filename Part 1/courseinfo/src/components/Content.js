import Part from './Part';

const Content = ({
  part1,
  part2,
  part3,
  exercises1,
  exercises2,
  exercises3,
}) => (
  <>
    <Part part={part1} exercise={exercises1} />
    <Part part={part2} exercise={exercises2} />
    <Part part={part3} exercise={exercises3} />
  </>
);

export default Content;
