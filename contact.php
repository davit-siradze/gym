<?php 
    $result = "";
    $error  = "";
if(isset($_POST['submit']))
{
    require 'phpmailer/PHPMailerAutoload.php';
    $mail = new PHPMailer;
    //smtp settings
    $mail->isSMTP(); // send as HTML
    $mail->Host = "smtp.gmail.com"; // SMTP servers
    $mail->SMTPAuth = true; // turn on SMTP authentication
    $mail->Username = "ambrstorm@gmail.com"; // Your mail
    $mail->Password = 'masachusesi'; // Your password mail
    $mail->Port = 587; //specify SMTP Port
    $mail->SMTPSecure = 'tls';                             
    $mail->setFrom($_POST['email'],$_POST['name']);
    $mail->addAddress('ambrstorm@gmail.com');
    $mail->addReplyTo($_POST['email'],$_POST['name']);
    $mail->isHTML(true);
    $mail->Subject='Form AmbriOfficial:' .$_POST['subject'];
    $mail->Body='<h3>Name :'.$_POST['name'].'<br> Email: '.$_POST['email'].'<br>Message: '.$_POST['message'].'</h3>';
    if(!$mail->send())
    {
        $error = "oOps, რაღაც შეცდომა.";
    }
    else 
    {
        $result="გმადლობთ\t" .$_POST['name']. " კონტაქტისთვის.";
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Contact Form</title>
<link rel="preconnect" href="https://fonts.gstatic.com">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
<link href="https://fonts.googleapis.com/css2?family=Raleway:wght@200&display=swap" rel="stylesheet">
<link rel="stylesheet" href="css/stylephp.css">
<link rel="stylesheet" href="css/style.css">
<link rel="stylesheet" href="css/responsive.css">
<link rel="stylesheet" href="css/none.css">
<script src="https://kit.fontawesome.com/97ad557998.js" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.0.2/TweenMax.min.js"></script>
<link href="https://fonts.googleapis.com/css2?family=Raleway:wght@200&display=swap" rel="stylesheet">
</head>
<body>
<!--  Header -->
<header>
        <div class="changelang">
            <div class="geo">
                <a class="geoa" style="text-decoration:none; font-family: 'Raleway', sans-serif;" href="ka/geo.html">
                    Geo
                </a>
            </div>
            <div class="eng">
                <a class="enga active"style="text-decoration:none; font-family: 'Raleway', sans-serif;" href="#">
                    Eng
                </a>
            </div>
        </div>
        <div class="logo">
            <a href="index.html" style="text-decoration:none; font-family: 'Raleway', sans-serif;" >Ambri <span>Official</span></a>
        </div>
        <div class="men">
            <div class="phpmenu">
                <nav class="navbar">
                    <div class="hamburger-menu">
                        <div class="line line-1"></div>
                        <div class="line line-2"></div>
                        <div class="line line-3"></div>
                    </div>
                    <ul class="nav-list">
                        <li class="nav-item">
                            <a href="index.html" style="text-decoration: none;" class="nav-link">Home</a>
                        </li>
                        <li class="nav-item">
                            <a href="about.html" style="text-decoration: none;" class="nav-link">About Us</a>
                        </li>
                         <li class="nav-item">
                            <a href="practice.html" style="text-decoration: none;" class="nav-link">Practice</a>
                        </li>
                        <li class="nav-item">
                            <a href="#" style="text-decoration: none;" class="nav-link">Contact</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
        <div class="socialleft">
           <a href="#"><i class="fab fa-facebook-f"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
           <a href=""><i class="fab fa-youtube"></i></a>
        </div>
    </header>
    <!-- Header End -->
    <!-- Contact Form -->

    <div class="container" style=" opacity:1;     transform: translate(-50%, -50%); width:100%;">
        <div class="row1">
            <div class="col-md-8 col-md-offset-2 m-auto">
                <div class="contact-form">
                    <h1 class="contacth1" style="font-family: 'Raleway', sans-serif; color:#fff;">Contact</h1>
                    <h2 class="text-center text-white" style="font-family: 'Raleway', sans-serif; color:#fff; margin-bottom:15px;"> <?=$result; ?></h2>
                    <h2 class="text-center text-danger" style="font-family: 'Raleway', sans-serif; color:#fff; margin-bottom:15px;"> <?=$error; ?></h2>
                    <form action="" method="post">
                        <div class="row">
                            <div class="col-sm-6">
                                <div class="form-group">
                                    <label for="inputName" style="font-family: 'Raleway', sans-serif; color:#fff; margin-bottom:10px;">Name</label>
                                    <input type="text" class="form-control" id="Name" name="name" placeholder="Enter Full" style="text-decoration:none; font-family: 'Raleway', sans-serif;" required>
                                </div>
                            </div>
                            <div class="col-sm-6">
                            <div class="form-group">
                                <label for="inputEmail" style="font-family: 'Raleway', sans-serif; color:#fff; margin-bottom:10px;">Email</label>
                                <input type="email" class="form-control" id="Email" name="email" style="text-decoration:none; font-family: 'Raleway', sans-serif;" placeholder="Enter Email" required>
                            </div>
                        </div>
                    </div>            
                    <div class="form-group">
                        <label for="inputSubject" style="font-family: 'Raleway', sans-serif; color:#fff; margin-bottom:10px;">Subject</label>
                        <input type="text" class="form-control" id="Subject"​ name="subject" style="text-decoration:none; font-family: 'Raleway', sans-serif;" placeholder="Enter Subject" required>
                    </div>
                    <div class="form-group">
                        <label for="inputMessage" style="font-family: 'Raleway', sans-serif; color:#fff; margin-bottom:10px;">Message</label>
                        <textarea class="form-control" id="Message" name="message" rows="5" style="text-decoration:none; font-family: 'Raleway', sans-serif;" placeholder="Enter Message..." required></textarea>
                    </div>
                    <div class="text-center" style="font-family: 'Raleway', sans-serif; color:#fff; margin-bottom:10px;">
                        <button type="submit" name="submit" class="btn btn-primary"><i class="fa fa-paper-plane"></i> Send</button>
                    </div>            
                </form>
            </div>
        </div>
    </div>
</div>
<script src="js/script.js"></script>
<script>
TweenMax.from(".row1", 2.3, {
      delay: 2.4,
      opacity:0,
      y:20,
      ease: Power0.easeNone
  });

</script>
</body>
</html>              
