function calculateTable(year) {
    let array = new Array(12);
    for (let x = 0; x < array.length; x++) {
        array[x] = new Array(6);
    }
    for (let x = 0; x < array.length; x++) {
        for (let y = 0; y < array[x].length; y++) {
            array[x][y] = new Array(7);
        }
    }
    for (let month = 0; month < array.length; month++) {
        let startDayOfWeek = new Date(year, month, 0).getDay() + 1;
        let monthLong = new Date(year, month + 1,0).getDate() + 1;
        
        let startCount=false;
        let beforeCount=0;
        let counter=1;

        for (let x = 0; x < array[month].length; x++) {
            for (let y = 0; y < array[month][x].length; y++) {
                if (beforeCount == startDayOfWeek) {
                    startCount = true;
                } else {
                    beforeCount++;
                }
                if (startCount == true) {
                    array[month][x][y] = counter;
                    counter++;
                } else {
                    array[month][x][y] = "";
                }
                if (counter > monthLong) {
                    array[month][x][y] = "";
                }
            }
        }
    }
    return array;
}
module.exports = calculateTable;
