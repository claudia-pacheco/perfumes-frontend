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

Compared to my previous project, using Django framework for the backend was quite challenging. It definitely has a higher complexity and I did struggle at time. I implemented basic permissions and authorisation for instance, to check whether the user logged in is the creator of that specific fragrance in order to amend it.

This was done by implementing a ```creator foreign key``` to the ```Perfume model```. 

<img width="604" alt="Screenshot 2022-06-10 at 12 55 25" src="https://user-images.githubusercontent.com/94257616/173059689-34fd4ebb-1f0a-4669-83d0-6c88936f41d6.png">

I grabbed the ```request.user``` to get the id of the user logged in and assigned it to the ```perfume.creator```. After saving it, that specific perfume would have been created by that specific user.

<img width="421" alt="Screenshot 2022-06-10 at 12 54 48" src="https://user-images.githubusercontent.com/94257616/173059720-0ac181d5-2c36-4694-8cd7-e9d190a1c10b.png">

Back in ```permissions.py```, my app undertakes a check to confirm the identity of the user. If they are the creator of the fragrance, they will be able to amend it. Once again, this is done by comparing the ```request.user``` to the ```perfume.creator```.

<img width="481" alt="Screenshot 2022-06-10 at 12 55 10" src="https://user-images.githubusercontent.com/94257616/173059703-97c74129-f79a-424c-9646-53f073ea25ca.png">



## Styling 

## Challenges and Wins

## Key Learnings

## Future Improvements
Stretch + bugs
