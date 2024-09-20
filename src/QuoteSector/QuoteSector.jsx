import React,{useState, useEffect} from "react";
import "./QuoteSector.css";

function QuoteSector({randomIndex}) {

    const motivationalQuotes = [
        "Success is no accident. It is hard work, perseverance, learning, studying, sacrifice, and most of all, love of what you are doing or learning to do. – Pelé",
        "The only way to prove you are a good sport is to lose. – Ernie Banks",
        "Champions keep playing until they get it right. – Billie Jean King",
        "Winning isn’t everything, but wanting to win is. – Vince Lombardi",
        "You miss 100% of the shots you don’t take. – Wayne Gretzky",
        "It’s not whether you get knocked down; it’s whether you get up. – Vince Lombardi",
        "Hard work beats talent when talent doesn’t work hard. – Tim Notke",
        "The only one who can tell you ‘you can’t’ is you. And you don’t have to listen. – Nike",
        "The harder the battle, the sweeter the victory. – Les Brown",
        "It’s not the will to win that matters—everyone has that. It’s the will to prepare to win that matters. – Paul Bryant",
        "You have to expect things of yourself before you can do them. – Michael Jordan",
        "Never say never, because limits, like fears, are often just an illusion. – Michael Jordan",
        "Run when you can, walk if you have to, crawl if you must; just never give up. – Dean Karnazes",
        "I’ve failed over and over and over again in my life. And that is why I succeed. – Michael Jordan",
        "Don’t count the days, make the days count. – Muhammad Ali",
        "The difference between the impossible and the possible lies in a person’s determination. – Tommy Lasorda",
        "Pain is temporary. Quitting lasts forever. – Lance Armstrong",
        "Gold medals aren’t really made of gold. They’re made of sweat, determination, and a hard-to-find alloy called guts. – Dan Gable",
        "The more difficult the victory, the greater the happiness in winning. – Pelé",
        "The only place where success comes before work is in the dictionary. – Vince Lombardi",
        "It’s not the size of the dog in the fight, but the size of the fight in the dog. – Archie Griffin",
        "You’re never a loser until you quit trying. – Mike Ditka",
        "Winners never quit, and quitters never win. – Vince Lombardi",
        "Success is where preparation and opportunity meet. – Bobby Unser",
        "To uncover your true potential, you must first find your own limits and then have the courage to blow past them. – Picabo Street",
        "Sports do not build character, they reveal it. – Heywood Broun",
        "Do you know what my favorite part of the game is? The opportunity to play. – Mike Singletary",
        "You can’t put a limit on anything. The more you dream, the farther you get. – Michael Phelps",
        "Set your goals high, and don’t stop till you get there. – Bo Jackson",
        "It’s not how big you are, it’s how big you play. – John Wooden",
        "I am building a fire, and every day I train, I add more fuel. At just the right moment, I light the match. – Mia Hamm",
        "Some people want it to happen, some wish it would happen, others make it happen. – Michael Jordan",
        "You can’t win unless you learn how to lose. – Kareem Abdul-Jabbar",
        "What makes something special is not just what you have to gain, but what you feel there is to lose. – Andre Agassi",
        "Passion first and everything will fall into place. – Holly Holm",
        "The strength of the team is each individual member. The strength of each member is the team. – Phil Jackson",
        "If you can believe it, the mind can achieve it. – Ronnie Lott",
        "The road to athletic greatness is not marked by perfection, but the ability to constantly overcome adversity and failure. – Nike",
        "Excellence is the gradual result of always striving to do better. – Pat Riley",
        "Adversity causes some men to break; others to break records. – William A. Ward",
        "A champion is someone who gets up when he can’t. – Jack Dempsey",
        "Do not let what you cannot do interfere with what you can do. – John Wooden",
        "Don’t give up; don’t ever give up. – Jim Valvano",
        "If you aren’t going all the way, why go at all? – Joe Namath",
        "There are no shortcuts—everything is reps, reps, reps. – Arnold Schwarzenegger",
        "Don’t practice until you get it right. Practice until you can’t get it wrong. – Anonymous",
        "Success is not forever, and failure isn’t fatal. – Don Shula",
        "The only way to prove that you’re a good sport is to lose. – Ernie Banks"
    ];

    const [quote, setQuote] = useState(motivationalQuotes[randomIndex]); 

    useEffect(() => {
        setQuote(motivationalQuotes[randomIndex]);
    }, [randomIndex, motivationalQuotes]);

    return (
        <div className="quote-section">
            <p className="quote">{quote}</p>
        </div>
    )
}

export default QuoteSector