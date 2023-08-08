function daysInAMonth(month, year) {


    let getDays = (year, month) => {
        return new Date(year, month, 0).getDate();
    }

    const days = getDays(year, month);
    console.log(days)
}
