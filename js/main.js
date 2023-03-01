import {songs} from "./songchoices";
import "/style.css";


const DOMSelectors = {
  container: document.querySelector("container"),
  randomize: document.getElementById("randomize"),
  albumselection: document.getElementById("albumselection"),
};

async function getMitskiSong() {
  DOMSelectors.container.innerHTML = "";

  if (DOMSelectors.albumselection.album === "Lush") {
    try {
      const response = await fetch(songs);
      const data = await response.json();
      console.log(data);
      songs
        .filter((el) => el.songtitle === "Liquid Smooth")
        .forEach((el) => {
          DOMSelectors.container.insertAdjacentHTML(
            "beforeend",
            `<div>
              <img class="height" src="${el.albumcover}" alt="mitski album cover lush">    
            </div>`
          );
        });
    } catch (error) {
      console.error(error);
    }
  } else {
    console.log("error");
  }
}

function getImage() {
  getMitskiSong();
}

DOMSelectors.randomize.addEventListener("click", getImage);




