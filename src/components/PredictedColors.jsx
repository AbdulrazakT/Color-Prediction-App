import "./predictedColors.css";

const PredictedColors = ({ colors }) => {
  return (
    <div className="predict">
      <table>
        <thead>
          <tr>
            <th>S/No.</th>
            <th>Color</th>
            <th>Probability</th>
          </tr>
        </thead>

        <tbody>
          {colors.map((color, key) => (
            <tr key={key}>
              <td>{key + 1}</td>
              <td>{color.name}</td>
              <td>{color.probability}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PredictedColors;
