function clock() {
    const date = new Date();

    const dayOfWeek = date.getDay();
    const month = date.getMonth();
    const dayOfMonth = date.getDate();
    const year = date.getFullYear();

    const hours =  date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    const hourDisplay = document.querySelector("#hourDisplay");
    const minuteDisplay = document.querySelector("#minuteDisplay");
    const secondDisplay = document.querySelector("#secondDisplay");

    const dayOfWeekDisplay = document.querySelector("#dayOfWeekDisplay")
    const monthDisplay = document.querySelector("#monthDisplay");
    const dayDisplay = document.querySelector("#dayofMonthDisplay");
    const yearDisplay = document.querySelector("#yearDisplay");

    const weekDays = 
                    {
                        "0": "Mon",
                        "1": "Tues",
                        "2": "Wed",
                        "3": "Thur",
                        "4": "Fri",
                        "5": "Sat",
                        "6": "Sun"
                    };
    const months = 
                    {
                        "0": "January",
                        "1": "February",
                        "2": "March",
                        "3": "April",
                        "4": "May",
                        "5": "June",
                        "6": "July",
                        "7": "August",
                        "8": "September",
                        "9": "October",
                        "10": "November",
                        "11": "December"
                    }

    function setDateTime() {
        let monthNum = month;
        let day = dayOfWeek;

        if (months.hasOwnProperty(monthNum)) {
            monthDisplay.textContent = months[monthNum];
        }

        if (weekDays.hasOwnProperty(day)) {
            dayOfWeekDisplay.textContent = weekDays[day];
        }

        hourDisplay.textContent = hours;
        minuteDisplay.textContent = minutes;
        secondDisplay.textContent = seconds;

        dayOfMonthDisplay.textContent = dayOfMonth;
        yearDisplay.textContent = year;
    }

    setDateTime();
}

setInterval(clock, 1000);