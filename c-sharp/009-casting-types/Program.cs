﻿// See https://aka.ms/new-console-template for more information
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

WriteLine("Using System.Convert");
double g = 9.8;
int h = ToInt32(g);
WriteLine($"g is {g} and h is {h}");

WriteLine("Default rounding behaviour for System.Convert");
double[] doubles = new [] {
	9.49,
	9.5,
	9.51,
	10.49,
	10.5,
	10.51
};

foreach (double n in doubles) {
	WriteLine($"ToInt32({n}) is {ToInt32(n)}");
}

WriteLine("Custom rounding logic");
foreach(double n in doubles) {
	WriteLine(
		format: "Math.Round({0}, 0, MidpointRounding.AwayFromZero) is {1}",
		arg0: n,
		arg1: Math.Round(value: n, digits: 0, mode: MidpointRounding.AwayFromZero)
	);
}

int number = 12;
WriteLine(number.ToString());

bool boolean = true;
WriteLine(boolean.ToString());
DateTime now = DateTime.Now;
WriteLine(now.ToString());
object me = new();
WriteLine(me.ToString());

// alocate array
byte[] binaryObject = new byte[128];

Random.Shared.NextBytes(binaryObject);

WriteLine("Binary Object as bytes");

for(int index = 0; index < binaryObject.Length; index++) {
	Write($"{binaryObject[index]:X}");
}
WriteLine();

string encoded = ToBase64String(binaryObject);
WriteLine($"Binary Object as Base 64: {encoded}");

int age = int.Parse ("27");
DateTime birthday = DateTime.Parse("4 July 1980");
WriteLine($"I was born {age} years ago");
WriteLine($"My birthday is {birthday}");
WriteLine($"My birthday is {birthday:D}");

// Try Parse
Write("How many eggs are there?");
string? input = ReadLine();

if (int.TryParse(input, out int count)) {
	WriteLine($"There are  {count} eggs.");
} else {
	WriteLine("I could not parse the input.");
}
