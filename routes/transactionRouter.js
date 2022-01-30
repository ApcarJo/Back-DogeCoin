
const router = require("express").Router();
const transactionController = require("../controllers/transactionController.js");
const authUser = require("../middleware/authUser.js");

// POST - Create a new transaction

router.post("/", authUser, async(req, res) => {
    try {
        const data = req.body;
        res.json(await transactionController.createTransaction(data));
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
});

// GET - Return all transactions history in the database.

router.get("/", authUser, async(req, res) => {
    try {
        res.json(await transactionController.findAllTransactions());
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
});

// POST - Find all transactions by user

router.post("/user", authUser, async(req, res) => {
    try {
        const id = req.body.user;
        res.json(await transactionController.findByUser(id));
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
});

// POST - Find all transactions received

router.post("/received", authUser, async(req, res) => {
    try {
        const id = req.body.id;
        res.json(await transactionController.findReceived(id));
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
});

// POST - Find all transactions sent

router.post("/sent", authUser, async(req, res) => {
    try {
        const id = req.body.id;
        res.json(await transactionController.findSent(id));
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
});

module.exports = router;