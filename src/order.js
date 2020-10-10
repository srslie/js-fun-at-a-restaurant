function takeOrder(orderNumber, ordersList) {
  if (ordersList.length < 3) {
    ordersList.push(orderNumber)}
};

function refundOrder(orderNumber, ordersList) {
  ordersList.splice((orderNumber-1), 1)
};

function listItems(ordersList) {
  var items = []
  for (var i = 0; i < ordersList.length; i++){
     items.push(ordersList[i].item)
  }
  return items.join(', ')
};

function searchOrder(ordersList, item) {
  for (var i = 0; i < ordersList.length; i++) {
    if (ordersList[i].item === item) {
      return true
      }
    }
    return false
};


module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}
