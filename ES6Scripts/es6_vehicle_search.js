let vehicles = [
  {
    color: "Silver",
    type: "Minivan",
    registrationState: "CA",
    licenseNo: "ABC-101",
    registrationExpires: new Date("3-10-2022"),
    capacity: 7,
  },
  {
    color: "Red",
    type: "Pickup Truck",
    registrationState: "TX",
    licenseNo: "A1D-2NC",
    registrationExpires: new Date("8-31-2023"),
    capacity: 3,
  },
  {
    color: "White",
    type: "Pickup Truck",
    registrationState: "TX",
    licenseNo: "A22-X00",
    registrationExpires: new Date("9-31-2023"),
    capacity: 6,
  },
  {
    color: "Red",
    type: "Car",
    registrationState: "CA",
    licenseNo: "ABC-222",
    registrationExpires: new Date("12-10-2022"),
    capacity: 5,
  },
  {
    color: "Black",
    type: "SUV",
    registrationState: "CA",
    licenseNo: "EEE-222",
    registrationExpires: new Date("12-10-2021"),
    capacity: 7,
  },
  {
    color: "Red",
    type: "SUV",
    registrationState: "TX",
    licenseNo: "ZZ2-101",
    registrationExpires: new Date("5-30-2022"),
    capacity: 5,
  },
  {
    color: "White",
    type: "Pickup Truck",
    registrationState: "TX",
    licenseNo: "CAC-7YT",
    registrationExpires: new Date("1-31-2022"),
    capacity: 5,
  },
  {
    color: "White",
    type: "Pickup Truck",
    registrationState: "CA",
    licenseNo: "123-ABC",
    registrationExpires: new Date("3-31-2023"),
    capacity: 5,
  },
];

// which vehicles are RED?
console.log("\nVehicles that are RED:");
let redCar = vehicles.filter((redCar) => redCar.color === "Red");
redCar.forEach((redCar) => console.log(`${redCar.type} - ${redCar.licenseNo}`));

// which vehicles have registrations that are expired?
console.log("\nExpired registrations:");
let expired = vehicles.filter(
  (expired) => expired.registrationExpires < new Date("10-28-2024")
);
expired.forEach((expired) =>
  console.log(
    `${expired.type} - ${
      expired.licenseNo
    } - Expired: ${expired.registrationExpires.toLocaleDateString()}`
  )
);

// which vehicles hold at least 6 people?
console.log("\nVehicles that hold at least 6 people:");
let capacity = vehicles.filter((capacity) => capacity.capacity >= 6);
capacity.forEach((capacity) =>
  console.log(`${capacity.type} - ${capacity.licenseNo}`)
);

// which vehicles have license plates that end with "222"?
console.log("\nLicense plates that end with '222':");
let licensePlate = vehicles.filter((licensePlate) =>
  licensePlate.licenseNo.endsWith("222")
);
licensePlate.forEach((licensePlate) => console.log(licensePlate.licenseNo));
