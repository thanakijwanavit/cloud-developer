FILE="functionlist.txt"
echo $FILE
while read line
do
echo invoking $line
sam local invoke $line
done < $FILE
