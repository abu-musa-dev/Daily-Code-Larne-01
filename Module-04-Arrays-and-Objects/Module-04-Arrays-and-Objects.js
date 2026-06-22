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