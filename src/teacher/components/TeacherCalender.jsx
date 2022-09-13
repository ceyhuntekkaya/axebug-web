import React, { useEffect, useState } from 'react'
import useYearlyPlan from "../../api/useYearlyPlan"


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


export default function TeacherCalender() {
  const [yearlyPlan, setYearlyPlan] = useYearlyPlan([]);
  const [tasks, setTasks] = useState(taskModel);


  useEffect(() => {
    const teacher = JSON.parse(localStorage.getItem("teacher"));
    setYearlyPlan('findYearlyPlanBySchool', teacher.school_id);
  }, [])
  console.log(tasks)
  console.log(yearlyPlan)


  // useEffect(() => {
  //   if (yearlyPlan) {
  //     if (yearlyPlan.length > 0) {
  //       const readyPlan = [];
  //       yearlyPlan.forEach((plan, key) => {
  //         let name = "";
  //         if (plan.type == "TASK") {
  //           name = "Task " + (key + 1)
  //         }
  //         else {
  //           name = "Exam 1"
  //         }
  //         const task =
  //         {
  //           start: convertToDateForGantt(plan.startAt),
  //           end: convertToDateForGantt(plan.endAt),
  //           name: name,
  //           id: 'Task ' + key,
  //           type: 'task',
  //           progress: 90,
  //           isDisabled: false,
  //           styles: { progressColor: '#ffbb54', progressSelectedColor: '#ff9e0d' },
  //         };
  //         readyPlan.push(task)
  //       });
  //       setTasks(readyPlan);
  //     }
  //   }
  // }, [yearlyPlan])


  const convertToDateForGantt = (baseDateString) => {
    //console.log(new Date(plan.startAt).toDateString())
    let d = new Date(baseDateString)
    let ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
    let mo = new Intl.DateTimeFormat('en', { month: 'numeric' }).format(d);
    let da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
    return new Date(ye, mo - 1, da);
  }

  return (
    <div>TeacherCalender</div>
  )
}
