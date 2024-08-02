export default function yearsAgo(year) {
    var currentYear = new Date().getFullYear();
    
    var yearsDifference = currentYear - year;
   
    return yearsDifference;
}

// call the function
console.log(yearsAgo(1976)); 
console.log(yearsAgo(2000)); 