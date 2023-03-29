const addNewStudent = () => {
    test.push({
        name: 'Serhii',
        specialty: 'student',
        marks: [1, 23, 34, 66, 78, 98, 56, 87, 45, 34, 56, 23, 12, 34, 90, 87, 67]
    });
    return test;
};

const getAverage = (numbers) => {
    const sum = numbers.reduce((acc, number) => acc + number, 0);
    const length = numbers.length;
    return sum / length;
};
const getMedian = arr => {
    const mid = Math.floor(arr.length / 2),
        nums = [...arr].sort((a, b) => a - b);
    return arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
};

const setStudentsAverage = () => {
    test.map((el, index) => {
        el.average = getAverage(el.marks);
        return el;
    });
    return test;
};

const getListOfStudentsOnWithdrawal = () => {
    const testCopy = test;
    return testCopy.filter((el, index) => {
        return el.average < 50;
    });
};

const setStudentsMedian = () => {
    test.map((el, index) => {
        el.median = getMedian(el.marks);
        return el;
    });
    return test;
};

const sortStudents = () => {
    const testCopy = test;
    return testCopy.sort((a, b) => {
        return b.average - a.average;
    });
};

const getTopStudents = () => {
    const testCopy = sortStudents();
    return testCopy.slice(0, 5);
};

console.log(addNewStudent());

console.log(setStudentsAverage());

console.log(getListOfStudentsOnWithdrawal());

console.log(setStudentsMedian());

console.log(sortStudents());

console.log(getTopStudents());



