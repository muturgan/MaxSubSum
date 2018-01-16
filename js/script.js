'use strict';

/**
getMaxSubSum([-1, 2, 3, -9]) = 5 (сумма выделенных)
getMaxSubSum([2, -1, 2, 3, -9]) = 6
getMaxSubSum([-1, 2, 3, -9, 11]) = 11
getMaxSubSum([-2, -1, 1, 2]) = 3
getMaxSubSum([100, -9, 2, -3, 5]) = 100
getMaxSubSum([1, 2, 3]) = 6 (неотрицательные - берем всех)
getMaxSubSum([-1, -2, -3]) = 0
 */
 
function getMaxSubSum(array) {
	let maxSum = 0;
	let currentSum = 0;
	
	
	for (let i = 0; i < array.length; i++) {

		if (array[i] > 0) { // а что кстати с нулями делать? ну давай не включим
			currentSum = currentSum + array[i];
			if (currentSum > maxSum) maxSum = currentSum;
		} else {
			if (currentSum > maxSum) maxSum = currentSum;
			currentSum = 0;
		}
	}
	
    return maxSum;
}


console.log(getMaxSubSum([-1, 2, 3, -9]));
console.log(getMaxSubSum([2, -1, 2, 3, -9]));
console.log(getMaxSubSum([-1, 2, 3, -9, 11]));
console.log(getMaxSubSum([-2, -1, 1, 2]));
console.log(getMaxSubSum([100, -9, 2, -3, 5]));
console.log(getMaxSubSum([1, 2, 3]));
console.log(getMaxSubSum([-1, -2, -3]));