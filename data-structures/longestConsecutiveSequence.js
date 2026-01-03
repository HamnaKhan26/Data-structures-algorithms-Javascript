const arr = [0, 1, 9, 6, 5, -1];

function longestConsecutive(nums) {
  const map = new Map();
  let longest = 0;

  for (const num of nums) {
    map.set(num, false);
  }

  for (let num of nums) {
    // Skip if already visited
    if (map.get(num)) continue;

    map.set(num, true);
    let currentLength = 1;

    let left = num - 1;
    while (map.has(left) && !map.get(left)) {
      map.set(num, true);
      currentLength++;
      left--;
    }

    let right = num + 1;
    while (map.has(right) && !map.get(right)) {
      map.set(num, true);
      currentLength++;
      right++;
    }
    longest = Math.max(currentLength, longest);
  }

  return longest;
}
