While going for any feature, I always tend to write doen the requirements first. So, that's where I'll start.

REQUIREMENTS:

1. Implement a music player interface which has
  
   a. A list of liked songs
   
   b. Each song has some info - like song name, artist name, url
   
   c. a go back icon at the very top
   
   d. a footer music controls section, which has
   
      1. a slider to show the duration
   
      2. a control panel for changing the song or play/pause.
   

   These are the basic reuqirements that I would start with.

ARCHITECTURE:

1. state variables that I might need - songs, current song, isplaying
2. I would be keeping all the state inside the music context and also some handlers for changing the song
3. The component structure would be something like this

   ```
   src/
    ├── app/
    │ ├── components/
    │ │ ├── ActionButton.tsx
    │ │ ├── BackToHomeIndicator.tsx
    │ │ ├── MusicControls.tsx
    │ │ ├── MusicPlayer.tsx
    │ │ ├── MusicSlider.tsx
    │ │ └── SongCard.tsx
    │ ├── context/
    │ │ └── musicContext.tsx
    │ └── types.ts
    └── constants.ts
   ```

COMPONENTS:

1. Home - the root component
2. MusicPlayer - the root component where the actual flow of the feature starts. It has the actions buttons, the song cards and the Music Controls
3. ActionButton - a common component for the buttons that I have on the screen. takes in three props -> icon, onClick handler, disabled
4. MusicControls - the footer component which shows the MusicSlider, the current song status and the buttons to change it.
5. BackToHomeIndicator - a static component which gives the notion of going back to previous page
6. MusicSlider - a component that gives the notion of a song playing. I have kept the default duration for each song to be 3 mins. Once the duration reaches the very end. The song automatically changes to the next song.
7. SongCard - a component that shows the song imageUrl, the title as well as the artist name.

FUNCTIONALIITES ADDED :

1. Used React Context (MusicPlayerContext) to store the following

   1. Global song state
   2. Play/pause management
   3. Song navigation logic

2. Progress Tracking

   1. Automatic song progression
   2. Pause/resume functionality

3. Image Loading

   1. Shimmer effect during image load
   2. Conditional rendering

4. Change song

   1. Click on the song card to play it
   2. Use the music controls to change the song
   3. The songs automatically cycle and go back to the first song if the last song has been reached and vice-versa.

5. Replicated the UI given in figma
   1. I have replicated(tried to) the UI end to end from the figma file
   2. have also used the icons from the file.
   3. Also, I have created a folder for the icons in src folder

TECHNICAL CHALLENGES:

Dynamic Progress Tracking - Although I think it was a good to have feature considering this assignment but nevertheless it was a bit challenging. It's a dynamic music slider that tracks song progress, automatically updating and navigating between songs.
