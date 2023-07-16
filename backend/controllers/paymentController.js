// const stripe=require('stripe')(process.env.STRIPE_SECRET_KEY)


// // Process stripe payments  
// const processPayment=async(req,res,next)=>{
//     try{
//         const paymentIntent = await stripe.paymentIntents.create({
//             amount: req.body.amount,
//             currency: 'usd',
    
//             metadata: { integration_check: 'accept_a_payment' }
//         });
    
//         res.status(200).json({
//             success: true,
//             client_secret: paymentIntent.client_secret
//         })
//     }
//     catch (err) {
//         next(err)
//     }
// }


// // Send stripe API Key   =>   /api/v1/stripeapi
// const sendStripApi = async (req, res, next) => {
// try{
//     res.status(200).json({
//         stripeApiKey: process.env.STRIPE_API_KEY
//     })
// }
// catch (err) {
//     next(err)
// }

// }

// module.exports={processPayment,sendStripApi}