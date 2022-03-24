import "./CatteryList.scss";

function CatteryList({ catteryList }) {
  const list = (
    <ul className="cattery-list">
      {catteryList.map((cattery) => (
        <li className="cattery-list__item" key={cattery.id}>
          <div className="cattery-list__card">
            <h2>{cattery.catteryName}</h2>
            <p>{cattery.address}</p>
          </div>
        </li>
      ))}
    </ul>
  );

  return list;
}

export default CatteryList;
