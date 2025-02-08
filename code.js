function mergesort(array) {
    var size = array.length; 

    //return the base cases of 0 or 1
    if (size <= 1) {
        return array; 
    }

    //increase the section of array its sorting by *2 each iteration
    for (var i = 1; i <= size - 1; i *= 2) {
        //loops through each section of array in the increment determined by i 
        //starting with sorting 2 elements, then sorts the 4 together, then 8, etc. 
        for (var leftStart = 0; leftStart < size - 1; leftStart += 2 * i) {
            //find the "middle" and "end" of each "array" being sorted
            var middle = Math.min(leftStart + i - 1, size - 1); 
            var rightEnd = Math.min(leftStart + 2 * i - 1, size - 1); 

            var first = leftStart; //start of left array
            var second = middle + 1; //start of right array 

            //compare elements of left to elements of right 
            while (first <= middle && second <= rightEnd) {
                //already sorted 
                if (array[first] <= array[second]) {
                    first++; 
                } else {
                    //store lower value 
                    var tmp = array[second];
                    var index = second; 
                    //move previously sorted elements to the right 
                    while (index != first) {
                        array[index] = array[index - 1]; 
                        index--; 
                    }
                    //place the previous value in correct positon
                    array[first] = tmp; 
                    //increment all values to compare next element or end loop 
                    first++; 
                    middle++; 
                    second++; 
                }
            }
        }
    }
    return array; 
}

console.log(mergesort([91, 1, 2, 332, 11])); 