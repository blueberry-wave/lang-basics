using System.Collections;

WriteLine("008-iterative syntax");

int x = 0;

while (x < 10) {
    WriteLine(x++);
}

string? password;

// do {
//     WriteLine("Enter your password: ");
//     password = ReadLine();
// } while (password != "PASSWORD");

WriteLine($"{password} is the correct password!");

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
