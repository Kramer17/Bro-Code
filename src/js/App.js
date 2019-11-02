import logo from '../logo.svg';
import '../css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';



function Customer(id) {
  this.data = new Data(id);
}

function Data(id){
  this.monthData = [];
  let year;
  let month;
  for (year = 8; year <= 9; year++){
    for (month = 1; month <= 12; month++){
      this.monthData.push(new Month(id, year, month));
      if (this.monthData[month].dayData[0].energy.length == 0){
        this.monthData.pop();
      }
    }
  }
}

function Month(id, year, month){
  this.dayData = [];
  let day;
  for (day = 1; day <= 31; day++){
    this.dayData.push(new Day(id, year, month, day));
    if (this.dayData[day-1].energy.length == 0){
      this.dayData.pop();
    }
  }
}

function Day(id, year, month, day){
  this.energy = [];
  // add energy to array, if that day exists
}