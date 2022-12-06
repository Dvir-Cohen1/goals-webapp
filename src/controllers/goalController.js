import goalService from '../services/goalService.js'

// #Goals

const getNewGoalPage = (req,res) => {
     res.status(202).render('pages/new_goal');
}
const getGoals = (req, res) => {
     const goals = goalService.getAllGoals();
     // console.log(goals)
     res.render('pages/goals_list', goals);
}
const deleteGoals = (req, res) => {
     goalService.deleteAllGoals();
     res.redirect('/goals');
}

// #Goal
const getGoal = (req, res) => {
     if (!req) {
          res.status(202).render('/goals/*')
     }
     const goal = goalService.getSingleGoal(req)
     res.render('pages/goal', goal)
}

// ====================================
const createGoal = (req, res) => {
     if (
          !req.body.title ||
          !req.body.subTitle ||
          !req.body.content ||
          !req.body.priority 
     ) {
          return res
               .status(418)
               .json({ status: "FAILED", message: "Missing goal information" });
     }
     const goal = goalService.createSingleGoal(req)
     res.redirect(`/goals/goal/${goal}`)
}


const getEditGoalPage = (req, res) => {
     const goal = goalService.getSingleGoal(req)
     res.render('pages/edit_goal', goal)
}
const editGoal = (req, res) => {
     goalService.editSingleGoal(req)
     const goal = goalService.getSingleGoal(req)
     res.redirect(`/goals/goal/${goal.id}`)
}


const deleteGoal = (req, res) => {
     goalService.deleteSingleGoal(req)
     res.redirect('/goals');
}


export default {
     getNewGoalPage,
     getGoals,
     deleteGoals,
     getGoal,
     createGoal,
     getEditGoalPage,
     editGoal,
     deleteGoal
}