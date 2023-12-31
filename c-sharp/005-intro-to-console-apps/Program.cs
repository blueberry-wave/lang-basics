﻿// using static System.Console;


#define MYSYMBOL

#if NET7_0_ANDROID
// compilation steps for Android
#elif NET7_0_IOS
// compilation steps for IOS
#else
// generic compilation
#endif

WriteLine("intro to console applications");

WriteLine($"There are  {args.Length} arguments");

foreach (string arg in args) {
	WriteLine(arg);
}

if (args.Length < 3) {
	WriteLine("You must specific two colors and a cusor size");
	return ;
}

ForegroundColor = (ConsoleColor) Enum.Parse(
	enumType: typeof(ConsoleColor),
	value: args[0],
	ignoreCase: true
);

BackgroundColor = (ConsoleColor) Enum.Parse(
	enumType: typeof(ConsoleColor),
	value: args[1],
	ignoreCase: true
);

CursorSize = int.Parse(args[2]);

try {
	CursorSize= int.Parse(args[2]);
} catch (PlatformNotSupportedException) {
	WriteLine("The current platform does not support changing the size of the cursor.");
}

if (OperatingSystem.IsWindows()) {
	
} else if (OperatingSystem.IsWindowsVersionAtLeast(major: 10)) {
	
} else if (OperatingSystem.IsIOSVersionAtLeast(major: 14, minor: 5)) {
	
} else if (OperatingSystem.IsBrowser()) {
	
}
