export let yearsActive = () => {
    const years = currentYear() - 2007;
    
    return years;
}

export let currentYear = () => {
    const now = new Date();
    return now.getFullYear();
}
