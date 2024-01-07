# 0x00. Pascal's Triangle

## Description

This project explores Pascal's Triangle, a mathematical concept that generates a triangular array of binomial coefficients. The triangle is named after the French mathematician Blaise Pascal, although many other mathematicians studied and utilized the triangle before him.

## Files

- 0-pascal_triangle.py: Python script containing a function to compute Pascal's Triangle up to a given number of rows.
- tests: Directory containing test cases for the function.

## Functionality

1. generate_pascal_triangle(rows):
   - Generates Pascal's Triangle up to the specified number of rows.
   - Returns a list of lists representing Pascal's Triangle.

## How to Use

1. Binomial Coefficients
Each number in Pascal's Triangle represents a binomial coefficient, which is the coefficient of the corresponding term in the expansion of a binomial expression raised to a positive integer power. For example, in the fourth row (1 3 3 1), the coefficients are from the expansion of (a + b)^3.

2. Probability and Combinatorics
Pascal's Triangle is extensively used in probability theory and combinatorics. The coefficients can be interpreted as the number of ways to choose items from a set. For instance, the coefficient "6" in the fifth row represents the number of ways to choose 2 items from a set of 4.

3. Use the function in your Python script or run the provided test cases.

   ```python
   from 0-pascal_triangle import generate_pascal_triangle

   rows = 5
   triangle = generate_pascal_triangle(rows)
   print(triangle)
   ```

4. Run the test cases:

   ```bash
   python -m unittest discover tests
   ```

## Example

Suppose you want to generate Pascal's Triangle with 5 rows. Using the function:

```python
from 0-pascal_triangle import generate_pascal_triangle

rows = 5
triangle = generate_pascal_triangle(rows)
print(triangle)
```

The output will be:

```python
[
    [1],
    [1, 1],
    [1, 2, 1],
    [1, 3, 3, 1],
    [1, 4, 6, 4, 1]
]
```
