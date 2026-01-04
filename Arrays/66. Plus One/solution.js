var plusOne = function (digits) {
  let int = BigInt(digits.join(""));
  int++;
  let arrofint = Array.from(String(int), Number);
  return arrofint;
};

