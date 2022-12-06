import { Goal } from '../classes/Goal.js';
import fs from 'fs';
import localStorageGoals from '../helpers/localStorage.js'

let goals = localStorageGoals.getLocalStorage('goals')


// #Goals
function getAllGoals() {
     return { goals }
}

function deleteAllGoals() {
     goals = goals.splice(goals.length);
     localStorageGoals.localStorage.clear();
     return goals;
}

// #Goal
function getSingleGoal(req) {
     const goal = goals.find(item => item.id == req.params.id);
     return goal
}

function createSingleGoal(req) {
     const fileName = uploadFileGoal(req)
     const newGoal = new Goal(req.body.title, req.body.subTitle, req.body.content, req.body.priority, fileName);


     goals.push(newGoal);
     localStorageGoals.setLocalStorage('goals', goals)

     return newGoal.id;
}

function editSingleGoal(req) {
     const { title, subTitle, content, priority, file } = req.body;
     const id = req.params.id;
     const index = goals.findIndex((item) => item.id == id);

     goals[index].title = title;
     goals[index].subTitle = subTitle;
     goals[index].content = content;
     goals[index].priority = priority;
     goals[index].img = file;

     return localStorageGoals.setLocalStorage('goals', goals);
}
function deleteSingleGoal(req) {
     const id = req.params.id
     const index = goals.findIndex((item) => item.id == id);

     if (goals[index].img != '') {
          fs.unlinkSync(`./public/uploads/${goals[index].img}`)
     }

     goals.splice(index, 1);

     return localStorageGoals.setLocalStorage('goals', goals);
}
function uploadFileGoal(req) {

     if (!req.files) {
          return console.log("No files were uploaded.");
     }

     let File;
     let uploadPath;

     File = req.files.goalFile;
     uploadPath = './public/uploads/' + File.name;


     File.mv(uploadPath, (err) => {
          if (err) {
               return console.log(err)
          }
          return console.log('File uploaded!');
     })

     return File.name;
}

export default {
     getAllGoals,
     deleteAllGoals,
     getSingleGoal,
     createSingleGoal,
     editSingleGoal,
     deleteSingleGoal,
     uploadFileGoal,
}