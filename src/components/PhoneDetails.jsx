import axios from "axios";
import { useEffect, useState, CSSProperties } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";

function PhoneDetails() {
  const [phoneDetails, setPhoneDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const { phoneId } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:5005/phones/${phoneId}`)
      .then((response) => {
        setPhoneDetails(response.data);
        setTimeout(() => {
          setLoading(false);
        }, 500);
      })
      .catch((err) => console.log(err));
  }, []);

  return loading == true ? (
    <ClipLoader
      color={"#000000"}
      loading={true}
      size={150}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  ) : phoneDetails == null ? (
    ""
  ) : (
    <div className="phoneDetails-container">
      <img src={`/src/assets/images/${phoneDetails.imageFileName}`} />
      <h1>{phoneDetails.name}</h1>
      <h2>{phoneDetails.manufacturer}</h2>
      <h3 className="phoneDetails-description">{phoneDetails.description}</h3>
      <div className="phoneDetails-details-infos">
        <h3>Color : {phoneDetails.color}</h3>
        <h3>Screen : {phoneDetails.screen}</h3>
        <h3>RAM : {phoneDetails.ram}</h3>
      </div>

      <h3>{phoneDetails.price}$</h3>

      <Link to={"/"}>Back</Link>
    </div>
  );
}

export default PhoneDetails;
