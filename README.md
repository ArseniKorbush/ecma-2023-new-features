# Проект с использованием ECMAScript 2023

Welcome to my project that showcases the new features added in ECMAScript 2023. In this project you will find examples of how to use these features and the file structure of the project.

## File hierarchy
- `index.html`: main project HTML file.
- `ecmascript-2023/`:
  - `findLastMethod.js`: File demonstrating the use of the method `findLast()`.
  - `with.js`: 
  - `toSorted.js`:
  - `toReversed.js`:
  - `toSpliced.js`:
  <!-- - `symbolsAsWeakMapKeys.js`:
  - `symbolsAsWeakMapKeys.js`: -->
  - `symbolsAsWeakMapKeys.js`: File demonstrating the use of symbols as keys WeakMap.
  - `hashbangSupport.js`: File containing example support standardization hashbang grammar.

## ECMAScript 2023 features

### findLast() method

File `findLastMethod.js` contains an example of using the method `findLast()`, which allows you to search for a value in an array by iterating through the elements in reverse order.
### With
File `with.js` showing The `with` statement is used to temporarily extend the scope chain within a particular block of code. It allows you to access properties of an object without explicitly specifying the object's name.

### toSorted() method
File `toSorted.js` showing The `toSorted()` method of TypedArray instances is the copying version of the `sort()` method. It returns a new typed array with the elements sorted in ascending order. This method has the same algorithm as Array.
### toReversed() method
File `toReversed.js` showing The `toReversed()` method transposes the elements of the calling array object in reverse order and returns a new array. When used on sparse arrays, the `toReversed()` method iterates empty slots as if they have the value undefined . The `toReversed()` method is generic.
### toSpliced() method
File `toSpliced.js` showing The `toSpliced()` method, like `splice()` , does multiple things at once: it removes the given number of elements from the array, starting at a given index, and then inserts the given elements at the same index. However, it returns a new array instead of modifying the original array.
### Symbols as WeakMap keys

File `symbolsAsWeakMapKeys.js` demonstrates the use of symbols as keys for WeakMap.

### Hashbang grammar support

File `hashbangSupport.js` contains an example of standardization support hashbang grammar.

## Launch of the project
To run the project, simply open index.html in your browser.