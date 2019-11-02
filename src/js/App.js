import logo from '../logo.svg';
import '../css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';



function Customer(id) {
  let data = new Data(id);
}

function Data(id){
  let monthData = [];
  let year;
  let month;
  let
  for (year = 8; year <= 9; year++){
    for (month = 1; month <= 12; month++){
      monthData.push(new Month(id, year, month));
    }
  }
}

function Month(id, year, month){
  let dayData = [];
  let day;
  for (day = 1; day <= 31; day++){
    dayData.push(new Day(id, year, month, day));
  }
}

function Day(id, year, month, day){

}