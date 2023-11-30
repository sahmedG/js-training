function findIP(inputString){
    const ipregex = /\b(?:\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(?:\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(?:\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(?:\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\b(?::\d{1,5})?/g;
    const matches = inputString.matches(ipregex) || []
    return matches
}