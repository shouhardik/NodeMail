const nodemailer=require('nodemailer')

const transporter=nodemailer.createTransport({
    service:"hotmail",
    auth:{
        user:"shomsaha77@outlook.com",
        pass:""
    }
})

const options={
    from :"shomsaha77@outlook.com",
    to:"shouhardiksaha@gmail.com",
    subject:"Sending email with node.js",
    text:"Hi! , this is an email from outlook to gmail"
}

transporter.sendMail(options,(err,info)=>{
  if(err){
      console.log(err);
      return;
  }
  console.log("Sent :"+info.response);
})
