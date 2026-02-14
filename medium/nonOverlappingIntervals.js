/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    if (intervals.length === 0) return 0;

    // 1. Sort by the END time
    intervals.sort((a, b) => a[1] - b[1]);

    let count = 0;
    // 2. Track the end of the last interval we decided to keep
    let prevEnd = intervals[0][1];

    for (let i = 1; i < intervals.length; i++) {
        const [start, end] = intervals[i];

        if (start < prevEnd) {
            // 3. Overlap detected! We must remove this one
            // (Since we sorted by end time, removing the one that ends later 
            // is always the better greedy choice)
            count++;
        } else {
            // 4. No overlap, update our boundary
            prevEnd = end;
        }
    }

    return count;
};