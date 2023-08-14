// See https://aka.ms/new-console-template for more information
WriteLine("010-intro-to-exceptions");

Write("What is your age");
string? input = ReadLine();

try {
	int age = int.Parse(input!);
	WriteLine($"You are {age} years old.");
} catch (FormatException ex) {
	WriteLine("Error caught");
	WriteLine(ex);
}

WriteLine("post try-catch block");
