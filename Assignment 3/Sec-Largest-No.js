function findSecondLargest(arr){
    arr.sort(function(x,y)
{
    return y-x;
});
for(var j=1; j <= arr.length; j++){
    if(arr[j-1] !== arr[j])
        {
            return arr[j];
        }
}
}
const arr =[12,35,1,10,34,1];
console.log("Second largest element:", findSecondLargest(arr));