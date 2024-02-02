const clubs = [
    {
        name: "Alnassr-Fc",
        image: "clubs-image/alnassr.png",
        rating: 3.2
      },
      {
        name: "inter-miami",
        image: "clubs-image/intermaimi.png",
        rating: 3.1
      },
    {
      name: "Arsenal-FC",
      image: "clubs-image/arsenal-fc.png",
      rating: 3.5
    },
    {
      name: "Aston-Villa",
      image: "clubs-image/aston-villa.png",
      rating: 3.3
    },
    {
      name: "Brentford",
      image: "clubs-image/brentford.png",
      rating: 3
    },
    {
      name: "Brighton",
      image: "clubs-image/brighton.png",
      rating: 3.2
    },
    {
      name: "Burnley",
      image: "clubs-image/burnley.png",
      rating: 2.8
    },
    {
      name: "Chelsea",
      image: "clubs-image/chelsea.png",
      rating: 4.1
    },
    {
      name: "Crystal-Palace",
      image: "clubs-image/crystal-palace.png",
      rating: 3.9
    },
    {
      name: "Everton",
      image: "clubs-image/everton.png",
      rating: 3.6
    },
    {
      name: "Leeds-United",
      image: "clubs-image/leeds-united.png",
      rating: 3.4
    },
    {
      name: "Leicester-City",
      image: "clubs-image/leicester-city.png",
      rating: 4
    },
    {
      name: "Liverpool",
      image: "clubs-image/liverpool.png",
      rating: 4.5
    },
    {
      name: "Manchester-City",
      image: "clubs-image/manchester-city.png",
      rating: 4.6
    },
    {
      name: "Manchester-United",
      image: "clubs-image/manchester-united.png",
      rating: 4.1
    },
    {
      name: "Newcastle-United",
      image: "clubs-image/newcastle-united.png",
      rating: 3.2
    },
    {
      name: "Norwich-City",
      image: "clubs-image/norwich-city.png",
      rating: 2.5
    },
    {
      name: "Southampton",
      image: "clubs-image/southhampton.png",
      rating: 3.3
    },
    {
      name: "Tottenham-Hotspur",
      image: "clubs-image/fulham-fc.png",
      rating: 4.2
    },
    {
      name: "Watford",
      image: "clubs-image/fulham-fc.png",
      rating: 2.9
    },
    {
      name: "WestHam-United",
      image: "clubs-image/west-ham-united.png",
      rating: 3.6
    },
    {
      name: "Wolverhampton-Wanderers",
      image: "clubs-image/wolves.png",
      rating: 3.6
    },
    {
        name: "Paris-saint-germain",
        image: "clubs-image/psg-logo.png",
        rating: 4
      },
      {
        name: "Real-Madrid",
        image: "clubs-image/real-madrid-fc.png",
        rating: 4.6
      },
  ];

   const chantsAudio = document.querySelector('.stadium');
   const swooshAudio = document.querySelector('.swoosh');
   const goalChant = document.querySelector('.goal');
   
  let gamePlayOutcome = [];
  let userPredictions = [];

  const scoreBoard = ['goal', 'miss','goal', 'miss', 'miss','goal', 'foul','goal', 'miss','goal', 'miss', 'foul','goal', 'goal',  'foul', 'freekick', 'goal', 'miss', 'miss', 'miss', 'miss','miss', 'miss', 'miss','miss', 'goal','miss','miss','goal', 'miss', 'miss'];

   const displayPredict = () => {
    let  a_prediction = '';

  userPredictions.forEach(prd => {
   a_prediction += `<div class="predict">${prd}</div>`;
         }) 
         document.querySelector(".pred").innerHTML = a_prediction;
         document.querySelectorAll('.predict').forEach(pred => {
     setTimeout(() => {
      pred.classList.add('animate-predict');
     }, 100)
        
         })
   }


const ball = document.querySelector(".ball-anime");
const betButton = document.querySelector(".start-bet");
const betAgainDiv = document.querySelector(".bet-button");
const gameArea = document.querySelector(".games-section");

let balance = 500;

  const displayBalance = () => {
    document.querySelector('.bal').innerHTML = balance;
  }

   displayBalance()

const pickedClubs = [];
const odds = [];
predictionValue = 0;
const prediction = [];

let matches = 0;

 let stakeValue = 100;

  const displayStakeValue = () => {
    document.querySelector('.value').innerHTML = stakeValue;
  }

  const addValue = () => {
     if (stakeValue < balance) {
      stakeValue += 100;
       displayStakeValue()
     } 
  }

  const removeValue = () => {
    if (stakeValue > 100) {
      stakeValue -= 100;
       displayStakeValue()
     } 
  }


