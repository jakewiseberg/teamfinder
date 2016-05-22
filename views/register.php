<?php
// show potential errors / feedback (from registration object)
if (isset($registration)) {
    if ($registration->errors) {
        foreach ($registration->errors as $error) {
            echo $error;
        }
    }
    if ($registration->messages) {
        foreach ($registration->messages as $message) {
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
        <form method="post" action="register.php" name="registerform">
          <div class="form-group">
            <label for="login_input_username">Username (only letters and numbers, 2 to 64 characters)</label>
            <input id="login_input_username" class="login_input form-control" type="text" pattern="[a-zA-Z0-9]{2,64}" name="user_name" required />
          </div>
          <div class="form-group">
            <label for="login_input_email">User's email</label>
            <input id="login_input_email" class="login_input form-control" type="email" name="user_email" required />
          </div>
          <div class="form-group">
            <label for="login_input_password_new">Password (min. 6 characters)</label>
            <input id="login_input_password_new" class="login_input form-control" type="password" name="user_password_new" pattern=".{6,}" required autocomplete="off" />
          </div>
          <div class="form-group">
            <label for="login_input_password_repeat">Repeat password</label>
            <input id="login_input_password_repeat" class="login_input form-control" type="password" name="user_password_repeat" pattern=".{6,}" required autocomplete="off" />
          </div>
          <button type="submit" class="btn btn-default" name="Register">Login</button>
        </form>
        <a href="login.php">Already have an account? Log in here</a>
      </div>
      <div class="col-md-2"></div>
    </div>
  </div>
</body>
</html>
