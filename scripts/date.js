function formatDateWithTimeZone(date, timeZone, locale = 'en-US') {
    const formatter = new Intl.DateTimeFormat(locale, {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZone,
        hour12: false, // Use 24-hour format
    });

    // This returns the formatted string with all parts
    const parts = formatter.formatToParts(date).reduce((acc, part) => {
        acc[part.type] = part.value;
        return acc;
    }, {});

    // Build the final string format
    return `${parts.year}-${parts.month}-${parts.day} ${parts.hour}:${parts.minute}:${parts.second}`;
}

module.exports = { formatDateWithTimeZone };
