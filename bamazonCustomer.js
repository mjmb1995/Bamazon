var mysql = require("mysql");
var inquirer = require("inquirer");
// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  // Your username
  user: "root",
  // Your password
  password: "TsUbAsA330",
  database: "bamazon_db"
});
// connect to the mysql server and sql database
connection.connect(function(err) {
  if (err) throw err;
  // run the start function after the connection is made to prompt the user
  buy();
});


function buy() {
  // query the database for all items in stock
  connection.query("SELECT * FROM products", function(err, results) {
    if (err) throw err;
    // once you have the items, prompt the user for which they'd like to buy
    inquirer
      .prompt([
        {
          name: "choice",
          type: "rawlist",
          choices: function() {
            var choiceArray = [];
            for (var i = 0; i < results.length; i++) {
              choiceArray.push(results[i].product_name);
            }
            return choiceArray;
            // This is another more 'functional' way to achieve the above.
            // Take a look at the documentation for `.map` to learn more --> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
            // return results.map(function(result) {
            //   return result.item_name
            // })
          },
          message: "What product do you want to buy?"
        },
        {
          name: "quantity",
          type: "input",
          message: "How many would you like to buy?"
        }
      ])
      .then(function(answer) {
        // get the information of the chosen item
        var chosenItem;
        for (var i = 0; i < results.length; i++) {
          if (results[i].product_name === answer.choice) {
            chosenItem = results[i];
          }
        }
        // This is another more 'functional' way to achieve the above.
        // Take a look at the documentation for `.find` to learn more --> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
        // var chosenItem = results.find(function(item) {
        //   return item.item_name === answer.choice
        // })
        // determine if supply was high enough
        if (chosenItem.stock_quantity > parseInt(answer.quantity)) {
          // supply was high enough, so update db, let the user know, and start over
          var newQuantity = chosenItem.stock_quantity - parseInt(answer.quantity)
          connection.query(
            "UPDATE products SET ? WHERE ?",
            [
              {
                stock_quantity: newQuantity
              },
              {
                item_id: chosenItem.id
              }
            ],
            function(error) {
              if (error) throw err;
              console.log("Products bought!");
              buy();
            }
          );
        }
        else {
          // supply wasn't high enough, so apologize and start over
          console.log("Sorry, our supply does not meet demand!\nTry Again!");
          buy();
        }
      });
  });
}