import chocolate_chip from "./images/chocolate_chip.jpg";
import Double_chocolate from "./images/Double_chocolate.jpg";
import nutella from "./images/nutella.jpg";
import Peanut_butter from "./images/Peanut_butter.jpg";
import rasberry_white from "./images/rasberry_white.jpg";
import CookieNames from "./Cookies";
import LikeCounter from "./Counter";
import Dislike_Counter from "./DislikeCounter"
import RecipeSearch from "./RecipeSearch"

const productDetails = [
  "Chocolate Chip Cookies",
  "Peanut Butter Cookies",
  "Double Chocolate Cookies",
  "Rasberry White Chocolate Cookies",
  "Nutella filled Cookies",
];
function App() {
  return (
    <div>
      <h1>Ready, Set, BAKE</h1>
      <h2>
        We love Cookies. <br></br>Click the like button to choose your favorite
        cookie
      </h2>
      <ul>
          <li>
              <RecipeSearch />
          </li>
        <li>
          <img class="cookieImages" src={chocolate_chip} />
          <CookieNames name={productDetails[0]} />
          <LikeCounter />
          <Dislike_Counter />
        </li>
        <li>
          <img class="cookieImages" src={Peanut_butter} />
          <CookieNames  name={productDetails[1]} />
          <LikeCounter />
          <Dislike_Counter />
        </li>
        <li>
          <img class="cookieImages" src={Double_chocolate} />
          <CookieNames  name={productDetails[2]} />
          <LikeCounter />
          <Dislike_Counter />
        </li>
        <li>
          <img class="cookieImages" src={rasberry_white} />
          <CookieNames  name={productDetails[3]} />
          <LikeCounter />
          <Dislike_Counter />
        </li>
        <li>
          <img class="cookieImages" src={nutella} />
          <CookieNames  name={productDetails[4]} />
          <LikeCounter />
          <Dislike_Counter />
        </li>
      </ul>
    </div>
  );
}
export default App;
