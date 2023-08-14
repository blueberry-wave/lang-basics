// See https://aka.ms/new-console-template for more information
Console.WriteLine("009-type-casting");

WriteLine("casting int to double (implicit)");
int a = 10;
double b = a;
WriteLine(b);

WriteLine("casting double to int (explicit)");
double c = 9.8;
int d = (int) c;
WriteLine(d);

WriteLine("Exploring data interpretation after casting");
long e = 10;
int f = (int) e;
WriteLine($"e is {e:N0} and f is {f:N0}");

e = long.MaxValue;
f = (int) e;
WriteLine($"e is {e:N0} and f is {f:N0}");
