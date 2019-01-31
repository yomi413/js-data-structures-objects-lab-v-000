// Write your solution in this file!
const driver = {};

function updateDriverWithKeyAndValue(driver, key, value) {
  const newDriverObject = {...driver};
  newDriverObject[key] = value;

  return newDriverObject;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[key] = value;
  return driver;
}

function deleteFromDriverByKey(driver, name) {
  const newDriverObject = Object.assign({}, driver);
  delete newDriverObject.name;
  return newDriverObject;
}

function destructivelyDeleteFromDriverByKey(driver, name) {
  delete driver.name;
  return driver;
}