function createGames() {
    do {
        let homeClub;
        let awayClub;
        let hometowin;
        let awaytowin;
        let draw;

        do {
            let firstRand = Math.floor(Math.random() * clubs.length);
            let secondRand = Math.floor(Math.random() * clubs.length);
            if (secondRand == firstRand) {
                secondRand = Math.floor(Math.random() * clubs.length);
            }

            homeClub = clubs[firstRand];
            awayClub = clubs[secondRand];
        } while (pickedClubs.includes(homeClub.name) || pickedClubs.includes(awayClub.name));

        if (homeClub.rating > awayClub.rating) {
            do {
                hometowin = (Math.random() * 10);
                awaytowin = (Math.random() * 10);
            } while (awaytowin < hometowin || hometowin == awaytowin);

            draw = (Math.random() * 10);
        } else {
            do {
                hometowin = (Math.random() * 10);
                awaytowin = (Math.random() * 10);
            } while (awaytowin > hometowin);

            draw = (Math.random() * 10);
        }

        pickedClubs.push(homeClub.name);
        pickedClubs.push(awayClub.name);

        let html = `
            <div class="game">
                <div class="club-image"><img src="${homeClub.image}" alt=""></div>
                <div class="club-name">${homeClub.name}</div>
                <div class="odd">
                    <button  data-odd="${hometowin.toFixed(2)}" data-prediction="${homeClub.name} wins against ${awayClub.name}" class="btn">${hometowin.toFixed(2)}</button>
                </div>

                <div class="odd">
                    <button data-odd="${draw.toFixed(2)}" data-prediction="${homeClub.name} draws with ${awayClub.name}" class="btn">${draw.toFixed(2)}</button>
                </div>

                <div class="odd">
                    <button data-odd="${awaytowin.toFixed(2)}" data-prediction="${homeClub.name} looses against ${awayClub.name}" class="btn">${awaytowin.toFixed(2)}</button>
                </div>

                <div class="club-name">${awayClub.name}</div>
                <div class="club-image"><img src="${awayClub.image}" alt=""></div>
            </div>
        `;
        gameArea.innerHTML = html;
        matches += 1;
    } while (matches <= 1)

    document.querySelectorAll(".btn").forEach(button => {
      button.addEventListener('click', () => {
        if (button.classList.contains('black-now')) {
          button.style.backgroundColor = 'red';
          button.style.color = 'white';
         button.classList.remove('black-now');
      userPredictions = userPredictions.filter(Element => Element !== button.dataset.prediction);
     console.log(userPredictions)
           displayPredict()
        } else {
          if (userPredictions.length >= 1) {
            document.querySelector('.popup').classList.add('show-now')
              setTimeout(() => {
               document.querySelector('.popup').classList.remove('show-now')
              }, 4000)
         } else {
          button.style.backgroundColor = 'black';
          button.style.color = 'white';
           userPredictions.push(button.dataset.prediction);
           console.log(userPredictions)
           button.classList.add('black-now');
           displayPredict()
         }
        }
      })
   })

    setTimeout(() => {
      document.querySelectorAll(".game").forEach(item => {
         item.classList.add("gamed");
      })
    }, 1000)
     
}

