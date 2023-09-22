#include <stdio.h>

int main(void) {
  int x;
  x = 123;
  printf("%d\n", x);

  int y;
  y = x;
  printf("%d\n", y);
  
  char c;
  c = 'A';
  float f = 123.456f;

  int x_a = 123;
  int y_a = 456;

  int is_less_than = x_a < y_a;
  int is_greater_than = x_a > y_a;

  printf("The value of\" is less than\" expression %d\n", is_less_than );
  printf("The value of\" is greater than\" expression %d\n", is_greater_than );

  /*
  // objects
  () function call operator
  [] array subscript
  .  structure member access
  -> structure member access through pointer
  (type_name) type cast operator
  
  // math
  + addition
  - substraction
  * multiplication
  / diviison
  % moduus
  ++ increment
  -- decrement

  // logical
  ! logical NEGATION
  == equality
  != inequality
  < less than
  > greater than
  && logical AND
  || logical OR
  ?: ternary conditional
  
  // bitwise
  << bitwise shift left
  >> bitwise shift right
  
  // pointers
  * dereference operator
  & address-of
  */
}
