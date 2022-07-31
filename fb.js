const facebookProfiles = [
    {
        firstName: "Akash",
        lastName: "Agarwal",
        number: "111111111",
        likes: ["music", "movies"],
        hasDrivingLicense: false,
        address: {
            location: "rampur",
            state: "up",
        },
        emails: ["abc@outlook.com", "efg@gamil.com", "ghj@gmail.com"],
    },
    {
        firstName: "Pritesh",
        lastName: "Kumar",
        number: "222222222",
        likes: ["code", "driving"],
        hasDrivingLicense: false,
        address: {
            location: "gurgaon",
            state: "haryana",
        },
        emails: ["fgdfg@gmail.com"],
    },
    {
        firstName: "Sabiha",
        lastName: "Khan",
        number: "333333333",
        hasDrivingLicense: false,
        address: {
            location: "lucknow",
            state: "up",
        },
    },
    {
        firstName: "Suyash",
        lastName: "Kashyap",
        number: "444444444",
        likes: ["travel", "driving"],
        hasDrivingLicense: true,
        address: {
            location: "alwar",
            state: "rajasthan",
        },
        emails: ["abc@yahoo.com"],
    },
    {
        firstName: "Jay",
        likes: ["food", "mobile"],
        hasDrivingLicense: true,
        address: {
            location: "gurgaon",
            state: "haryana",
        },
        emails: ["abc@gmail.com", "efg@yahoo.com", "ghj@outlook.com"],
    },
];

// IMPORTANT: SOLVE the following questions using two methods
// 1. use for loop 
// 2. USE HIGHER ORDER FUNCTIONS TO SOLVE THE ABOVE QUESTIONS(map, filter, find, forEach etc. )


// ==================================== 0 ==================================== //

// function profileLookup(name, property) {
     
// }
// const result = profileLookup();
// console.log(result);
// complete the above function such that when it is called with name and property, then it should return its value
// ex
// profileLookup("Pritesh", "number"), then it should return his number

// handle edge cases like:
//      if name is not in the list, return "person does not exist"
//      if property is not present then return "no such property"
// 
// Hint: dynamically access properties using square bracket

// ================================== 1 ====================================== //

function getNamesFromGurgaon(facebookProfiles) {
    const names =[];
    for(let i = 0; i < facebookProfiles.length; i++){
        if(facebookProfiles[i].address.location === 'gurgaon'){
            names.push(facebookProfiles[i].firstName);
        }
    }
    return names;
}

//complete the above functin such that it returns the list of full names of all people of gurgaon.
// ex = ['Jay ', 'Pritesh Kumar']

// ==================================2 ====================================== //

function findFullName(stateName) {
    const names = [];
    for(let i = 0; i < facebookProfiles.length; i++){
        if(facebookProfiles[i]['address'].state === stateName){
            names.push(facebookProfiles[i]['firstName']);
        }
    }
    return names;
}
// 2. complete this function, which takes state name as argument and return the name 
// of one of its residents

// ================================== 3 ====================================== //
                      // In this function is not working
function getDLStatus(facebookProfiles) {
    const names = getNamesFromGurgaon(facebookProfiles);
    // console.log(typeof names[0]);
    for(let i = 0; i < names.length; i++){
        if(facebookProfiles[i]['firstName'] === names[i]) {
           const result = `${names[i]} - ${facebookProfiles[i]['hasDrivingLicense']}`
        }
    }
}

//3. write a function which returns full names of all people of gurgaon with their driving license status, in an array. 
// like shown in the example below
// ex = ['Jay - D/L', 'Pritesh Kumar - N D/L']

// =================================== 4 ===================================== //

function getFullName(facebookProfiles) {
    const fName = [];
    for(let i=0; i < facebookProfiles.length; i++){
        fName.push(`${facebookProfiles[i].firstName} ${facebookProfiles[i].lastName}`);
    }
    return fName;
}

// 4. write a function which returns full names in an array
//ans = ['Akash Agarwal', 'Pritesh Kumar', 'Sabiha Khan', 'Suyash Kashyap', 'Jay' ]


// ===================================== 5 =================================== //

function getLikes(facebookProfiles) {
    const allLikes = [];
    
    for(let i=0; i < facebookProfiles.length; i++){
        allLikes.push(facebookProfiles[i]['likes']);
    }
    const spreaded = allLikes.reduce(
          (previousValue, currentValue) => previousValue.concat(currentValue),
          [],
        )
    return spreaded;
}

// 5. write a function which returns all likes of all the people in an array
//hint: use spread syntax
//ans = ['music', 'movies', 'code', 'podcasts', 'travel', 'driving', 'food', 'mobile']

// ====================================== 6 ================================== //

function getNameFromDelhiWithDL(facebookProfiles) {
    for(let i =0; i< facebookProfiles.length; i++){
        if((facebookProfiles[i]['address']['location'] === 'delhi') && (facebookProfiles[i]['hasDrivingLicense'])) {
            console.log(facebookProfiles[i]['firstName']);
        } else console.log("sorry, no such person");
        
    }
}

//6. write a function which return  the name of the any one person who live in delhi and has driving license
//ans => "no such person"

// ======================================= 7 ================================= //

function getNameOfDriverWithoutDL(facebookProfiles) {
    for(let i =0; i< facebookProfiles.length; i++){
        if(!(facebookProfiles[i]['hasDrivingLicense']) && (facebookProfiles[i]['likes'].includes('driving'))){
            console.log(facebookProfiles[i]['firstName']);
        }
    }
}
//7. write a function which return the name of the any one person who like driving but doesnt have driving license
//asn => pritesh


