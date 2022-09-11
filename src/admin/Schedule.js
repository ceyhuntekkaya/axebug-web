import React, { useEffect, useState } from 'react'
import { Gantt, Task, EventOption, StylingOption, ViewMode, DisplayOption } from 'gantt-task-react';
import useYearlyPlan from "../api/useYearlyPlan"
import "gantt-task-react/dist/index.css";

const taskModel = [
    {
        start: new Date(2020, 1, 1),
        end: new Date(2020, 1, 3),
        name: "plan.id",
        id: 'Task 0',
        type: 'task',
        progress: 45,
        isDisabled: true,
        styles: { progressColor: '#ffbb54', progressSelectedColor: '#ff9e0d' },
    },];

export default function Schedule() {

    const [yearlyPlan, setYearlyPlan] = useYearlyPlan([]);
    const [tasks, setTasks] = useState(taskModel);

    const [view, onViewModeChange] = useState(ViewMode.Month);
    const [isChecked, onViewListChange] = useState(true);

    useEffect(() => {
        const school = JSON.parse(localStorage.getItem("school"));
        setYearlyPlan('findYearlyPlanBySchool', school.id);
    }, [])

    useEffect(() => {
        if (yearlyPlan) {
            if (yearlyPlan.length > 0) {
                const readyPlan = [];
                yearlyPlan.forEach((plan, key) => {
                    let name = "";
                    if (plan.type == "TASK") {
                        name = "Task " + (key + 1)
                    }
                    else {
                        name = "Exam 1"
                    }
                    const task =
                    {
                        start: convertToDateForGantt(plan.startAt),
                        end: convertToDateForGantt(plan.endAt),
                        name: name,
                        id: 'Task ' + key,
                        type: 'task',
                        progress: 90,
                        isDisabled: false,
                        styles: { progressColor: '#ffbb54', progressSelectedColor: '#ff9e0d' },
                    };
                    readyPlan.push(task)
                });
                setTasks(readyPlan);
            }
        }
    }, [yearlyPlan])


    // https://www.npmjs.com/package/gantt-task-react
    //localStorage.setItem("school", null)



    const convertToDateForGantt = (baseDateString) => {
        //console.log(new Date(plan.startAt).toDateString())
        let d = new Date(baseDateString)
        let ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
        let mo = new Intl.DateTimeFormat('en', { month: 'numeric' }).format(d);
        let da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
        return new Date(ye, mo - 1, da);
    }


    const viewList = () => {
        return (
            <div className="ViewContainer">
                <button
                    className="Button"
                    onClick={() => onViewModeChange(ViewMode.Hour)}
                >
                    Hour
                </button>
                <button
                    className="Button"
                    onClick={() => onViewModeChange(ViewMode.QuarterDay)}
                >
                    Quarter of Day
                </button>
                <button
                    className="Button"
                    onClick={() => onViewModeChange(ViewMode.HalfDay)}
                >
                    Half of Day
                </button>
                <button className="Button" onClick={() => onViewModeChange(ViewMode.Day)}>
                    Day
                </button>
                <button
                    className="Button"
                    onClick={() => onViewModeChange(ViewMode.Week)}
                >
                    Week
                </button>
                <button
                    className="Button"
                    onClick={() => onViewModeChange(ViewMode.Month)}
                >
                    Month
                </button>

                <div className="Switch">
                    <label className="Switch_Toggle">
                        <input
                            type="checkbox"
                            defaultChecked={isChecked}
                            onClick={() => onViewListChange(!isChecked)}
                        />
                        <span className="Slider" />
                    </label>
                    Show Task List
                </div>
            </div>
        )
    }

    return (
        <React.Fragment>
            <div className='container mt-5'>
                {
                    viewList()
                }
                <Gantt tasks={tasks} viewMode={view} listCellWidth={isChecked ? "155px" : ""} />
            </div>
        </React.Fragment>
    )
}
