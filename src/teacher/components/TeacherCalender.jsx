import React, { useState } from 'react'

const days2 = [
    { name: "Mon" },
    { name: "Thus" },
    { name: "Wend" },
    { name: "Thur" },
    { name: "Fri" },
    { name: "Sat" },
    { name: "Sun" }
]

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export default function TeacherCalender() {
    const [activeMount, setActiveMount] = useState(8)
    const [activeYear, setActiveYear] = useState(2022)
    const [dayNames, setDayNames] = useState(days)
    const [data, setData] = useState([])

    useState(() => {
        drawCalender()

    }, [])


    function getDayName(date = new Date(), locale = 'en-US') {
        return date.toLocaleDateString(locale, { weekday: 'long' });
    }

    function getDayNumber(date = new Date()) {
        return date.getDay();
    }
    function getDaysInMonth(year, month) {
        return new Date(activeYear, activeMount, 0).getDate();
    }



    function drawCalender2() {
        const daysInMonth = getDaysInMonth(activeYear, activeMount);
        const selectedDayNumber = getDayNumber(new Date(`${activeYear}-${activeMount < 10 ? "0" + activeMount : activeMount}-01`));
        let total = daysInMonth + selectedDayNumber
        total = total + (7 - (total % 7))

        const calenderData = [];


        for (var i = 0; i < total; i++) {
            if (i - selectedDayNumber > 0) {

            }

            let dateCalender = null;

            if (i - selectedDayNumber > 0) {
                const dayOfNumberCalc = i - selectedDayNumber;
                console.log('ceycey', dayOfNumberCalc, daysInMonth)
                if (dayOfNumberCalc < daysInMonth)
                    dateCalender = new Date(`${activeYear}-${activeMount < 10 ? "0" + activeMount : activeMount}-${dayOfNumberCalc < 10 ? "0" + dayOfNumberCalc : dayOfNumberCalc}`);

                console.log(dateCalender)
            }
            else {
                dateCalender = null;
            }

            if (i > 0 && i % 7 != 0)
                calenderData.push({
                    id: i, dayNumber: i,
                    dayOfMonth: (i - selectedDayNumber + 1 > 0) ? (i - selectedDayNumber + 1) : -1, dateCalender: dateCalender
                }
                )
        }
        setData(calenderData)
    }

    function drawCalender() {
        let dateCalender = null;
        const daysInMonth = getDaysInMonth(activeYear, activeMount);
        const calenderData = [];
        for (var i = 0; i < daysInMonth; i++) {
            const dateCalender = new Date(`${activeYear}-${activeMount < 10 ? "0" + activeMount : activeMount}-${(i+1) < 10 ? "0" + (i+1) : (i+1)}`);

            calenderData.push({
                id: i, dayNumber: (i+1),
                dayOfMonth: (i+1), dateCalender: dateCalender
            })
        }
        setData(calenderData)
    }

    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };


    return (
        <div className='row mt-3'>
            {
                data.map((day, key) =>
                    <div key={key} className='col-4 p-2 border-success border'>

                        {day.dateCalender ?
                        day.dateCalender.getDate() +" "+ months[day.dateCalender.getMonth()] +" "+days[day.dateCalender.getDay()]: ""}
                            {/* //day.dateCalender.toLocaleString('tr-TR', options)  */}
                        <hr />

                        {day.dateCalender ?
                            "Exam 4, Task 5" : ""}
                        

                    </div>
                )
            }
        </div>
    )
}
