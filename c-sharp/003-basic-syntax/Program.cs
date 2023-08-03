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