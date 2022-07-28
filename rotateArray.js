const reverseArray = (arr, start, end) => {
	while (start < end) {
		[arr[start], arr[end]] = [arr[end], arr[start]]
		start++
		end--
	}
}

const rotateArray = (nums, n) => {
	n = n % nums.length

	if (n < 0) {
		n = n + nums.length
	}

	reverseArray(nums, 0, nums.length - 1)
	reverseArray(nums, 0, n - 1)
	reverseArray(nums, n, nums.length - 1)
}