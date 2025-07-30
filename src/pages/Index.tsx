@tailwind base;
@tailwind components;
@tailwind utilities;

/* Definition of the design system. All colors, gradients, fonts, etc should be defined here. 
All colors MUST be HSL.
*/

@layer base {
  :root {
    --background: 350 30% 96%;
    --foreground: 340 45% 25%;

    --card: 0 0% 100%;
    --card-foreground: 340 45% 25%;

    --popover: 0 0% 100%;
    --popover-foreground: 340 45% 25%;

    --primary: 330 65% 55%;
    --primary-foreground: 0 0% 100%;

    --secondary: 345 35% 88%;
    --secondary-foreground: 340 45% 25%;

    --muted: 350 25% 92%;
    --muted-foreground: 340 20% 50%;

    --accent: 315 70% 75%;
    --accent-foreground: 340 45% 25%;

    /* Custom birthday theme colors */
    --romantic: 320 60% 70%;
    --romantic-foreground: 0 0% 100%;
    
    --celebration: 45 90% 70%;
    --celebration-foreground: 340 45% 25%;
    
    --love: 350 80% 65%;
    --love-foreground: 0 0% 100%;

    /* Beautiful gradients */
    --gradient-romantic: linear-gradient(135deg, hsl(320, 60%, 70%), hsl(330, 65%, 55%));
    --gradient-celebration: linear-gradient(135deg, hsl(45, 90%, 70%), hsl(350, 80%, 65%));
    --gradient-hero: linear-gradient(135deg, hsl(320, 60%, 70%) 0%, hsl(330, 65%, 55%) 50%, hsl(45, 90%, 70%) 100%);
    --gradient-card: linear-gradient(135deg, hsl(0, 0%, 100%) 0%, hsl(350, 30%, 96%) 100%);

    /* Elegant shadows */
    --shadow-romantic: 0 10px 30px -10px hsl(320 60% 70% / 0.3);
    --shadow-celebration: 0 0 40px hsl(45 90% 70% / 0.4);
    --shadow-soft: 0 4px 20px hsl(320 60% 70% / 0.15);

    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 210 40% 98%;

    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;
    --ring: 222.2 84% 4.9%;

    --radius: 0.5rem;

    --sidebar-background: 0 0% 98%;

    --sidebar-foreground: 240 5.3% 26.1%;

    --sidebar-primary: 240 5.9% 10%;

    --sidebar-primary-foreground: 0 0% 98%;

    --sidebar-accent: 240 4.8% 95.9%;

    --sidebar-accent-foreground: 240 5.9% 10%;

    --sidebar-border: 220 13% 91%;

    --sidebar-ring: 217.2 91.2% 59.8%;
  }

  .dark {
    --background: 340 40% 8%;
    --foreground: 350 30% 96%;

    --card: 340 35% 12%;
    --card-foreground: 350 30% 96%;

    --popover: 340 35% 12%;
    --popover-foreground: 350 30% 96%;

    --primary: 330 65% 55%;
    --primary-foreground: 0 0% 100%;

    --secondary: 340 25% 20%;
    --secondary-foreground: 350 30% 96%;

    --muted: 340 25% 20%;
    --muted-foreground: 350 15% 70%;

    --accent: 315 70% 75%;
    --accent-foreground: 340 40% 8%;

    /* Dark mode birthday colors */
    --romantic: 320 50% 60%;
    --celebration: 45 80% 60%;
    --love: 350 70% 55%;

    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 210 40% 98%;

    --border: 217.2 32.6% 17.5%;
    --input: 217.2 32.6% 17.5%;
    --ring: 212.7 26.8% 83.9%;
    --sidebar-background: 240 5.9% 10%;
    --sidebar-foreground: 240 4.8% 95.9%;
    --sidebar-primary: 224.3 76.3% 48%;
    --sidebar-primary-foreground: 0 0% 100%;
    --sidebar-accent: 240 3.7% 15.9%;
    --sidebar-accent-foreground: 240 4.8% 95.9%;
    --sidebar-border: 240 3.7% 15.9%;
    --sidebar-ring: 217.2 91.2% 59.8%;
  }
}

@layer base {
  * {
    @apply border-border;
  }

  body {
    @apply bg-background text-foreground;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  }

  .font-romantic {
    font-family: 'Playfair Display', 'Georgia', serif;
  }
}

@layer components {
  .floating-heart {
    animation: float 6s ease-in-out infinite;
  }

  .floating-heart:nth-child(2) {
    animation-delay: -2s;
  }

  .floating-heart:nth-child(3) {
    animation-delay: -4s;
  }

  .gradient-text {
    background: var(--gradient-romantic);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .card-romantic {
    background: var(--gradient-card);
    box-shadow: var(--shadow-soft);
  }
}

@layer utilities {
  .animate-float {
    animation: float 6s ease-in-out infinite;
  }

  .animate-pulse-soft {
    animation: pulse-soft 3s ease-in-out infinite;
  }

  .animate-bounce-gentle {
    animation: bounce-gentle 2s ease-in-out infinite;
  }
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  33% {
    transform: translateY(-20px) rotate(5deg);
  }
  66% {
    transform: translateY(-10px) rotate(-3deg);
  }
}

@keyframes pulse-soft {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.8;
    transform: scale(1.05);
  }
}

@keyframes bounce-gentle {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
