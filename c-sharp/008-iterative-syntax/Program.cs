using System.Collections;

WriteLine("008-iterative syntax");

int x = 0;

while (x < 10) {
    WriteLine(x++);
}

// string? password;

// do {
//     WriteLine("Enter your password: ");
//     password = ReadLine();
// } while (password != "PASSWORD");

// WriteLine($"{password} is the correct password!");

string[] names = {"Saad", "Saud", "Khan"};

WriteLine("foreach iterator");
foreach (string name in names) {
    WriteLine($"{name} has {name.Length} chars");
}

IEnumerator nameEnumerator = names.GetEnumerator();

WriteLine("IEnumerator iterator");
while (nameEnumerator.MoveNext()) {
    string name = (string)nameEnumerator.Current;
    WriteLine($"{name} has {name.Length} chars");
}

string[] names2;

names2 =  new string[4];

names2[0] = "Saad";
names2[1] = "Saud";
names2[2] = "Khan";

WriteLine("integer counter iterator");
for (int i = 0; i < names2.Length; i ++) {
    WriteLine(names2[i]);
}

string[,] grid1 = new string[,] {
    { "Alpha", "Beta", "Gamma", "Delta" },
    { "Anne", "Ben", "Charlie", "Doug" },
    { "Aardvark", "Bear", "Cat", "Dog" }
};


WriteLine($"lb of the first dimension is: {grid1.GetLowerBound(0)}");
WriteLine($"ub of the first dimension is: {grid1.GetUpperBound(0)}");
WriteLine($"lb of the second dimension is: {grid1.GetLowerBound(1)}");
WriteLine($"ub of the second dimension is: {grid1.GetUpperBound(1)}");

for (int row = 0; row <= grid1.GetUpperBound(0); row++) {
    for (int col = 0; col < grid1.GetUpperBound(1); col++) {
        WriteLine($"Row {row} Col {col} : {grid1[row,col]}");
    }
}

// different init syntax
string[,] grid2 = new string[10,10];

WriteLine(grid2.Length);

string[][] jaggedArr = new[] {
    new[] {"Alpha", "Beta", "Gamma"},
    new[] {"Anne", "Ben", "Charlie","Doug"},
    new[] {"Aardvark", "Bear"}
};

WriteLine("upperbound of my jagged array is {0}", jaggedArr.GetUpperBound(0));

for (int arrayIndex = 0; arrayIndex <= jaggedArr.GetUpperBound(0); arrayIndex++) {
    WriteLine($"Upper bound of array {arrayIndex} is {jaggedArr[arrayIndex].GetUpperBound(0)} ");
}

for (int row = 0; row <= jaggedArr.GetUpperBound(0); row++) {
    for (int col = 0; col <= jaggedArr[row].GetUpperBound(0); col++) {
        WriteLine($"row {row}, col {col}: {jaggedArr[row][col]}");
    }
}

int[] seqNum = new int[] { 1, 2, 4, 5, 6, 7, 8, 9, 10};
int[] twoNum = new int[] { 1, 2};
int[] threNum = new int[] { 1, 2, 10};
int[] fourNum = new int[] { 1, 2, 3, 10};
int[] sixNum = new int[] { 1, 2, 3, 4, 5, 10};
int[] primNum = new int[] { 1, 2, 3, 5, 7, 11, 13, 17, 19, 23,29};
int[] fibNum = new int[] { 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89};
int[] emptyNum = new int[] {};

WriteLine($"{nameof(seqNum)} : {CheckSwitch(seqNum)}");
WriteLine($"{nameof(twoNum)} : {CheckSwitch(twoNum)}");
WriteLine($"{nameof(threNum)} : {CheckSwitch(threNum)}");
WriteLine($"{nameof(fourNum)} : {CheckSwitch(fourNum)}");
WriteLine($"{nameof(sixNum)} : {CheckSwitch(sixNum)}");
WriteLine($"{nameof(primNum)} : {CheckSwitch(primNum)}");
WriteLine($"{nameof(fibNum)} : {CheckSwitch(fibNum)}");
WriteLine($"{nameof(emptyNum)} : {CheckSwitch(emptyNum)}");

static string CheckSwitch(int[] valArr) => valArr switch {
    [] => "Empty arr",
    [1, 2, _, 10] => "1,2, any single num, 10",
    [1, 2, .., 10] => "1, 2, any sub-domain including empty, 10",
    [1,2] => "1, 2",
    [int val1, int val2, int val3] => $"Contains {val1}, {val2}, {val3}",
    [0, _] => "Starts with 0, then any other number",
    [0, ..] => "Starts with 0, then any subdomain including empty",
    [2, .. int[] others] => $"Starts with 2, then {others.Length} more numbers",
    [..] => "Any subdomain in any order"
};
