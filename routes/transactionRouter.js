
const router = require("express").Router();
const transactionController = require("../controllers/transactionController.js");
const userController = require("../controllers/userController.js");
const authUser = require("../middleware/authUser.js");

// POST - Create a new transaction

router.post("/", authUser, async (req, res) => {
    try {
        const data = req.body;
        let transaction = '';
        // To avoid request 10000 transactions, 
        // user transactions are created also in an array at the same model
        transaction = await transactionController.createTransaction(data);
        let userTransaction = '';
        if (transaction) {
            userTransaction = await userController.createTransaction(transaction);
        }
        await res.json({ transaction, userTransaction });
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
});

// GET - Return all transactions history in the database.

router.post("/all", authUser, async (req, res) => {
    try {
        const data = req.body;
        res.json(await transactionController.findAllTransactions(data));
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
});

// POST - Find all transactions by user

router.post("/user", authUser, async (req, res) => {
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

router.post("/received", authUser, async (req, res) => {
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

router.post("/sent", authUser, async (req, res) => {
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