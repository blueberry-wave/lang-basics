// See https://aka.ms/new-console-template for more information
Console.WriteLine("Basic Syntax of c-sharp");

// basic var declaration, assignment, and operation
int subTotal;
subTotal = 10;

int salesTax = 13;
string item = "10k bananas"; // end of line comment

Console.WriteLine("I just bought {0} for {1}", item, subTotal /* in-line comment */ + salesTax );

// basic comment

/*
	This is
	a multi-line
	comment.
*/

double heightInMeters = 1.78;
Console.WriteLine($"The variable {nameof(heightInMeters)} has the value {heightInMeters}");

char letter = 'A';
char digit = '1';

string firstName = "Saad";
string lastName = "Khan";

string horizontalLine = new('-', count: 74);
string grinningEmoji = char.ConvertFromUtf32(0x1F600);

Console.WriteLine(grinningEmoji);

string fullNameWithTab = "Saad\tKhan";
// string filePath = "C:\laptop\lenovo\x1";
string filePath2 = @"C:\laptop\lenovo\x1";

string xmlSample = """
		<person age="50">
		<first_name>Saad></first_name>
		</person>
		""";
var person = new { FirstName = "Saad", Age = 25};

string json = $$"""
	{
		"first_name" : "{{person.FirstName}}",
		"age": {{person.Age}};
		"calculation": "{{{1 + 2}}}"
	}
""";

Console.WriteLine(json);

// numbers

uint naturalNumber = 23;
int integerNumber = -23;
float realNumber = 2.3F;
double anotherRealNumber = 2.3;

Console.WriteLine($"int uses {sizeof(int)} bytes and can store numbers in the range {int.MinValue:N0} to {int.MaxValue:N0}");

Console.WriteLine($"double uses {sizeof(double)} bytes and can store numbers in the range {double.MinValue:N0} to {double.MaxValue:N0}");

Console.WriteLine($"decimal uses {sizeof(decimal)} bytes and can store numbers in the range {decimal.MinValue:N0} to {decimal.MaxValue:N0}");

Console.WriteLine("Using doubles");

double a = 0.1; 
double b = 0.2;

if (a + b == 0.3) {
	Console.WriteLine($"{a} + {b} equals {0.3}");
} else {
	Console.WriteLine($"{a} + {b} does NOT equal {0.3}");
}

decimal c = 0.1M;
decimal d = 0.2M;

if (c + d == 0.3M) {
	Console.WriteLine($"{c} + {d} equcls {0.3}");
} else {
	Console.WriteLine($"{c} + {d} does NOT equal {0.3}");
}

Console.WriteLine($"episolon {double.Epsilon}");

object height = 1.88;
object name = "Amir";

Console.WriteLine($"{name} is {height} meters tall.");

// int length1 = name.Length;
int length2 = ((string)name).Length;
Console.WriteLine($"{name} has {length2} characters");


dynamic something = "Saad";
Console.WriteLine($"Length of dynamic string is {something.Length}");

// inferring types f variables

var population = 40_000_000UL;
var deadPop = -40_000_000L;
var weight = 1.88;
var price = 4.99M;
var fruit = "Apples";
var letterZ = 'Z';
var happy = true;


