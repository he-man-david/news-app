export const formatDate = (date) => {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();
    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;
    return [year, month, day].join('-');
}

export const fromPastXDays = (x) => {
    const today = new Date();
    const from = new Date(today);
    from.setDate(from.getDate() - x);
    from.toDateString();
    return formatDate(from);
}