const dsaTopics = [
  {
    title: "String",
    subtopics: [
      {
        questionId: "string-1",
        title: "Two Sum",
        problem:
          "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target",
        example: `Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].`,
        youtubeLink: "https://www.youtube.com/watch?v=vWNYCIj5Dm0",
        leetcodeLink:
          "https://leetcode.com/problems/two-sum/description/?envType=problem-list-v2&envId=hash-table",
        articleLink: "https://coderbyte.com/algorithm/two-sum-problem",
        difficulty: "Easy",
        completed: false,
      },
      {
        questionId: "string-2",
        title: "Longest Common Prefix",
        problem:
          "Write a function to find the longest common prefix string amongst an array of strings.If there is no common prefix, return an empty string ",
        example: `Input: strs = ["flower","flow","flight"]
Output: "fl"`,
        youtubeLink: "https://www.youtube.com/watch?v=K5I7aUK9LVUr",
        leetcodeLink:
          "https://leetcode.com/problems/longest-common-prefix/description/",
        articleLink:
          "https://nileshsaini09.medium.com/longest-common-prefix-a93fcbb159ae",
        difficulty: "Medium",
        completed: false,
      },
      {
        questionId: "string-3",
        title: "Find the Index of the First Occurrence in a String",
        problem:
          "Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.",
        example: `Input: haystack = "sadbutsad", needle = "sad"
Output: 0
Explanation: "sad" occurs at index 0 and 6.
The first occurrence is at index 0, so we return 0.`,
        youtubeLink: "https://www.youtube.com/watch?v=OWaZ6AosS30",
        leetcodeLink:
          "https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/description/?envType=problem-list-v2&envId=string",

        difficulty: "Hard",
        completed: false,
      },
    ],
  },
  {
    title: "Arrays",
    subtopics: [
      {
        questionId: "arrays-1",
        title: " Remove Element",
        problem:
          "Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.",
        example: `Input: nums = [3,2,2,3], val = 3
Output: 2, nums = [2,2,_,_]
Explanation: Your function should return k = 2,
 with the first two elements of nums being 2.
It does not matter what you leave beyond the 
returned k (hence they are underscores).`,
        youtubeLink: "https://www.youtube.com/watch?v=O7cK5DH7rdE",
        leetcodeLink:
          "https://leetcode.com/problems/remove-element/description/?envType=problem-list-v2&envId=array",
        articleLink: "https://www.w3schools.com/jsref/met_element_remove.asp",
        difficulty: "Easy",
        completed: false,
      },
      {
        questionId: "arrays-2",
        title: "Search Insert Position",
        problem:
          "Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.",
        example: `Input: nums = [1,3,5,6], target = 5
Output: 2`,
        youtubeLink: "https://www.youtube.com/watch?v=0A40XJH_VvE",
        leetcodeLink:
          "https://leetcode.com/problems/search-insert-position/description/?envType=problem-list-v2&envId=array",

        difficulty: "Medium",
        completed: false,
      },
    ],
  },
  {
    title: "Hash Table",
    subtopics: [
      {
        questionId: "hashtable-1",
        title: "Roman to Integer",
        problem: `Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.`,
        example: `Input: s = "III"
Output: 3
Explanation: III = 3.`,
        youtubeLink: "https://www.youtube.com/watch?v=u3gFgM6PtZA",
        leetcodeLink:
          "https://leetcode.com/problems/roman-to-integer/description/?envType=problem-list-v2&envId=hash-table",

        difficulty: "Hard",
        completed: false,
      },
      {
        questionId: "hashtable-2",
        title: "Linked List Cycle",
        problem:
          "Given head, the head of a linked list, determine if the linked list has a cycle in it.There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.Return true if there is a cycle in the linked list. Otherwise, return false.",
        example: `Input: head = [3,2,0,-4], pos = 1
Output: true
Explanation: There is a cycle in the linked list, 
where the tail connects to the 1st node (0-indexed).`,
        youtubeLink: "https://www.youtube.com/watch?v=gBTe7lFR3vc",
        leetcodeLink:
          "https://leetcode.com/problems/linked-list-cycle/description/?envType=problem-list-v2&envId=hash-table",

        difficulty: "Medium",
        completed: false,
      },
    ],
  },
];

export default dsaTopics;
