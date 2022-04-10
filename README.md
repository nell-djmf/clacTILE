# clacTILE

![homepage](https://i.imgur.com/onuRJdu.png)

## Premise
A part picker for building mechanical keyboards. Tile-based image layout for ease of color-matching.


*Deployed on Heroku:* **[clacTILE](https://clactile.herokuapp.com/)**
***

## Features

- A database of switches, cases, and keycaps for your next mechanical keyboard
- Search database for matching items by color, layout, material, etc
- Create a list of your planned builds or choose from our prebuilt examples


***

## Getting Started

The site is a little fragile at the moment - for adding, editing, updating or deleting, please follow the steps to avoid errors.

### **Adding a Build**
> At the Build page, click `Add Parts`

> Select your parts by clicking on the part ID number button

> When returned to Build page, click `Add Parts to New Build`

> Name your build in the prompt

### **Updating a Build**
> Click `Add Parts`

> Select parts, same as above

> When returned to Build page, click the build tile you want to update - your selection should highlight

> Click `Update Build` and name it

### **Deleting a Build**
> Select a build tile

> Click `Delete Build`

***
**Build Page & Product Page**
![build page](https://i.imgur.com/FXOjL0h.png)
![product page](https://i.imgur.com/8xNiobz.png)
***

## Upcoming Features
### [Trello](https://trello.com/b/9XaPPAAh/clactile)
- [ ] Build List preview pane showing name and image preview instead of part id number
- [ ] Build edit buttons dynamically hiding/displaying depending on if parts are picked or builds are targeted
- [ ] Pricing and buy sources for items
- [ ] Database extension for more PC peripherals by color (mice, headsets, deskmats, wrist/keyboard wrests)

### Tech Used
- Javascript
- HTML 
- CSS
- React
- MongoDB
- Mongoose
- Express

***
### Known Bugs


**Fixed as of 4/4/22** - *Added code to check for targets/parts before making changes to db*

**Current bug:**
- A target build must be unselected manually by clicking on it again

**UPDATE 4/10/22**: ==I have updated the code for deployment on Heroku. I am unsure if the code still works if run in a local environment, as I have removed localhost from all axios calls.==

***
## Credits
***
### Part References

[KBDFans](https://kbdfans.com/)

[SplitKB](https://splitkb.com/)

[Originative Eco](https://www.originativeco.com/)

[Novelkeys](https://novelkeys.com/)

[HyperX](https://www.hyperxgaming.com/us/keyboards/keyboard-accessories/hyperx-pudding-keycaps)

[Drop](https://drop.com/buy/drop-mito-gmk-laser-custom-keycap-set)

***

### Style References
[Darkened Background](https://css-tricks.com/design-considerations-text-images/)

[Image Change on Hover](https://stackoverflow.com/questions/61921239/how-to-transform-background-image-on-hover-in-react)

[Image Popup](https://stackoverflow.com/questions/67754865/how-to-blur-the-background-after-click-on-the-button-in-react-js)

[Overlaying Divs](https://www.tutorialrepublic.com/faq/how-to-overlay-one-div-over-another-div-using-css.php#:~:text=You%20can%20use%20the%20CSS,%2C%20fixed%20%2C%20or%20relative%20)

[Transition on Hover](https://developer.mozilla.org/en-US/docs/Web/CSS/transition)


[Images for Interactive Wallpaper](https://www.reddit.com/r/MechanicalKeyboards/comments/n31nvq/interactive_sushi_switch_wallpaper_engine/)