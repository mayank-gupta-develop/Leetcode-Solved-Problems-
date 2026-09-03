class Solution:
    def largestNumber(self, nums: List[int]) -> str: 
        nums_str = [str(num) for num in nums]
        def compare(a: str, b: str) -> int:
            if a + b < b + a:
                return 1  # a should come after b
            else:
                return -1  # a should come before b

        nums_str.sort(key=cmp_to_key(compare))
        if nums_str[0] == "0":
            return "0"
      
        # Join all sorted strings to form the largest number
        return "".join(nums_str)
        