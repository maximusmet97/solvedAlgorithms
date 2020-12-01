#include <stdio.h>

/* Factorial function.
 * Function that calculates factorial of an integer number.
 * arguments: int n, n >= 0
 * return: long int
 */
long int factorial(int n) {
    if (n == 0)
        return 1;
    else
        return n * factorial(n-1);
}

int main(void){
	int rows;
	printf("Please define number of rows: ");
	scanf("%d", &rows);
	for (int i = 0; i <= rows; i++) {
		for (int j = 0; j < i; j++) {
			if (j == 0 || j + 1 == i) 
				printf("%d ", 1);
			else if (j == 1 || j + 1 == i - 1)
				printf("%d ", i-1); 
			else if (j == 2)
				printf("%d ", ((i-1)*(i-2))/2);
			else if (j == 3)
				printf("%d ", ((i-3)*(i-2)*(i-1))/6);
		       	else
				printf("%ld ", factorial(i-1)/(factorial(j)*factorial((i-1)-j)));	
		}
		printf("\n");
	}
	return 0;
}
