import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function PhoneList() {
  const [phones, setPhones] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5005/phones")
      .then((response) => setPhones(response.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="phoneList-grid">
      {phones &&
        phones.map((phone) => {
          return (
            <Link className="link-no-decoration phoneList-card" to={`phones/${phone.id}`}>
                <div className="phoneList-card-img">
                  <img src={`/src/assets/images/${phone.imageFileName}`} />
                </div>
                <h2 className="phoneList-card-name">{phone.name}</h2>
            </Link>
          );
        })}
    </div>
  );
}

export default PhoneList;