function animation() {
  userPredictions = []
  gamePlayOutcome = []
    document.querySelector(".bet-button").style.marginTop = '5px';
    ball.classList.add("animation-1");
    setTimeout(() => {
        ball.classList.add("animated-2");
        setTimeout(() => {
            ball.classList.remove("animation-1");
            ball.classList.remove("animated-2");
            betAgainDiv.style.visibility = "hidden";
            setTimeout(() => {
                createGames();
            }, 1000);
        }, 1000);
    }, 2000);
}

 

 const updateMatch = (homegoal, awaygoal, statistic) => {
  document.querySelector('.scoreBoard_1').innerHTML = homegoal;
  document.querySelector('.scoreBoard_2').innerHTML = awaygoal;
  document.querySelector('.stat').innerHTML = statistic;
 }
 
    function analise() {
       if (userPredictions.length == 0) {
         console.log('no predictions yet')
       } else {
        chantsAudio.play()
       }
      const predicate =  userPredictions[0];
      let words = predicate.split(' ');
      awayTeam = words[words.length -1];
      homeTeam = words[0];
      console.log(homeTeam);
      console.log(awayTeam);
      let stat = 'game has started';
      let homeGoal = 0;
      let awayGoal = 0;
      
      document.querySelector('.field').innerHTML = `<div class="main-match">
      <div class="match">
             <div><span>${homeTeam}</span></div>
          <div class="scoreBoard_1">${homeGoal}</div>
            <div>vs</div>
          <div class="scoreBoard_2">${awayGoal}</div>
           <div> <span>${awayTeam}</span></div>
          </div>
         <div class="gameplay"><p class="stat">${stat}</p></div>
          </div>`;

          let number;
          let outcome;

          function homPlay() {
            number = Math.round(Math.random() * (scoreBoard.length - 1));
            outcome = scoreBoard[number];
             stat = `!! ${homeTeam} ${outcome}`;
             if (outcome === 'goal') {
              goalChant.play()
              stat = `!! ${homeTeam} scored a beautiful ${outcome}`;
             homeGoal += 1;
            updateMatch(homeGoal, awayGoal, stat)
            } else if (outcome === 'foul') {
              stat = `!! ${homeTeam} commited a ${outcome}`;
             updateMatch(homeGoal, awayGoal, stat)
            } else if (outcome === 'miss') {
              stat = `!! ${homeTeam} missed a chance to score`;
              updateMatch(homeGoal, awayGoal, stat)
            }
          }

          function awyPlay() {
            number = Math.round(Math.random() * (scoreBoard.length - 1));
            outcome = scoreBoard[number];
              stat = `!! ${awayTeam} ${outcome}`;
          
              if (outcome === 'goal') {
                goalChant.play()
                stat = `!! ${awayTeam} scored a beautiful ${outcome}`;
               awayGoal += 1;
              updateMatch(homeGoal, awayGoal, stat)
              } else if (outcome === 'foul') {
                stat = `!! ${awayTeam} commited a ${outcome}`;
               updateMatch(homeGoal, awayGoal, stat)
              } else if (outcome === 'miss') {
                stat = `!! ${awayTeam} missed a chance to score`;
                updateMatch(homeGoal, awayGoal, stat)
              }
          } 
 
          setTimeout(() => {
            homPlay()
           setTimeout(() => {
            awyPlay()
            setTimeout(() => {
              homPlay()
             setTimeout(() => {
              awyPlay()
              setTimeout(() => {
                homPlay()
               setTimeout(() => {
                awyPlay()
                setTimeout(() => {
                  homPlay()
                 setTimeout(() => {
                  awyPlay()
                  setTimeout(() => {
                    homPlay()
                   setTimeout(() => {
                    awyPlay()
                    setTimeout(() => {
                      homPlay()
                     setTimeout(() => {
                      awyPlay()
                      setTimeout(() => {
                        homPlay()
                       setTimeout(() => {
                        awyPlay()
                        setTimeout(() => {
                          stat = `!! game has ended`;
                          updateMatch(homeGoal, awayGoal, stat)
                        chantsAudio.pause()
                        goalChant.pause()
                    if (homeGoal > awayGoal) {
                    gamePlayOutcome.push(`${homeTeam} wins against ${awayTeam}`);
                    } else if (awayGoal > homeGoal) {
                    gamePlayOutcome.push(`${homeTeam} looses against ${awayTeam}`);
                    } else if (awayGoal == homeGoal) {
                    gamePlayOutcome.push(`${homeTeam} draws with ${awayTeam}`);
                    }
               
                     if (userPredictions[0] === gamePlayOutcome[0]) {
                      setTimeout(() => {
      document.querySelector('.popup-2').style.visibility = 'visible';
      setTimeout(() => {
        document.querySelector('.popup-2').style.visibility = 'hidden';
        balance = balance * 2.5;
        displayBalance()
         userPredictions = []
         gamePlayOutcome = []
      }, 2000)
                      },)
                     } else {
                      setTimeout(() => {
                        document.querySelector('.popup-3').style.visibility = 'visible';
                        setTimeout(() => {
                          document.querySelector('.popup-3').style.visibility = 'hidden';
                          balance = balance - stakeValue;
                          displayBalance()
                          userPredictions = []
                          gamePlayOutcome = []
                        }, 2000)
                                        },)
                      
                     }
                        }, 3000)
                       }, 4000)
                      }, 4000)
                     }, 4000)
                    }, 4000)
                   }, 4000)
                  }, 4000)
                 }, 4000)
                }, 4000)
               }, 4000)
              }, 4000)
             }, 4000)
            }, 4000)
           }, 4000)
          }, 4000)
    }

   
    
    
  
