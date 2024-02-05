export default function Statistics({
  good,
  bad,
  neutral,
  total,
  positivePercentage,
}) {
  return (
    <div>
      <h2>Statistics</h2>
      <ul>
        <li>{good}</li>
        <li>{neutral}</li>
        <li>{bad}</li>
      </ul>
      <p>Total: {total}</p>
      <p>Positive feedback: {positivePercentage}%</p>
    </div>
  );
}
