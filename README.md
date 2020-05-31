
# About Smite Timeline

Smite Timeline is a build tool for the game [SMITE by Hi-Rez Studios.](https://www.smitegame.com)

The goal of this tool is to model the impact of time in build choices, and to compare builds. While many build tools for smite already exist, I don't believe any of them can help answer a question such as "If I build cheap items, and my opponent builds expensive stacking items, how long will I be ahead in stats?" Smite Timeline intends to answer these questions by creating a timeline of events that predicts when builds will complete each item, and then comparing two builds side by side to see exactly how different choices might play out.


## Redux State

The base state of the app is:
1. Left Build
2. Right Build
3. Game Time

Game time is selected by a central slider in the UI and the stats for each build are updated to reflect what stats that build would have at that specific time.

Builds contain:
1. `God` - the chosen character for a build, includes starting stats, and stats gained each level.
2. `Item[]` - an ordered list of items to be built, including their stats and gold cost.
3. `KillTiming` - a model of when the player will gain experience and gold from kills. Currently there is only one kill timing model, but the state holds one for each model to allow for asymetrical xp/gold gain when more models are designed.

The base redux state can be found in /src/redux


## Derived State

God and KillTiming can be combined to generate `LevelEvent`s. A LevelEvent represents the player gaining a level, including the change is stats and the time that each level would occur based on the KillTiming.

Items and KillTiming are combined to create `ItemEvent`s. ItemEvents represent when a player builds an item, based on their gold calculated from their KillTiming.

All events are combined in one list, then sorted by the time they occur. Finally we sum the stats for all events before each events, so that the stats represent the total stats at that time, rather than the change in stats.

Derived state files can be found in /src/redux/selectors


## The View

The view is rendered using React, using react-redux to map the redux state.

The app displays that stats from each build at the same game time, which can be read directly as the stats from the last event whose time is less than the game time. Events will have an icon displayed along the side of the game time slider, spaced according to their times to give a visual representation of how far apart events are in time.

The react component files can be found in src/components

### Create React App

This project was created using create-react-app, the instructions for running and testing the app are still available in create-react-app readme.md