export const formatLivePhoneNumber = function formatLivePhoneNumber(input: string): string {
  let digits = input.replace(/\D/g, '');

  if (digits.startsWith('90')) {
    digits = digits.slice(2);
  } else if (digits.startsWith('0')) {
    digits = digits.slice(1);
  }

  digits = digits.slice(0, 10);

  let formatted = '';
  if (digits.length > 0) formatted += digits.slice(0, 3);
  if (digits.length >= 4) formatted += ' ' + digits.slice(3, 6);
  if (digits.length >= 7) formatted += ' ' + digits.slice(6, 8);
  if (digits.length >= 9) formatted += ' ' + digits.slice(8, 10);

  return formatted;
};
