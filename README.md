<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Rent-Tech Products - README</title>
  <style>
    body {
      font-family: sans-serif;
      margin: 0;
      padding: 20px;
    }
    h1, h2, h3 {
      margin: 10px 0;
    }
    img {
      max-width: 100%;
      height: auto;
      margin-bottom: 10px;
    }

    /* Responsive image container */
    .image-container {
      display: flex;
      flex-wrap: wrap; /* Wrap images to the next line on smaller screens */
      justify-content: space-between; /* Evenly distribute images horizontally */
      margin-bottom: 10px; /* Add margin for spacing */
    }

    /* Image styling for desktop (larger screens) */
    @media screen and (min-width: 768px) {
      .image-container {
        width: 50%; /* Display two images side-by-side on desktop */
      }
      .image-container img {
        width: 48%; /* Adjust image width slightly to account for spacing */
      }
    }

    /* Image styling for mobile (smaller screens) */
    @media screen and (max-width: 767px) {
      .image-container {
        width: 100%; /* Display one image per row on mobile */
      }
      .image-container img {
        width: 100%; /* Make image fill the full width on mobile */
      }
    }
  </style>
</head>
<body>
  <h2>Screenshots</h2>

  <div class="image-container">
    <img src="screenshots/home.png" alt="Home Screen">
    <img src="screenshots/home_after.png" alt="Home After Login">
  </div>

  <div class="image-container">
    <img src="screenshots/home2.png" alt="Home Screen ">
    <img src="screenshots/home3.png" alt="Home Screen">
  </div>

  <div class="image-container">
    <img src="screenshots/about.png" alt="About screen ">
    <img src="screenshots/login.png" alt="Login Successfully">
  </div>

  <div class="image-container">
    <img src="screenshots/register.png" alt="Register screen ">
    <img src="screenshots/registration_success.png" alt="Registered Successfully">
  </div>

  <div class="image-container">
    <img src="screenshots/products.png" alt="Products Screen">
    <img src="screenshots/cart.png" alt="Cart Screen">
  </div>

  <div class="image-container">
    <img src="screenshots/checkout.png" alt="Invoice screen ">
    <img src="screenshots/print.png" alt="Print Screen">
  </div>

 <div class="image-container">
    <img src="screenshots/blog.png" alt="About screen ">
    <img src="screenshots/contact.png" alt="Contact Screen">
  </div>

  </body>
</html>
