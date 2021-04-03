const sgMail = require('@sendgrid/mail')
const sendgridAPIKEY='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'

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email,name)=>{
    sgMail.send({
        to:email,
        from:'arunbhandari7251@gmail.com',
        subject: 'Thank for joining in ',
        text : `Welcome to the app, ${name}. Let me know how you get along with the app.`,
 
    })
}

const sendCancelationEmail= (email,name)=>{
    sgMail.send({
        to:email,
        from:'arunbhandari7251@gmail.com',
        subject: 'Sorry to see you go ',
        text : `Good bye ${name}. I hope to see you soon.`,
 
    })
}
module.exports={
    sendWelcomeEmail, sendCancelationEmail
    
}