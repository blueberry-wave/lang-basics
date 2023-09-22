#!/bin/bash

## Command Line and Default Arguments
# echo "Hello $1"
echo "You are using: $0"

echo "list of args: $*"
# echo 'list of args $*'
# echo "list of args \$*"

# Evaluating shell functions
echo "Eval inner command basename:  $(basename $0)"

echo "$(01_main.sh) from 01_main.sh"

# user defined variables
name="blueberry wave"
age=25
target_Val=100000000
myArr=(one two three four)

echo $name
echo $age
echo $target_Val
echo "myArr[1]: ${myArr[1]}"

# example array operation
unset myArr[1]
echo "myArr[1] after unset: ${myArr[1]}"
unset myArr

# env variables
printenv HOME

# executing commands
cur_dir=$(pwd)
echo $cur_dir

cur_dir2=$(pwd)
echo $cur_dir2

exit 0
