# Welcome to the LocalToMe!
<div align= "center">
<img width="230" alt="logo@2x" src="https://user-images.githubusercontent.com/91308007/199421516-713244cb-2a3a-4907-b43b-e1f5b2a980a4.svg">
</div>

## The Problem
Provide easier access to local resources for the low-income and food insecure population.

💅✨ : [Figma](https://www.figma.com/file/i6QYurksfcfo4QrhNuYZJy/LocalToMe?node-id=0%3A1)


:globe_with_meridians: :rocket: : [Web App](https://localtome.vercel.app/)

## Table of contents
1. [What is LocalToMe](#what-is-localtome)
2. [Main Features](#main-features)
3. [Technologies Used](#technologies-used)
4. [Challenges](#challenges)
5. [Additional Fatures](#additional-features)
6. [How To Run](#how-to-run)
7. [Credits](#credits)

## <a name='what-is-localtome'/>What is LocalToMe?

**LocalToMe is a web app that locates and provides low-income families/individuals with free or accessible food resources near their area within their budgets.**

Due to the recent effects of inflation and the pandemic, many low-income families/individuals faced the unaffordability of basic necessities and unstable living conditions. Assist programs and government resources are there to help families in times of need, however, navigating all the information can be difficult to understand and take action. Therefore, our purpose is to localize and simplify the process of getting aid. In our app, users can find all the available resources near them along with resource's contacts, opening hours, requirements, services and contacts. In addition, users can navigate and discover events, news, and updates from big non-profit organizations, local food drives, and individuals.

<img width="1595" alt="Screen Shot 2022-09-26 at 11 38 09 PM" src="https://user-images.githubusercontent.com/41124039/192451398-61456cb2-8ca7-4d3c-9195-5a7567d8a37d.png">
<br></br>

## <a name='main-features'/>Main Features

### Resources Map:
* Allow users to find specific food assistance resources near their location 
* Provides accurate and important information caters to users' needs
<br>
<div align="center">
<img width="25%" alt="map1" src="https://user-images.githubusercontent.com/41124039/213036725-174fd9b7-95c3-4faf-b117-02da19fe0876.png">
<img width="25%" alt="map2" src="https://user-images.githubusercontent.com/41124039/213036724-2afcfa7e-15c7-4190-9622-a20baee5f8c2.png">
<img width="25%" alt="map3" src="https://user-images.githubusercontent.com/41124039/213036718-275bed49-b2b2-497b-8ba3-c7efd26120f2.png">
</div>

### Community Page:
* Discover events and news posted by the community 
* Host events or create a news post
<br>
<div align="center">
<img width="20%" alt="community1" src="https://user-images.githubusercontent.com/41124039/213036826-dc75880c-a734-4fc5-ae29-39390f72016c.png">
<img width="20%" alt="community4" src="https://user-images.githubusercontent.com/41124039/213036836-81f6e2a7-7c78-4ee6-97af-70ec63f542ed.png">
<img width="20%" alt="community2" src="https://user-images.githubusercontent.com/41124039/213036832-dae9b504-b97e-4eca-b5a3-d6e1178de67b.png">
<img width="20%" alt="community3" src="https://user-images.githubusercontent.com/41124039/213036833-103ee658-87b5-4c1a-8272-cddad87cb105.png">
</div>
<br>

### Favourites:
* Like or share to socials
* When logged in, users can ike locations and events which are saved in the favourites page for future reference
<br>
<div align="center">
<img width="25%" alt="favorite2" src="https://user-images.githubusercontent.com/41124039/213036948-cf6b7bb0-6f37-4947-9e59-db9e96fab9e9.png">
<img width="25%" alt="favorite1" src="https://user-images.githubusercontent.com/41124039/213036945-da0656f5-0a87-4520-9aaf-f189c482e881.png">
<img width="25%" alt="favorite3" src="https://user-images.githubusercontent.com/41124039/213036951-386d64d7-e505-4438-b8c5-ee8db5d09f28.png">
</div>
<br>

### Custom Profile:
* Select a cute mascot or upload your own profile photo
* See your own created events and news
<br>
<div align="center">
<img width="25%" alt="profile1" src="https://user-images.githubusercontent.com/41124039/213037013-99a61f6a-c7a8-47c8-ac8b-78529b0bc8f3.png">
<img width="25%" alt="profile2" src="https://user-images.githubusercontent.com/41124039/213037014-c5883b7f-aec3-4286-a14b-6dd051feb595.png">
<img width="25%" alt="profile3" src="https://user-images.githubusercontent.com/41124039/213037018-83996f00-0fff-449d-876a-fde49124de35.png">
</div>
<br>

## <a name='technologies-used'/>Technologies Used
add badges or logos:
React, Next.js, Firebase, Styled Components, Storybook, Vercel

## <a name='challenges'/>Challenges
### Difficulty getting food banks to work with us:
Food banks are very busy and a majority of their workers consist of volunteers. Getting in contact with someone in the organization or anyone with experience with the food bank system was hard. We wanted more insight into the real problems they face and to see if there were any gaps we could fill.

### Chosen database not optimal for the purpose:
We chose firebase initially because it was a technology we wanted to learn and found that it was very all inclusive in terms of services. However, we later found that the noSQL Realtime Database was probably the wrong option for the CRUD style application that we were building. Without proper foresight, updating the database got more complicated due to the lack of relationships, requiring various checks to perform certain tasks.

### Limitations of usage on the free tier of services:
Certain tools such as Algolia had more limited free teir services. For example, we can only show 20 items max in the event list in community. MapBox provided more free features however had a cap on the number of requests in a day.

### Time constraints:
This project was a interdiscplinary class in our third semester at BCIT with 3 Designers and 3 Developers in our team. We balanced other courses with this project and followed a strict schedule to research, design, and develop the idea, and demonstrated it in a final presentation at the end of the semester. We were able to quickly reach our MVP and complete many features, but still have additional polishing and ideas to explore.

## <a name='additional-features'/>Possible Additional Fatures
 - User survey upon registering to customize their experience
 - Verification system for events to prove legitimacy
 - Add to calendar
 - functionality for the settings page such as Color theme switcher
 - Food bank portal to update their own information on the fly

## <a name='how-to-run'/>How To Run
1. Install dependencies needed to run the project

```sh
yarn install
```
2. Run the Dev Project

```sh
yarn dev
```
## <a name='credits'/>Credits
[Oliver](https://github.com/OliverNguyen226), [Yoyo](https://github.com/yoyochen68), [Phoenix](https://github.com/phoenixlai833), [Phillip](https://github.com/Pho86), [Angelyne](https://github.com/atran02), [Mai Ahn](https://github.com/mverakore)

