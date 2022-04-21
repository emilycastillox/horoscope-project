document.querySelector('#runIt').addEventListener('click', whatAreU)

function whatAreU(){
    //variables for months/days - collecting the value
    const month = document.querySelector('#month').value
    const day  = parseInt(document.querySelector('#day').value)
    console.log(month)
    // aries
    if (month === 'March' && day >= 21 || month === 'April' && day <= 19){
        // result
        document.querySelector('#resultHere').innerText = 'Aries: Your energy is probably pretty low today, Aries. You won\'t feel like socializing, nor will you feel like staying in and reading or watching TV. Under these circumstances, the best thing to do is find a distraction. Go work out, read a thrilling book, go to a funny movie. Get your mind off your lethargy and it could well disappear.'
    } else if (month === 'April' && day >= 20 || month === 'May' && day <= 20){
        document.querySelector('#resultHere').innerText = 'Taurus: Career and financial goals could seem completely stalled, Taurus, and this could have you depressed, frustrated, and in something of a panic. Don\'t fall into this trap. You\'ll be back on track in a few days. In the meantime, be good to yourself. Go to your favorite restaurant, buy yourself a present, or spend the afternoon in a bookstore.'
    } else if (month === 'May' && day >= 21 || month === 'June' && day <= 20){
        document.querySelector('#resultHere').innerText = 'Gemini: A colleague could be in a very bad mood, Gemini, and therefore not the easiest person in the world to deal with. In fact, today he or she could resist working at all, and you might feel obligated to take up the slack. Only do it if the tasks are urgent. It isn\'t fair to you to have to do someone else\'s job. Don\'t feel guilty if you leave it unfinished.'
    } else if (month === 'June' && day >= 21 || month === 'July' && day <= 22){
        document.querySelector('#resultHere').innerText = 'Cancer: Plans to go away on vacation or perhaps a business trip could be put on hold today. Events you might have been scheduled to attend could be temporarily postponed. This could leave you feeling somewhat at a loss because you\'d planned to be away and now you don\'t know what to do with yourself in the meantime. Be your usual ingenious self!'
    } else if (month === 'July' && day >= 23 || month === 'August' && day <= 22){
        document.querySelector('#resultHere').innerText = 'Leo: This isn\'t a good day to visit the racetrack, Las Vegas, or any store that sells lottery tickets. Stay away from the stock market, too. Speculation of any kind now could be risky at best and disastrous at worst. Romance is also likely to be blocked today, since you\'re probably feeling a bit lethargic and not very sociable. Read a good book.'
    } else if (month === 'August' && day >= 23 || month === 'September' && day <= 22){
        document.querySelector('#resultHere').innerText = 'Virgo: You\'re likely to want to retreat into your bedroom and slam the door today. You won\'t feel like talking or socializing with anyone, not even those closest to you. Too much work could have you in a state of near exhaustion and almost total burnout, which means that getting some rest is probably the best thing you could do right now.'
    } else if (month === 'September' && day >= 23 || month === 'October' && day <= 22){
        document.querySelector('#resultHere').innerText = 'Libra: This might prove to be one of those days in which it\'s very hard to get anything related to work or communication off the ground. You could find excuses to stop working more often than usual, particularly if it involves calling people on the phone.  Take care of the most urgent tasks. The world won\'t come to an end if you put the rest off a while.'
    } else if (month === 'October' && day >= 23 || month === 'November' && day <= 21){
        document.querySelector('#resultHere').innerText = 'Scorpio: You might have planned to make a particular purchase today, but a quick check of your financial situation could reveal that it would be better if you waited until your next payday. This could prove disappointing and frustrating, but look at it this way - you\'ve waited this long for this item. Waiting a little longer won\'t hurt.'
    } else if (month === 'November' && day >= 22 || month === 'December' && day <= 21){
        document.querySelector('#resultHere').innerText = 'Sagittarius: A lack of physical and mental energy as well as motivation could have you in a lethargic mood today. You won\'t feel like doing much of anything. You might get extremely irritated at the thought of having to work in any way. It might be a good idea to go to a movie in the evening, preferably a thriller or action movie. This will get your juices flowing again.'
    } else if (month === 'December' && day >= 22 || month === 'January' && day <= 19){
        document.querySelector('#resultHere').innerText = 'Capricorn: Usually you enjoy talking with others, but today you won\'t even want to answer the phone. Your physical stamina and mental energy are low, and you could feel out of sorts. It might help if you go for a walk sometime in the afternoon. Get the endorphins going and then go to a movie. You\'ll soon be your old self again!'
    } else if (month === 'January' && day >= 20 || month === 'February' && day <= 18){
        document.querySelector('#resultHere').innerText = 'Aquarius:  A group of friends might want you to go out with them today,  but you probably won\'t feel up to it. Your financial situation could also require a little belt-tightening now, so you may not feel you can justify the expense. Invite a friend or love partner over to watch a movie with you.'
    } else if (month === 'February' && day >= 19 || month === 'March' && day <= 20){
        document.querySelector('#resultHere').innerText = 'Pisces: Today you could feel full of energy and eager to get out for some exercise, but other responsibilities might threaten to keep you from doing it. The resulting frustration could zap all your energy and put you in a lethargic mood. Get the most urgent tasks done and then get the exercise you need.'
    } else{
        console.log('Please try again.')
    }
    
}




// Aries Dates: March 21 – April 19
// Taurus Dates: April 20 – May 20
// Gemini Dates: May 21 – June 20
// Cancer Dates: June 21 – July 22
// Leo Dates: July 23 – August 22
// Virgo Dates: August 23 – September 22
// Libra Dates: September 23 – October 22
// Scorpio Dates: October 23 – November 21
// Sagittarius Dates: November 22 – December 21
// Capricorn Dates: December 22 – January 19
// Aquarius Dates: January 20 – February 18
// Pisces Dates: February 19 – March 20