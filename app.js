(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var toBuyList = this;

  toBuyList.toBuyItems = ShoppingListCheckOffService.getToBuyItems();

  toBuyList.hehe = function () {
    console.log("Hehe!");
  };

  toBuyList.buyItem = function (itemIdex) {
    ShoppingListCheckOffService.buyItem(itemIdex);
  };

}


AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var alreadyBoughtList = this;

  alreadyBoughtList.alreadyBoughtListItems = ShoppingListCheckOffService.getAlreadyBoughtItems();
}


function ShoppingListCheckOffService() {
  var service = this;


  var toBuyItems = [{ name: "cookies", quantity: 10 },
    { name: "Bread", quantity: 1 },
    { name: "Eggs", quantity: 10 },
    { name: "Cheese", quantity: 7 },
    { name: "Salami", quantity: 6 }];

  var alreadyBoughtItems = [];

  service.getToBuyItems = function () {
    return toBuyItems;
  };

  service.getAlreadyBoughtItems = function () {
    return alreadyBoughtItems;
  };

  service.buyItem = function (itemIdex) {
    alreadyBoughtItems.push(toBuyItems[itemIdex]);
    toBuyItems.splice(itemIdex, 1);

  };

}

})();
