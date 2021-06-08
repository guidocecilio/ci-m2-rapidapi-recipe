import { db } from './localStorage.js';

function main() {
  console.log(db.getState());
  const storedData = db.getState();
  if (_.isEmpty(storedData)) {

    const settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/informationBulk?ids=456%2C987%2C321",
      "method": "GET",
      "headers": {
        "x-rapidapi-key": "<replace this with your apikey>",
        "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"
      }
    };
    
    $.ajax(settings).done(function (response) {
      console.log(response);
      db.defaults({ recipes: response }).write();
      const sdata = db.getState();
      console.log(sdata);
    });

  } else {
    console.log(storedData);
  }

}
//exporting module contents to script.js
export { main };
