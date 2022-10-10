const days = ['M', 'Tu', 'W', 'Th', 'F']

const daysOverlap = (d1, d2) =>{
    return days.some(day => d1.includes(day) && d2.includes(day))
}

const greaterTime = (h1, h2) =>{
    return (h1.hour === h2.hour && h1.minutes >= h2.minutes) || h1.hour > h2.hour
}

const hourOverlap = (h1, h2) =>{
    return greaterTime(h1.end, h2.start) && greaterTime(h2.end, h1.start)
}

const timeConflict = (course1, course2) =>{
    //console.log(daysOverlap(course1.days, course2.days) && hourOverlap(course1.hours, course2.hours))
    if (course1 == course2){
        return false
    }
    return (daysOverlap(course1.days, course2.days) && hourOverlap(course1.hours, course2.hours))
}

const parseInfo = (meet) =>{
    const firstTime = meet.substring(meet.search(' ') + 1, meet.search('-'))
    const secondTime = meet.substring( meet.search('-') + 1)
    const days = meet.substring(0, meet.search(' '))
    return {
        "days": days,
        "hours":
        {
            "start":
            {
                "hour": parseInt(firstTime.substring(0, firstTime.search(':'))),
                "minutes": parseInt(firstTime.substring(firstTime.search(':') + 1))
            },
            "end":
            {
                "hour": parseInt(secondTime.substring(0, secondTime.search(':'))),
                "minutes": parseInt(secondTime.substring(secondTime.search(':') + 1))
            }
        }
    }

}

export const hasConflict = (course, selected) =>{
    return (
        selected.some(selection => (
            (course[1].term === selection.term) && timeConflict(parseInfo(course[1].meets), parseInfo(selection.meets))
        ))
    )
}