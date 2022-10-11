import React, { useEffect } from 'react'
import useYearlyPlan from "../../api/useYearlyPlan"


export default function TeacherCalender() {
  const [yearlyPlan, setYearlyPlan] = useYearlyPlan([]);

  useEffect(() => {
    setYearlyPlan('findYearlyPlanBySchool', 110);
  }, [])

  const convertToDateForGantt = (baseDateString) => {
    let d = new Date(baseDateString)
    let ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
    let mo = new Intl.DateTimeFormat('en', { month: 'numeric' }).format(d);
    let da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
    return da + "." + (mo - 1) + "." + ye;
  }



  return (
    <div className='mt-3 bg-dark'>
      <div>
        <table className='table table-striped table-dark'>
          <tr>
            <th scope="col">NAME</th>
            <th scope="col">TYPE</th>
            <th scope="col">DATE</th>
          </tr>

          {
            yearlyPlan ?
              yearlyPlan.length > 0 ?
                yearlyPlan.map((plan, key) =>
                  <tr key={key} className="p-2">
                    <td className="p-2">{plan.type === "EXAM" ? plan.exam.name : plan.episodeTask.name}</td>
                    <td className="p-2">{plan.type}</td>
                    <td className="p-2">{convertToDateForGantt(plan.startAt)}</td>
                  </tr>
                )
                : null
              : null
          }

        </table>
      </div>

    </div>
  )
}
