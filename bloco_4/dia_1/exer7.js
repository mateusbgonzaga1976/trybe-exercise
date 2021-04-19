let grade;

if(grade < 0.0 || grade > 100.0){
    console.log('Invalid Value');
}else if(grade >= 90.0){
    console.log('Concept A');
}else if(grade >= 80.0){
    console.log('Concept B');
}else if(grade >= 70.0){
    console.log('Concept C');
}else if(grade >= 60.0){
    console.log('Concept D');
}else if(grade >= 50.0){
    console.log('Concept E');
}else{
    console.log('Concept F');
}