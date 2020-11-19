export const formatDate = (date) => {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    return [year, month, day].join('-');
}

export const formatDateTime = (date) => {
    let d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear(),
        hour = d.getHours(),
        minute = d.getMinutes(),
        amPm = 'am';
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    if (hour > 12) {
        hour -= 12;
        amPm = 'pm';
    }
    if (hour === 12) amPm = 'pm';
    if (minute < 10) minute = '0' + minute;
    return month + '-' + day + '-' + year + ' ' + hour + ':' + minute + ' '+ amPm;
}

export const fromPastXDays = (x) => {
    const today = new Date();
    const from = new Date(today);
    from.setDate(from.getDate() - x);
    from.toDateString();
    return formatDate(from);
}