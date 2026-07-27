/**
 * Debounce function to limit the execution rate of a function.
 * @param {Function} func - The function to be executed.
 * @param {number} delay - The delay in milliseconds.
 * @returns {Function} - The debounced function.
 */
function debounce(func, delay) {
  let timeoutId;

  return function (...args) {
    const context = this;

    // আগের টাইমারটি বাতিল করা হচ্ছে
    clearTimeout(timeoutId);

    // নতুন টাইমার সেট করা হচ্ছে
    timeoutId = setTimeout(() => {
      func.apply(context, args);
    }, delay);
  };
}

// ব্যবহারের উদাহরণ:
const handleSearch = debounce((query) => {
  console.log(`Searching for: ${query}`);
}, 500);

// ব্যবহারকারী দ্রুত টাইপ করলেও এটি শুধুমাত্র শেষ টাইপের ৫০০ মিলিসেকেন্ড পর রান করবে
handleSearch("J");
handleSearch("Ja");
handleSearch("JS"); // শুধু এটিই রান হবে



/**
 * Recursively creates a deep clone of a given object or array.
 * @param {any} obj - The object or array to clone.
 * @returns {any} - The cloned object or array.
 */
function deepClone(obj) {
  // যদি ভ্যালুটি অবজেক্ট বা অ্যারে না হয়, সরাসরি রিটার্ন করবে
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  // অ্যারে নাকি অবজেক্ট তা নির্ধারণ করা হচ্ছে
  const clone = Array.isArray(obj) ? [] : {};

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      // রিকার্সিভলি ভেতরের ভ্যালুগুলো ক্লোন করা হচ্ছে
      clone[key] = deepClone(obj[key]);
    }
  }

  return clone;
}

// ব্যবহারের উদাহরণ:
const original = {
  name: "Rahim",
  skills: ["JavaScript", "React"],
  address: {
    city: "Dhaka",
    zip: 1207
  }
};

const cloned = deepClone(original);
cloned.address.city = "Sylhet"; // ক্লোনড অবজেক্ট পরিবর্তন করা হলো

console.log(original.address.city); // Output: Dhaka (মূল অবজেক্ট অপরিবর্তিত আছে)
console.log(cloned.address.city);   // Output: Sylhet





/**
 * Recursively creates a deep clone of a given object or array.
 * @param {any} obj - The object or array to clone.
 * @returns {any} - The cloned object or array.
 */
function deepClone(obj) {
  // যদি ভ্যালুটি অবজেক্ট বা অ্যারে না হয়, সরাসরি রিটার্ন করবে
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  // অ্যারে নাকি অবজেক্ট তা নির্ধারণ করা হচ্ছে
  const clone = Array.isArray(obj) ? [] : {};

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      // রিকার্সিভলি ভেতরের ভ্যালুগুলো ক্লোন করা হচ্ছে
      clone[key] = deepClone(obj[key]);
    }
  }

  return clone;
}

// ব্যবহারের উদাহরণ:
const original = {
  name: "Rahim",
  skills: ["JavaScript", "React"],
  address: {
    city: "Dhaka",
    zip: 1207
  }
};

const cloned = deepClone(original);
cloned.address.city = "Sylhet"; // ক্লোনড অবজেক্ট পরিবর্তন করা হলো

console.log(original.address.city); // Output: Dhaka (মূল অবজেক্ট অপরিবর্তিত আছে)
console.log(cloned.address.city);   // Output: Sylhet


/**
 * Finds two numbers in an array that add up to a specific target.
 * Time Complexity: O(n) | Space Complexity: O(n)
 * @param {number[]} nums
 * @param {number} target
 * @returns {number[]} - Indices of the two numbers
 */
function twoSum(nums, target) {
  const numMap = new Map(); // ভ্যালু এবং ইনডেক্স ট্র্যাক রাখার জন্য