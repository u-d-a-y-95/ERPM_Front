export const dataToDropdownData = (mainName, arr, valueName, labelName) => {
  return arr.forEach((data) => {
    data["value"] = data[valueName];
    data["label"] = data[labelName];
  });
};
