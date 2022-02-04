const sgMail = require('@sendgrid/mail')
 

// const sendgridAPIKey = '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'

//sgMail.setApiKey(sendgridAPIKey)
 sgMail.setApiKey(process.env.SENDGRID_API_KEY)
const sendWelcomeEmail = (email,name)=>{
    sgMail.send({
        to:email,
        from:'savitag5555@gmail.com',
        subject:'Thanks for joining in!',
        text:`Welcome to app, ${name}. Let me know how you get along with the app.`
    })

}
 const sendCancelationEmail= (email,name)=>{
     sgMail.send({
         to:email,
         from:'savitag5555@gmail.com',
         subject:'Sorry to see you go!',
         text:`Goodbye , ${name}. I hope to see you back sometime soon`
     })
 }

module.exports ={
    sendWelcomeEmail,
    sendCancelationEmail
}

