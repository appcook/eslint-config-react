module.exports.getErrorCount = function (results) {
  if (!results || !results.length) throw Error('empty results');
  let count = 0;

  results.forEach((item) => {
    if (item.errorCount) count += item.errorCount;
  });

  return count;
};

module.exports.getErrorMessages = function (results) {
  if (!results || !results.length) throw Error('empty results');
  const messages = [];

  results.forEach((item) => {
    if (item.errorCount) messages.push(...item.messages);
  });

  return messages;
};
