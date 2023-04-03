# cs732-se75-assignment-mfcc168

## Parallax Animation App
This is a parallax animation app built using React and React Spring. It features several layers of images and text that move at different speeds as the user scrolls, creating a parallax effect.

## Installation
To run this app on your local machine, you will need to have Node.js installed. Once you have Node.js installed, follow these steps:

Clone the repository onto your local machine.
Navigate to the project directory in your terminal.
1. Run ```npm install``` to install the necessary dependencies.
2. Run ```npm run dev``` to start the app.
## How to Use
To use the app, simply scroll up and down on the page to see the parallax effect in action. There are several layers of images and text that move at different speeds, creating a dynamic and visually engaging experience.

## Features
Parallax scrolling effect using React and React Spring
Multiple layers of images and text
Sticky text block that stays in place as the user scrolls
Horizontal parallax scrolling effect for one layer of clouds
Customizable speed and opacity for each layer

## Explanation of Code
The code for this parallax animation app is written in JavaScript using React and React Spring. Here's a brief overview of how the code works:

### Parallax Layers
The main feature of this app is the parallax effect, which is achieved using React Spring's Parallax and ParallaxLayer components. Each layer of the animation is defined using a ParallaxLayer component, which takes a variety of props including the offset (how far down the page the layer should be), the speed (how quickly the layer should move).

For example, here's the code for one of the mountain layers:

```
<ParallaxLayer offset={0} speed={-0.6}>
  <div className="animation_layer parallax" id="mountain3"></div>
</ParallaxLayer>
```

This layer has an offset of 0 (i.e. it's at the top of the page), a speed of -0.6 (i.e. it moves up the page as the user scrolls down).

### Images and Text
The app also includes several images and blocks of text that move with the parallax effect. These are simply defined using standard HTML `img` and `<div>` tags, but are wrapped in ParallaxLayer components to enable the parallax effect.

For example, here's the code for the moon image:

```
<ParallaxLayer offset={2} speed={1}>
  <img src={moon} width="100px" id="moon"></img>
</ParallaxLayer>
```

This layer has an offset of 2 (i.e. it appears part-way down the page), a speed of 1 (i.e. it moves down the page at the same speed as the user scrolls).

### Sticky Text Block
One of the layers in the app features a block of text that stays in place as the user scrolls. This is achieved using the ParallaxLayer's sticky prop, which takes an object with two properties: start and end. These values specify the start and end points of the sticky behavior (relative to the offset of the layer).

For example, here's the code for the sticky text block:

```
<ParallaxLayer sticky={{ start: 1.1, end: 2.9 }} speed={10}>
  <TextBlock />
</ParallaxLayer>
```

This layer has a sticky behavior that starts at an offset of 1.1 and ends at an offset of 2.9 (i.e. it appears after the first layer but disappears before the third layer), and a speed of 10 (i.e. it moves much faster than the user scrolls).
