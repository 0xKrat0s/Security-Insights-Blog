---
title: Hack The Box- Flag Command (Web Challenge) #Easy
date: 2024-08-13T02:00:00Z
image: /images/post/post-2.png
categories: ["HTB"]
featured: true
draft: false
summary: 'Release of Tailwind Nextjs Starter Blog template v2.0, refactored with Nextjs App directory and React Server Components setup.Discover the new features and how to migrate from V1.'
---

## Challenge Descripion

Embark on the "Dimensional Escape Quest" where you wake up in a mysterious forest maze that's not quite of this world. Navigate singing squirrels, mischievous nymphs, and grumpy wizards in a whimsical labyrinth that may lead to otherworldly surprises. Will you conquer the enchanted maze or find yourself lost in a different dimension of magical challenges? The journey unfolds in this mystical escape!

Today, let's dive into the Flag Command challenge from Hack The Box, which falls under the Web category. You can find this challenge by filtering for web-based challenges within Hack The Box Labs. It’s marked as very easy in terms of difficulty, making it a good starting point.

Typically, Hack The Box challenges don't require setting up a VPN, so you can launch the instance directly and begin your exploration right away.

## Getting Started

Once your instance is up and running, enter the provided IP address into a new browser tab. You'll be greeted by a page resembling a Linux terminal (though it's not a real terminal):

![Github Traffic](/images/Flag_Commands/start.png)

At the bottom of the page, you're prompted to type start to begin the game:

![Github Traffic](/images/post/post-2.png)

## Progressing Through the Game

After typing start, you're presented with four choices. Unsure of which one to pick, I decided to experiment and selected HEAD NORTH.

This brought up another set of four options. Using the same trial-and-error approach, I managed to advance to the third stage with the following choices:

- HEAD NORTH
- FOLLOW A MYSTERIOUS PATH
- SET UP CAMP
However, at the fourth question, none of the options seemed correct. Regardless of what I entered, I kept getting the Game Over message.

## Digging into the Source Code

I decided to investigate the page's source code for clues.

By pressing F12, I opened the Developer Tools and navigated to the Debugger tab. The site included three JavaScript files (commands.js, main.js, game.js). The file that caught my attention was main.js, and within it, this function stood out:

```main.js
async function CheckMessage() {
    fetchingResponse = true;
    currentCommand = commandHistory[commandHistory.length - 1];

    if (availableOptions[currentStep].includes(currentCommand) || availableOptions['secret'].includes(currentCommand)) {
        await fetch('/api/monitor', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 'command': currentCommand })
        })
            .then((res) => res.json())
            .then(async (data) => {
                console.log(data)
                await displayLineInTerminal({ text: data.message });
```
This if statement checks two conditions: whether the input matches one of the available options for the current step or whether it equals a special 'secret' option. If either condition is true, the following code is executed. Here’s part of the code that runs when the if condition is satisfied:

```main.js
if(data.message.includes('Game over')) {
    playerLost();
    fetchingResponse = false;
    return;
    }

if(data.message.includes('HTB{')) {
    playerWon();
    fetchingResponse = false;

    return;
    }

if (currentCommand == 'HEAD NORTH') {
    currentStep = '2';
    }
    else if (currentCommand == 'FOLLOW A MYSTERIOUS PATH') {
        currentStep = '3'
        }
    else if (currentCommand == 'SET UP CAMP') {
        currentStep = '4'
        }

```
There are various if statements. By closely observing them, I found the correct answers for the first three questions.

## Inspecting Network Traffic

Next, I checked the Network tab in DevTools to see what resources were being called. Refreshing the page with F5 showed the following resources. The most interesting information was the request and response from /api/options:

```ts:/api/options
  "allPossibleCommands": {
    "1": [
      "HEAD NORTH",
      "HEAD WEST",
      "HEAD EAST",
      "HEAD SOUTH"
    ],
    "2": [
      "GO DEEPER INTO THE FOREST",
      "FOLLOW A MYSTERIOUS PATH",
      "CLIMB A TREE",
      "TURN BACK"
    ],
    "3": [
      "EXPLORE A CAVE",
      "CROSS A RICKETY BRIDGE",
      "FOLLOW A GLOWING BUTTERFLY",
      "SET UP CAMP"
    ],
    "4": [
      "ENTER A MAGICAL PORTAL",
      "SWIM ACROSS A MYSTERIOUS LAKE",
      "FOLLOW A SINGING SQUIRREL",
      "BUILD A RAFT AND SAIL DOWNSTREAM"
    ],
    "secret": [
      "Blip-blop, in a pickle with a hiccup! Shmiggity-shmack"
    ]
  }
```
This JSON data contains all the answer options. It includes not only the options presented during the game but also the secret option found in main.js.

## Solving the Challenge

Let’s try entering the secret option for the first question.

![Github Traffic](/images/Flag_Commands/solve.png)

And there you have it, the flag has been found!

## Conclusion

This challenge wasn’t particularly difficult, but it did require some persistence and basic JavaScript knowledge. It was quite an interesting experience!

