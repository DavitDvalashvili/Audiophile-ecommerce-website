# Photosnap-multi-page-website

### Table of Contents

- [Prerequisites](#Prerequisites)
- [Tech Stack](#Tech-Stack)
- [Screenshot](#Screenshot)
- [Getting Started](#Getting-Started)
- [Build with](#Build-With)
- [Project Structure](#Project-Structure)
- [Deployment](#Deployment)
- [Author](#Author)

### Prerequisites

- <img src="public/readme/npm.png" width="25" style="top: 8px" /> _npm @8 and up_
- <img src="public/readme/vite.jpg" width="25" style="top: 8px" /> _vite @4.0.0_
- <img src="public/readme/typescript.png" width="25" style="top: 8px" /> _typescript @4.9.3_

#

### Tech Stack

- <img src="public/readme/react.png" width="25" style="top: 8px" /> _React @18.2.0 - front-end framework_
- <img src="public/readme/styled-components.png" width="25" style="top: 8px" /> _Styled-components @5.3.6 - visual primitives for the component age_
- <img src="public/readme/router.png" width="25" style="top: 8px" /> _React Router @6.6.1 - React library for routing_
- <img src="public/readme/helmet.jpg" width="25" style="top: 8px" /> _React Helmet @6.1.0 - library for write code in head from JSX_

### Interaction

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Add/Remove products from the cart
- Edit product quantities in the cart
- Fill in all fields in the checkout
- Receive form validations if fields are missed or incorrect during checkout
- See correct checkout totals depending on the products in the cart
  - Shipping always adds $50 to the order
  - VAT is calculated as 20% of the product total, excluding shipping
- See an order confirmation modal after checking out with an order summary

### Screenshot

![](./public/preview.jpg)

### Links

- Solution URL: [Add solution URL here](https://github.com/DavitDvalashvili/Audiophile-ecommerce-website)
- Live Site URL: [Add live site URL here](https://audiophile-ecommerce-website-lake.vercel.app/)

### Getting Started

1. First of all you need to clone app repository from github:

```
git clone https://github.com/DavitDvalashvili/Audiophile-ecommerce-website.git
```

2. Next step requires install all the dependencies.

```
npm install
```

3. To see project in action

```
npm run dev
```

# Build-with

- React Javascript library;
- Styled Components for styling;
- React router;
- Typescript;
- React Hook form;
- React Helmet;
- Vite;

### Project Structure

|--- src
|---|---| components #components
|---|---| hooks # custom hook
|---|---| type.tsx # type declaration
|---|---|---| functional components
|---|---|---|---| pages #reuseable components
|---|---|---| style components #reuseAble style components
|---|---|---|---| pages # styled components for pages
|---|---|---|---| defaultTheme.tsx # default color

```

- package.json # dependency manager configurations
- data.json # needful data for project;
- package.json # dependency manager configurations;
- vite.config.js # fast build tool;

```

### Deployment

Before every deployment you need to create build file.

```

npm run build

after this you can use this file to deploy project on server.

#

### Author

- Github profile - [Add your name here](https://github.com/DavitDvalashvili)
- Linkedin profile - [Add your name here](https://www.linkedin.com/in/davit-dvalashvili-0421b6253)
- Email - [@your_username](davitdvalashvili1996@gmail.com)
```
