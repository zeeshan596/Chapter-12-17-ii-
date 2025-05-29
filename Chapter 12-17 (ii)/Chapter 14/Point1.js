let input = prompt(`Enter Password:`)
if(input !==""){
    if( input.length < 6){
        alert(`Password must be greater than 5`)
    }
    else{
        alert(`Ok`)
    }
}

else{
    alert(`Password cannot be empty`)
}