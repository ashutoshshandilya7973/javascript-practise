/** 1. Setup a blank array, myWork.
 2. Using a for loop, create a list of 10 objects, each of which is a numbered 
lesson (e.g. Lesson 1, Lesson 2, Lesson 3….) with an alternating true/false 
status for every other item to indicate whether the class will be running this 
year. For example:
 name: 'Lesson 1', status: true
 3. You can specify the status by using a ternary operator that checks whether 
the modulo of the given lesson value is equal to zero and by setting up a 
Boolean value to alternate the values each iteration.
 4. Create a lesson using a temporary object variable, containing the name 
(lesson with the numeric value) and predefined status (which we set up in 
the previous step).
 5. Push the objects to the myWork array.
 6. Output the array to the console */

 let mywork=[];
 let count=1;
 let status1=true;
 for(let i=0;i<10;i++){
    let obj={};
    obj.name=`Lesson ${count}`;
    count++;
    obj.status=status1;
    status1=!status1;
    mywork.push(obj)
 }
 for(let i=0;i<mywork.length;i++){
    console.log(mywork[i])
 }