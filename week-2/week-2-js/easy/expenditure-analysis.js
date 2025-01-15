/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  const categoryTotalMap = {};
  const temp = transactions.forEach(transaction => {
    const {category, price} = transaction;
    if  (category in categoryTotalMap){
      categoryTotalMap[category] += price;
    }else{
      categoryTotalMap[category] = price;
    }
  });
  const totalTransactions = [];
  for (const category in categoryTotalMap) {
    totalTransactions.push({category:category,totalSpent:categoryTotalMap[category]})
  }
  totalTransactions;

}

calculateTotalSpentByCategory([
  { id: 1, timestamp: 1656076800000, price: 10, category: 'Food', itemName: 'Pizza' },
  { id: 2, timestamp: 1656163200000, price: 20, category: 'Food', itemName: 'Burger' },
  { id: 3, timestamp: 1656249600000, price: 5, category: 'Drink', itemName: 'Soda' },
  { id: 4, timestamp: 1656336000000, price: 15, category: 'Drink', itemName: 'Coffee' }
]
)

module.exports = calculateTotalSpentByCategory;
