Date.prototype.month = Date.prototype.getMonth;
Date.prototype.day = Date.prototype.getDay;
Date.prototype.year = Date.prototype.getFullYear;
Date.prototype.date = Date.prototype.getDate;
Date.prototype.hours = Date.prototype.getHours;

function format(date, format) {
    const d = new Date(date);
    const lM = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const sM = lM.map((m) => m.slice(0, 3));
    const lD = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const sD = lD.map((d) => d.slice(0, 3));
  
      const replaceToken = (token, value) => {
      format = format.replace(new RegExp(token, 'g'), value);
    };
  
   replaceToken('dd', ("0" + d.date()).slice(-2));
  replaceToken('d', d.date());

  replaceToken('HH', ("0" + d.hours()).slice(-2));
  replaceToken('H', d.hours());
  replaceToken('hh', ("0" + (d.hours() % 12 || 12)).slice(-2));
  replaceToken('h', d.hours() % 12 || 12);

  replaceToken('mm', ("0" + d.getMinutes()).slice(-2));
  replaceToken('m', d.getMinutes());

  replaceToken('ss', ("0" + d.getSeconds()).slice(-2));
  replaceToken('s', d.getSeconds());

  replaceToken('GGGG', d.year() < 0 ? "Before Christ" : "Anno Domini");
  replaceToken('G', d.year() < 0 ? "BC" : "AD");

  if (d.year() < 0) d.setFullYear(-d.year());
  replaceToken('yyyy', d.year().toString().padStart(4, "0"));
  replaceToken('y', d.year().toString().replace(/^0+/, ""));

  replaceToken('a', d.hours() < 12 ? "AM" : "PM");

  // Adjusted handling for month strings
  format = format.replace(/(?<!M)MM(?!M)/g,(d.month() + 1).toString().length < 10? "0" + (d.month() + 1): d.month() + 1);
    format = format.replace(/(?<!(M|P|A))M(?!M)/g, d.month() + 1);
    format = format.replace(/MMMM/g, lM[d.month()]);
    format = format.replace(/MMM/g, sM[d.month()].slice(0, 3));

  replaceToken('EEEE', lD[d.getDay()]);
  replaceToken('E', sD[d.getDay()].slice(0, 3));

  return format;
}