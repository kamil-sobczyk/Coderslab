console.log("====='task5'=====");

var animals = [
    {
      type: "cat",
      breed: "persian",
      name: "Tiberius",
      health: [
        {
          date: "2012-03-03",
          visitType: "grafting"
        },
        {
          date: "2015-06-23",
          visitType: "bowel surgery"
        }
      ]
    },
     {
      type: "Guinea pig",
      breed: "The Rex",
      name: "Marko",
      health: [
        {
          date: "2015-12-04",
          visitType: "grafting"
        },
        {
          date: "2016-03-15",
          visitType: "ear cleaning"
        }
      ]
    }
    
  ];

animals.forEach(function (obj) {
   for (attr in obj) {
       console.log(obj[attr])
   }
});

for (var i=0; i<animals.length); i++) {
    for (attr in animals[i]) {
        console.log(animals[i][attr])
    }
};


// animals.forEach(function(obj) {
//     for(attr in obj) {
//         // console.log(typeof obj[attr]);
//         if(typeof obj[attr] === 'string') { // check if type array
//             console.log(attr+": " + obj[attr]);
//         } else {
//             console.log('health: ');
//             for(visit in obj[attr]) {
//                 console.log(obj[attr][visit].date + " - " + obj[attr][visit].visitType);
//             }
//         }
//     }
// });

