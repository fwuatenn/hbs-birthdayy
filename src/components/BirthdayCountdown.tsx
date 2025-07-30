mport { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Calendar, Clock } from "lucide-react";

const BirthdayCountdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Set today as the birthday for demonstration
    const today = new Date();
    const birthday = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 23, 59, 59);
    
    // If today's birthday time has passed, set it for next year
    if (birthday < today) {
      birthday.setFullYear(today.getFullYear() + 1);
    }

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = birthday.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const isToday = timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0;

  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <Calendar className="mx-auto mb-4 text-celebration animate-bounce-gentle" size={32} />
        <h2 className="font-romantic text-3xl md:text-4xl lg:text-5xl gradient-text mb-8">
          {isToday ? "🎉 It's Your Special Day! 🎉" : "Countdown to Your Special Day"}
        </h2>

        {isToday ? (
          <Card className="card-romantic border-0 p-12 max-w-2xl mx-auto">
            <div className="text-center">
              <h3 className="font-romantic text-4xl md:text-5xl text-love mb-6 animate-pulse-soft">
                Happy Birthday!
              </h3>
              <p className="text-xl text-foreground leading-relaxed">
                Today is your day to shine! May it be filled with love, laughter, 
                and all your favorite things. You deserve all the happiness in the world! 🎂✨
              </p>
            </div>
          </Card>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            {[
              { label: "Days", value: timeLeft.days },
              { label: "Hours", value: timeLeft.hours },
              { label: "Minutes", value: timeLeft.minutes },
              { label: "Seconds", value: timeLeft.seconds },
            ].map((item, index) => (
              <Card key={item.label} className="card-romantic border-0 p-6 text-center">
                <div className="text-2xl md:text-3xl font-bold text-romantic mb-2 animate-pulse-soft">
                  {item.value.toString().padStart(2, '0')}
                </div>
                <div className="text-sm text-muted-foreground font-medium uppercase tracking-wide">
                  {item.label}
                </div>
              </Card>
            ))}
          </div>
        )}

        <div className="mt-8">
          <Clock className="inline-block mr-2 text-muted-foreground" size={16} />
          <span className="text-muted-foreground text-sm">
            Every second brings us closer to celebrating you!
          </span>
        </div>
      </div>
    </section>
  );
};

export default BirthdayCountdown;
