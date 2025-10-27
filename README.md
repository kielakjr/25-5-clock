# 25 + 5 Clock

A Pomodoro-style timer built with React and Vite. This timer helps you manage your work sessions and breaks using the popular 25+5 technique (25 minutes of work followed by 5 minutes of break).

## Features

- **Customizable Timer Lengths**: Adjust both session and break durations (1-60 minutes)
- **Session/Break Toggle**: Automatically switches between work sessions and breaks
- **Visual Feedback**: Last minute countdown displays in red
- **Audio Alert**: Plays a sound when timer reaches zero
- **Pause/Resume**: Control your timer with play and pause functionality
- **Reset**: Quickly reset to default settings (25 min session, 5 min break)

## Demo

View the live demo: [https://kielakjr.github.io/25-5-clock](https://kielakjr.github.io/25-5-clock)

## Technologies Used

- React 19
- Vite
- React Icons

## Installation

1. Clone the repository:

```bash
git clone https://github.com/kielakjr/25-5-clock.git
cd 25-5-clock
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Build for production:

```bash
npm run build
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run deploy` - Deploy to GitHub Pages
- `npm run lint` - Run ESLint

## Project Structure

```
25+5-clock/
├── src/
│   ├── components/
│   │   ├── Length.jsx      # Break/Session length controls
│   │   ├── Timer.jsx       # Timer display
│   │   └── Buttons.jsx     # Play/Pause/Reset controls
│   ├── assets/
│   │   └── beep_sound.mp3  # Alert sound
│   ├── App.jsx             # Main application logic
│   ├── main.jsx            # Application entry point
│   └── index.css           # Global styles
└── index.html              # HTML template
```

## License

This project is open source and available under the MIT License.
