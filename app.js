//Grab day of the week from local computer
let date = new Date();
let dayOfWeekNumber = date.getDay();
let nameOfDay;
let quote;

switch(dayOfWeekNumber){
    case 0: 
        nameOfDay = 'sunday';
        quote = 'happy sunday(:';
        break;
    case 1:
        nameOfDay = 'monday';
        quote = 'hate monday!';
        break;
    case 2:
        nameOfDay = 'tuesday';
        quote = 'annoy tuesday!';
        break;
    case 3:
        nameOfDay = 'wednesday';
        quote = 'ignore wednesday.';
        break;
    case 4:
        nameOfDay = 'Thursday';
        quote = 'smile Thursday...';
        break;
    case 5:
        nameOfDay = 'friday';
        quote = 'love friday!';
        break;
    case 6:
        nameOfDay = 'saturday';
        quote = 'enjoy saturday!';
        break;

}
//Display the day of the week
let weekdayDiv = document.getElementById('weekday');
weekdayDiv.innerHTML = `${nameOfDay}`;

//Display quote
let quoteDiv = document.getElementById('phrase');
quoteDiv.innerHTML = `${quote}`

