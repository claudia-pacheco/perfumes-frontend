## Project 4: Cloud9 Scents ☁️

This is the fourth and last project associated with the General Assembly Software Engineering Flex course I’ve been taking for the past 24 weeks. I decided to go solo and develop a Full Stack app to showcase a perfume gallery where users can see and create fragrances. 

Deployed at [Cloud9 Scents](https://cloud9-scents.netlify.app/) <br>
Backend code can be found [here](https://github.com/claudia-pacheco/perfumes-backend)

#### Table of contents

1. How it works
2. Build
3. Styling
4. Challenges and Wins
5. Key Learnings
6. Future Improvements

## Tech stack

This time the backend was developed using Python with a Django REST framework that utilises a PostgreSQL database. As for the client side, I once again used React but decided to venture out with Material UI for the styling.
<br><br>
<img src="https://user-images.githubusercontent.com/94257616/173044002-ea5667ab-53dc-4e1b-b851-b9202dfdba81.png " height=50>
<img src="https://user-images.githubusercontent.com/94257616/173043802-63dd79da-42ee-4b41-9a3f-a2f38137e8f0.png" height=50>
<img src="https://user-images.githubusercontent.com/94257616/173043967-f49aad64-bac2-4e47-b08e-66a95c049c08.png" height=50>
<img src="https://user-images.githubusercontent.com/94257616/173044021-2ca35707-a9d7-4b58-8963-2cc22fad03c5.png" height=50>
<img src="https://user-images.githubusercontent.com/94257616/173043868-023592f3-d038-48ed-896c-1a852b982f4e.png" height=50>


## How it works

The concept of this project is to allow users to access it as their fragrance wardrobe where they can see any fragrance and even create their own fictional scent. This enables them to explore the perfume world in more depth by getting to know a variety of brands and notes of the scents.

## Build

Solo project | Timeframe: 2 weeks

### Planning
I started off with designing the relationship models I would use in my backend with [QuickDBD](https://app.quickdatabasediagrams.com/#/).

<img width="1000" alt="Screenshot 2022-05-04 at 13 24 38" src="https://user-images.githubusercontent.com/94257616/173052412-15ab1b7d-19ca-4fc7-b1aa-981309f2f4ee.png">

This really helped putting into perspective what models I would really need for the app and their one-to-one, many-to-one or many-to-many relationships. Although I stayed on track for most of it, I discarded the notes model as it didn't really need to be separate - I just put it down as a part of the Fragrance model. 
I also did not include the comments, should I have had more time this is something I would have liked to implement. 

In terms of wwireframing, I used excalidraw to visualise what my App would roughly look like.

<img src="https://user-images.githubusercontent.com/94257616/173053525-d5276e47-876e-4a04-bede-bc1fb4011dd4.png" width="700">

Planning didn't take that long, however the original idea I had in mind was for the app to be a perfume gallery where fragrances are displayed. As I was doing the models relationships and wireframing, I realised I didn't really have any functionality between them. Therefore, I had to slightly adjust to concept and allow users to create their own scents too. This way I would be able to explore relationships between at least 2 models.

### Development 

#### Backend

Compared to my previous project, using Django framework for the backend was quite challenging. It definitely has a higher complexity and I did struggle at times. I spent 90% of the profect time on my Backend as I kept on having challenges. I finally implemented basic permissions and authorisation for instance, to check whether the user logged in is the creator of that specific fragrance in order to amend it.

This was done by implementing a ```creator foreign key``` to the ```Perfume model```. 

<img width="604" alt="Screenshot 2022-06-10 at 12 55 25" src="https://user-images.githubusercontent.com/94257616/173059689-34fd4ebb-1f0a-4669-83d0-6c88936f41d6.png">

I grabbed the ```request.user``` to get the id of the user logged in and assigned it to the ```perfume.creator```. After saving it, that specific perfume would have been created by that specific user.

<img width="421" alt="Screenshot 2022-06-10 at 12 54 48" src="https://user-images.githubusercontent.com/94257616/173059720-0ac181d5-2c36-4694-8cd7-e9d190a1c10b.png">

Back in ```permissions.py```, my app undertakes a check to confirm the identity of the user. If they are the creator of the fragrance, they will be able to amend it. Once again, this is done by comparing the ```request.user``` to the ```perfume.creator```.

<img width="481" alt="Screenshot 2022-06-10 at 12 55 10" src="https://user-images.githubusercontent.com/94257616/173059703-97c74129-f79a-424c-9646-53f073ea25ca.png">

#### Frontend

As most part of the time was spent on Backend, I was left with quite a time restraint to create the client interface. I started off with the Login and Register pages.
When the user tries to register, their data is grabbed by the form data and added to the database through a POST request. 

<img width="456" alt="Screenshot 2022-06-10 at 13 10 27" src="https://user-images.githubusercontent.com/94257616/173062032-ede6b6e2-5a94-459e-a5ea-df23b6aa64d1.png">

Once they are successfully registered, they will be taken to the Login portal.

<img width="620" alt="Screenshot 2022-06-10 at 13 11 23" src="https://user-images.githubusercontent.com/94257616/173062108-74fa0793-0bbc-402b-a4ce-349f0faf66a4.png">

The app performs a post request to the ```api/token``` endpoint where they can obtain a JWT token to access all the features that require authorisation, by doing this we are able to authenticate the user. This gets stored in ```LocalStorage``` so it is easily accessible.

## Styling 

With all my previous projects, I have been using classic CSS therefore I wanted to challenge myself and use a styling library this time. Learning a new styling library can be quite time consuming to get the ins and outs of how it works, nonetheless I decided to go for it and chose MaterialUI.
I didn't really spend too much time looking at the docs on how to use it, I sort of learnt it as I went along and according to what features I wanted to implement.

I felt like I needed a break from coding logic and I'm normally quite confident in it so I decided to start working on the styling. After playing around with it for a while, I was really proud of the Login and Register pages as well as the Homepage.

<img width="900" src="https://user-images.githubusercontent.com/94257616/173064110-89e9f37e-b5ab-48ea-9060-306d9ceffb46.png">
<img width="900" src="https://user-images.githubusercontent.com/94257616/173063914-d62da600-738e-4a28-bedb-a73a014f05e6.png">
<img width="900" src="https://user-images.githubusercontent.com/94257616/173064001-599bd045-8623-4385-9df1-d4f36890ca7d.png">


Initially I struggled how to style components and what the termininology for each is but soon it all made sense. I used the ```withRoot``` component which applies the same styling to the whole page without having to recode it.

This can be easily done by wrapping the specific component around ```withRoot()``` eg:

<img width="259" alt="Screenshot 2022-06-10 at 13 32 38" src="https://user-images.githubusercontent.com/94257616/173064937-51100d14-0f27-463a-977d-7ef1bb77ca8b.png">

## Challenges and Wins

This time around I found the challenge and wins were quite 50-50. Definitely found the Django framework quite complex compared to previous ones I have used. On a brighter note, I am very pleased with the styling achieved in such little amount of time. 

## Key Learnings

One of the major key learnings I will take from this project is definitely not spending an unreasonable amount of time dwelling on bugs and rather move on and take a break. I should have split my time wisely so I would complete all the functionality I intended. As it stands now, my project didn't meet all the functionality I once had in mind when planning. It can be quite challenging to meet all these expectations in such a short timeframe. Would I have allowed more time for my Frontend, I would've got a lot more logic done.

However, I also challenged myself to learn last minute a styling library which is quite complex and succeeded. Working with one on this project was one of my goals and the end result is very pleasing. I tend to focus more in JavaScript/React coding rather than Styling, so this was a change.

## Future Improvements

Features to add:
- Individual perfume page
- Comments section on each perfume
- Individual profile page

Bugs to be fixed:
- Fetching information of an individual Perfume in order to open an individual page based on the ID clicked
- IsPremium permission to allow users to create more than 1 scent
