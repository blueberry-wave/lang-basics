

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
WriteLine($"x = {x} \t\t{ToBinaryString(x)}");
WriteLine($"y = {y} \t\t{ToBinaryString(y)}");
WriteLine($"x & y = {x & y} \t{ToBinaryString(x & y)}");
WriteLine($"x | y = {x | y} \t{ToBinaryString(x | y)}");
WriteLine($"x ^ y = {x ^ y} \t{ToBinaryString(x ^ y)}");


bool a = true;
bool b = false;

WriteLine($"AND\t| a\t|b\t");
WriteLine($"a\t|{ a & a, -5}");



WriteLine($"a && DoStuf()=  {a && DoStuff()}");

WriteLine($"b && DoStuf()=  {b && DoStuff()}");

float u = 11.0F;
int v = 11;

WriteLine($"float u = {u:N1} int v = {v:X}");
WriteLine($"float first division 11/3 = {u/3}");
WriteLine($"int first division v/3 = {v/3}");


static string ToBinaryString(int val) {
    return Convert.ToString(val, toBase: 2).PadLeft(8, '0');
}

static bool DoStuff() {
    WriteLine("I am doing stuff");
    return true;
}

WriteLine($"2 << 3 {2 << 3}");
WriteLine($"8 >> 3 {8 >> 3}");