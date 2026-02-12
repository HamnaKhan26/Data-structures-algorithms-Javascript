/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    if (intervals.length <= 1) return intervals;

    // 1. Sort intervals by start time
    intervals.sort((a, b) => a[0] - b[0]);

    const result = [intervals[0]];

    for (let i = 1; i < intervals.length; i++) {
        const current = intervals[i];
        const lastMerged = result[result.length - 1];

        // 2. Check for overlap
        // If current start <= last merged end, they overlap
        if (current[0] <= lastMerged[1]) {
            // Merge by updating the end time to the maximum of both
            lastMerged[1] = Math.max(lastMerged[1], current[1]);
        } else {
            // 3. No overlap, just add the current interval to result
            result.push(current);
        }
    }

    return result;
};

console.log(merge([[1,3],[2,6],[8,10],[15,18]])); // [[1,6],[8,10],[15,18]]