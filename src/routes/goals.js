//  Express
import express from 'express';
import fileUpload from 'express-fileupload';
import goalController from '../controllers/goalController.js'


const router = express.Router();
router.use(fileUpload());


// New goal page
router.get("/newGoal", goalController.getNewGoalPage)
// Edit goal
router.get("/editGoal/:id", goalController.getEditGoalPage)

// goal 
router
     // All goals
     .get("/", goalController.getGoals)
     .post("/", goalController.deleteGoals)

     // Single goal
     .get("/goal/:id", goalController.getGoal)
     .post("/goal", goalController.createGoal)
     .put("/goal/:id", goalController.editGoal)
     .delete("/goal/:id", goalController.deleteGoal)

export default router;
