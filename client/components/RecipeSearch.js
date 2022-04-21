import { useState } from "react";

const baseURL = "https://api.edamam.com/api/recipes/v2";
const apiKey = "847de176c5c11274cf1e59d242e61193";
// REQUIRED parameter app_id
const appID = "61ca506f";
const type = "public";
//REQUIRED parameter searchQuery
const q = "cookies";
//OPTIONAL parameters dishType
const dishType = "Desserts";
const fieldLabel = "label";
const fieldImage = "image";
const Imagesize = "REGULAR";

function RecipeSearch() {
  let [search, setSearch] = useState("");
  // if there is no data
  let [data, setData] = useState(null);

  function handleChange(event) {
    setSearch(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setData("loading");
    // console.log(data);
    //const endpoint = `https://api.edamam.com/api/recipes/v2?type=public&q=cookies&app_id=61ca506f&app_key=847de176c5c11274cf1e59d242e61193&dishType=Desserts&imageSize=REGULAR&field=label&field=image`;

    const endpoint = `${baseURL}?type=${type}&q=${q}&app_id=${appID}&app_key=${apiKey}&dishType=${dishType}&imageSize=${Imagesize}&field=${fieldLabel}&field=${fieldImage}`;
    fetch(endpoint)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        setData(data);
console.log(data);
        
      });
  }
  
  // if there is no data
  let markup = <p>There is no data to show</p>;

  if (data === "loading") {
    markup = <p>"Making the recipe request.."</p>;
  } else if (data) {
      console.log(data);
      markup = (
          <div>
              <h3>{data.hits[0].recipe}</h3>
              <p>
              "TEST"
              </p>
          </div>
      );
  }
  return (
    <div>
      <h3>Recipe Search</h3>
      <p>You are seraching for "{search}..." </p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={search}
          onChange={handleChange}
          placeholder="Search for a different dessert!"
        />
        <input type="submit" value="Search" />
        <br />
      </form>
      {markup}
    </div>
  );
}

export default RecipeSearch;
