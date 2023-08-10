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


