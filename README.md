
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

# Live Project Link 

Click here to check the hosted website - [Hosted Link](https://ttt-frontend-assignment-vivek.vercel.app/)

## Library Used

### React 

I chose React for its component-based architecture, as it allows me to break down my project into reusable building blocks.
You make different parts(components) and put them together. It's quick because you don't repeat the same work. 
This reusability not only makes development faster but also more efficient. 

React's Virtual DOM and reconciliation algorithms ensure speedy updates. The Virtual DOM acts like a blueprint, optimizing changes, while reconciliation efficiently updates only what's needed. Hooks streamline state management, simplifying development. Together, these features make React a powerhouse for creating fast, responsive, and maintainable user interfaces.

And also after all these if i get stuck somewhere, React also has a smart big group of friends (community) online to help out.

### Tailwind CSS for Responsive interface

A responsive interface is a design approach that ensures a website or application can automatically adjust its layout, content, and functionality to provide an optimal viewing and interaction experience across a wide range of devices and screen sizes.

I used "Tailwind-CSS", Tailwind CSS is a utility-first CSS framework, it provides a set of utility classes that we can apply directly to HTML elements for styling purpose. Apart from that, Tailwind only includes the styles you use. This means your project's bundle size is minimal, contributing to faster loading times.

To apply styles conditionally based on screen size breakpoints in tailwind-css, we use ->  sm: for small screens, md: for medium screens, lg: for large screens.

Thus this project has resulted in a responsive interface for all screen sizes which efficiently developed user interface that enhances the overall user experience

## Features Asked

### For rendering a profile screen 

For maintaining the code readibility , understading of code I made different folder with standard naming convention for maintaining each requirement of code.

1- Assets ->  This folder holds images, svgs, fonts, and other static files, that keeps project media organized for easy access and maintenance.

2- Components ->  This folder keeps all the section and  reusable parts of the website. Helps me(user) to understand and manage the different pieces of my project easily.

3- Utils ->  It keeps handy tools and helpers that promotes code reusability and readability, centralizing common functionalities.

4- Data.json -> The JSON file capture information about various entities in a structured and easy-to-access manner.
The hierarchical structure of a JSON file is composed of key-value pairs, where each key is unique and maps to a specific value. These value can be a simple data type like a number or string, or a complex data type like an array or another JSON object.

### App Architecture 

For creating the given sample profile, I need three main section/components -> header, Profile , Post.

1- Header.js -> The Header component represents the header section of a webpage. It displays a logo, and title in the left section includes a separator line and a "Courses" button on the right. 

2- Profile.js ->  In the Profile.js component, I've implemented a modular and well-organized approach to showcase a user's profile. Aligning with React development best practices, I divided component into three smaller parts, each focusing on specific jobs. This helps make the code easy to read, lets us reuse parts of it in different places, enhances scalability and maintainability. For each profile, I am also rendering the Post component withing profile so that each profile has its associated post with it.

- a: The Profile component efficiently organizes and presents a user's profile. The component begins by mapping over profile data, ensuring flexibility for multiple profiles. Then, it arranges details such as a cover image, profile picture, name, and follower counts and Profile stats, I am passing values to these child components (Name, FollowerCount, and ProfileStats) using props. This mechanism allows to send data from the parent component (Profile) to its children and each part of my profile gets the information it needs, and also making everything more organized and easy to manage. In styling purpose,the use of flex containers ensures a neat arrangement of the profile image, user's name, follower counts and profile stats.

- b: The Name component is designed to display a user's name dynamically. It takes the user's name as a prop and uses a flex container to arrange the name along with a purple diamond icon and a verification icon in a visually appealing layout. 

- c: The FollowerCount component efficiently encapsulates the structure for displaying follower counts. It takes two props, count and heading, representing the numerical count and a descriptive heading.

" The decision to create this component generate from the need to reuse the same format for displaying both followers and following counts. By encapsulating this structure in the FollowerCount component,I achieve a modular and DRY (Don't Repeat Yourself) approach, allowing the same component to be easily reused for various counts throughout the application. "

- d: The ProfileStats component showcase various statistics icons, each accompanied by their respective counts. 

The component employs React's " useState " hook to manage the dynamic state of statistics. The initial values are derived from local storage, ensuring persistence across page refreshes and in the absence of stored data, default values are used. 

The handleIconClick function is responsible for incrementing the counts when an icon is clicked and also updating both the component's state and local storage. To synchronize the local storage with the component's state and ensure data persistence, the " useEffect " hook is utilized. It triggers the storage update whenever there's a change in the counts.

- e: The Post component, have two props. The posts prop is being set to the posts array of the current profile. This allows the Post component to access and display the posts associated with the current profile. 
  
The profile prop is being set to the entire profile object. This can be useful for the Post component if it needs additional information about the profile while rendering the posts.


3- Post.js -> The Post component  receives two props - posts and profile. 
The component uses the useState hook to manage the isSmallScreen state, which is initially set based on the window width. 
The "useEffect" hook sets up an event listener for  dynamically adjusting to changes in the window size. When the window is resized, the handleResize function is triggered, updating the isSmallScreen state based on the window width. and then cleanup function ensures the removal of the event listener to avoid memory leaks when the component is unmounted. 

For each post,I am rendering a div containing the post heading, a like icon, the post content (using the renderContent function), and information such as post type, author, date, read time, and views count.

The renderContent function takes a post and  smallScreen as boolean value and uses a switch statement to determine how to render the content based on the post type. 

### Helper.js

By breaking down functionality into separate helper functions, you can reuse them across different components or contexts in your application and also promoting a clean and modular code structure.

- a: formattedCount Function: This function is used to format numerical counts, If the input count is greater than or equal to 1000, it divides the count by 1000, rounds the result to one decimal place using toFixed(1), and appends "k" to represent thousands.

- b: formatProfileName Function: This function is used to format profile names as we required name in this format while posting. It first converts the input name to lowercase using toLowerCase() then removes spaces from the lowercase name using the regular expression.

Below three helper function are for rendering each post in desired way as a sample profile has. 

- c: renderThoughtContent Function: this function first Splits the input content into the first sentence and then the remaining content using split("."). After that it joins the remaining content with line breaks for better readability.

- d: renderListContent Function: this function first replaces hyphens followed by spaces with line breaks  then Splits the formatted content into an array of list items using split new line then maps over the list items, trimming each item and rendering it as a list item.
  
- e: truncateContent Function: it splits the input content into an array of words using split. 
If the number of words is greater than the specified wordLimit, it slices the array up to the limit, joins the words with spaces, and appends an ellipsis(...).

## Hosting it on public cloud

I chose to host my application on Vercel, a popular cloud hosting platform for web applications. The reason behind choosing this platfrom is that Vercel is easy to use and the deployment process is straightforward, and it's incredibly fast to get your application up and running. It allowed me to focus on delivering a great user experience.

The link for my project is :- [clickk here !!](https://ttt-frontend-assignment-vivek.vercel.app/)

## My project images for all screen sizes.












