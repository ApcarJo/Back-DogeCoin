
const router = require('express').Router();

const transactionsRouter = require('./routes/transactionRouter.js');
const loginRouter = require('./routes/loginRouter');
const userRouter = require('./routes/userRouter');

router.use('/transactions', transactionsRouter);
router.use('/login', loginRouter);
router.use('/user', userRouter);

module.exports = router;