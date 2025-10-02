function nonoverlappingintervals(intervals, newarr) {
    let [newstart, newend] = newarr;
    let result = [];

    for (let [start, end] of intervals) {

        if (end < newstart) {
            // Completely before → push as is
            result.push([start, end]);
        } 
        else if (start <= newend) {
            // Overlapping → merge intervals
            newstart = Math.min(start, newstart);
            newend   = Math.max(end, newend);
        } 
        else {
            // Completely after → push merged interval and reset
            result.push([newstart, newend]);
            newstart = start;
            newend = end;
        }
    }

    // Push the last interval
    result.push([newstart, newend]);
    return result;
}
