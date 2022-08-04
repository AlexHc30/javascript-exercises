const findTheOldest = function(people) {
    return people.reduce ((oldest, person) => {
        if (!person.yearOfDeath) {
            const d = new Date();
            const currentYear = d.getFullYear();
            person.age = currentYear - person.yearOfBirth;
        } else {        
            person.age = person.yearOfDeath - person.yearOfBirth;
        }
        return oldest.age > person.age ? oldest : person;
    }, {})
};

// Do not edit below this line
module.exports = findTheOldest;
