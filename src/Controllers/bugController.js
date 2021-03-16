import bugModel from "../Models/bugModel";

export function retrieveBugs() {
  let data = [];

  data.push(new bugModel({
    _id: 1298376,
    name: "Crash on load",
    details: "Crashes after a few seconds",
    steps: "Open application, and it will crash",
    version: "V2.0",
    assigned: "Ryan Young",
    creator: "Sharlene Delroy",
    priority: 1,
    time: "09:23",
  }))

  data.push(new bugModel({
    _id: 1298376,
    name: "App won't load",
    details: "Crashes after a few seconds",
    steps: "Open application, and it will crash",
    version: "V2.0",
    assigned: "Ryan Young",
    creator: "Bobby Primrose",
    priority: 3,
    time: "09:23",
  }))

  return data.sort((a, b) => a.priority - b.priority)
}
