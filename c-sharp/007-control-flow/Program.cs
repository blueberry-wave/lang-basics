

// See https://aka.ms/new-console-template for more information
WriteLine("Hello, World!");

int x = 2;
int y = 8;
int resAdd = x + y;
int resMult = x * y;

int postIncr = x ++;
int preIncr = ++ x;

Type typeOfInt = typeof(int);
string nameOfInt = nameof(x);
int byteSizeOfInt = sizeof(int);

x = 10;
y = 6;
WriteLine($"x = {x}");
WriteLine($"y = {y}");
WriteLine($"x & y = {x & y}");
WriteLine($"x | y = {x | y}");
WriteLine($"x ^ y = {x ^ y}");
WriteLine($"x  =     | {ToBinaryString(x)}");


bool a = true;
bool b = false;

WriteLine($"AND\t| a\t|b\t");
WriteLine($"a\t|{ a & a, -5}");



WriteLine($"a && DoStuf()=  {a && DoStuff()}");

WriteLine($"b && DoStuf()=  {b && DoStuff()}");

static string ToBinaryString(int val) {
    return Convert.ToString(val, toBase: 2).PadLeft(8, '0');
}

static bool DoStuff() {
    WriteLine("I am doing stuff");
    return true;
}