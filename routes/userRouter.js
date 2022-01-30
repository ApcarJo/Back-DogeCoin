
const router = require("express").Router();
const userController = require("../controllers/userController.js");
const authUser = require("../middleware/authUser.js");


// POST - Create a new user

router.post("/",  async(req, res) => {
    try {
        const data = req.body;
        res.json(await userController.createUser(data));
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
});

// GET - Return all Users in the database.

router.get("/", async(req, res) => {
    try {
        res.json(await userController.findAllUsers());
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
});

// POST - Find user by id

router.post("/user", authUser, async(req, res) => {
    try {
        const id = req.body.id;
        res.json(await userController.findById(id));
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
});

// POST - Find all transactions received

router.post("/user", authUser, async(req, res) => {
    try {
        const body = req.body;
        res.json(await userController.findReceived(body));
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
});

// POST - Find all transactions sent

router.post("/user", authUser, async(req, res) => {
    try {
        const body = req.body.user;
        res.json(await userController.findSent(body));
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
});

module.exports = router;