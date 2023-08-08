

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


WriteLine("Control Flow 1");

if (true) {
    WriteLine("Flow 1 -true\n");
}

WriteLine("Control Flow 2");
if (false) {
    WriteLine("Flow 2 - true\n");
} else if(true) {
    WriteLine("Flow 2 - false\n");
} 

WriteLine("Control Flow 3");
if (false) {
    WriteLine("Flow 3- true\n");
} else if(false) {
    WriteLine("Flow 3 - false\n");
} else {
    WriteLine("Flow 3 - else");
}


object o = "3";
int j = 4;

if (o is int i) {
    WriteLine($" {i} * {j} = {i * j}");
} else {
    WriteLine("o is not an int, cannot multiply");
}

object o2 = 10;
if (o2 is int k) {
    WriteLine($" o2: {k} * {j} = {k * j}");
} else {
    WriteLine("o2 is not an int, cannot multiply");
}

int randNum = Random.Shared.Next(1,5);
WriteLine($"randNum is {randNum}");

switch (randNum) {
    case 1:
        WriteLine($"case 1");
        break;
    case 2:
        WriteLine("case 2");
        break;
    case 3:
    case 4:
        WriteLine("multi case, 3,4");
        break;
    default:
        WriteLine("default case");
        break;
}

Animal?[] animalArr = new Animal?[] {
    new Cat {
        Name= "Thoor",
        Born= new(year: 2019, month: 07, day: 16),
        Legs = 4,
        IsDomestic = true
        },
    new Cat {
        Name = "Palo",
        Born = new(year: 2019, month: 2, day: 16),
        Legs = 4,
        IsDomestic = true
    },
    new Spider {
        Name = "Miss Spider",
        Born = new(year: 2010, month: 04, day: 4),
        Legs = 8,
        IsVenomous = true
    },
    new Spider {
        Name = "Fury Cutter",
        Born = DateTime.Today,
        IsVenomous = false
    },
    null
};

foreach (Animal? animal in animalArr) {
    string message;

    switch (animal) {

        case Cat FourLeggedCat when FourLeggedCat.Legs == 4:
            WriteLine($"{FourLeggedCat.Name} has 4 legs!");
            break;
        default:
            WriteLine($"{animal.Name} is a {animal.GetType().Name}");
            break;
        case Cat WildCat when WildCat.IsDomestic == false :
            WriteLine($"{WildCat.Name} is a wild cat");
            break; 
        case null:
            WriteLine("animal is null");
            break;
    }
}


class Animal {
    public string? Name;
    public DateTime Born;
    public byte Legs;
}

class Cat : Animal {
    public bool IsDomestic;
}

class Spider : Animal {
    public bool IsVenomous;
}


