export default function RatingSelect({ select }) {
  const handleChange = (e) => {
    select(+e.target.value);
  };

  return (
    <div className="rating-group">
      {[1, 2, 3, 4, 5].map((num) => (
        <label key={num}>
          <input type="radio" name="rating" value={num} onChange={handleChange} />
          ⭐ {num}
        </label>
      ))}
    </div>
  );
}
