# Microsoft Copilot UI Clone

A pixel-perfect clone of the Microsoft Copilot web interface, built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Home Page** (`/`) - Clean interface with greeting, message input, and suggestion chips
- **Discover Page** (`/discover`) - Featured content cards including Copilot Daily podcast, weather widget, and curated stories
- **Responsive Sidebar** - Navigation with colorful Copilot logo and icon buttons
- **Message Input Component** - Interactive input with model selector and voice input button
- **Pixel-Perfect Design** - Matches the original Microsoft Copilot design with accurate colors, spacing, and shadows

## Tech Stack

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Component library (optional, for future enhancements)
- **Lucide Icons** - Icon library

## Getting Started

### Prerequisites

- Bun (or npm/pnpm/yarn)
- Node.js 18+

### Installation

```bash
# Install dependencies
bun install

# Run development server
bun run dev

# Build for production
bun run build

# Start production server
bun start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
copilot-clone/
├── src/
│   ├── app/
│   │   ├── page.tsx           # Home page
│   │   ├── discover/
│   │   │   └── page.tsx       # Discover page
│   │   ├── layout.tsx         # Root layout with sidebar
│   │   └── globals.css        # Global styles
│   └── components/
│       ├── sidebar.tsx        # Navigation sidebar
│       └── message-input.tsx  # Message input component
└── public/                    # Static assets
```

## Design Details

### Colors
- Background: `#f5f3f2` (warm light gray)
- Text: `#2d2d2d` (dark gray)
- Muted text: `#878787` (medium gray)
- Borders: `#e0dedd` (light gray)

### Key Features
- Rounded corners: `32px` for cards and inputs
- Soft shadows: `0 2px 16px rgba(0,0,0,0.08)`
- Gradient backgrounds on featured cards
- Segoe UI font family
- Active state navigation highlighting

## Pages

### Home (`/`)
- Centered greeting message
- Message input with model selector
- 8 suggestion chips for quick actions
- Footer disclaimer text

### Discover (`/discover`)
- Featured Copilot Daily card with audio visualization
- Weather widget with location and temperature
- Article cards with images
- Sections: Stories to explore, Ideas to explore, Topics
- Sticky message input at bottom

## Components

### Sidebar
- Fixed left sidebar (52px wide)
- Gradient Copilot logo
- Navigation icons with active states
- User profile icon at bottom

### MessageInput
- Plus button for attachments
- Text input field
- Model selector dropdown (Smart GPT-5)
- Microphone button for voice input

## License

This is a clone project for educational purposes. Microsoft Copilot and its design are trademarks of Microsoft Corporation.
