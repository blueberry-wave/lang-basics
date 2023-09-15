#include <stdio.h>

int main(void) {
  char projectTitle[] = "02-basic-c-programs";
  printf("%s\n", projectTitle);

  char myChar = 97;

  printf("%c\n", myChar);
  printf("%d\n", myChar);
  printf("The size of a character objcet is %zi byte(s)\n", sizeof(myChar));

  int x;
  x = 10;

  printf("Decimal: %d Octal: %o Hexadecimal: %X\n", x, x, x);

  unsigned int y = 12345679u;

  // exercises
  /* multiline commenct
  -
  -
  */

  char cc = 'a';
  int xx = 123;
  float ff = 123.456f;
  double dd = 789.101112;
  
  printf("%c\n", cc);  
  printf("%d\n", xx);  
  printf("%f\n", ff);  
  printf("%f\n", dd);  

  return 0;
}