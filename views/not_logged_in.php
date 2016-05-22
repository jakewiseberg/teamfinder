<?php
// show potential errors / feedback (from login object)
if (isset($login)) {
  if ($login->errors) {
    foreach ($login->errors as $error) {
      echo $error;
    }
  }
  if ($login->messages) {
    foreach ($login->messages as $message) {
      echo $message;
    }
  }
}
?>
<html>
<head>
  <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
</head>
<body>
  <div id="container" class="container">
    <br><br><br>
    <div class="row">
      <div class="col-md-2"></div>
      <div class="col-md-8  text-center">
        <!-- login form box -->
        <form method="post" action="index.php" name="loginform">
          <div class="form-group">
            <label for="login_input_username">Username</label>
            <input id="login_input_username" class="login_input form-control" type="text" name="user_name" required />
          </div>
          <div class="form-group">
            <label for="login_input_password">Password</label>
            <input id="login_input_password" class="login_input form-control" type="password" name="user_password" autocomplete="off" required />
          </div>
          <button type="submit" class="btn btn-default" name="login">Login</button>
        </form>
        <a href="register.php">Register new account</a>
      </div>
      <div class="col-md-2"></div>
    </div>
  </div>
</body>
</html>
