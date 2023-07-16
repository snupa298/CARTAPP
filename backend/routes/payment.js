const express = require('express')
const router = express.Router();

const {
    processPayment,
    sendStripApi
} = require('../controllers/paymentController')

const {verifyIsLoggedIn} = require("../middleware/verifyAuthToken")



router.use(verifyIsLoggedIn)

router.post('/payment/process',processPayment)
router.get('/stripeapi',sendStripApi)

module.exports = router;