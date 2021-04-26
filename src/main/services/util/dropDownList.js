export const dataToDropdownData = (arr, valueName, labelName) => {
  arr.forEach((data) => {
    data["value"] = data[valueName];
    data["label"] = data[labelName];
  });
  return arr
};
