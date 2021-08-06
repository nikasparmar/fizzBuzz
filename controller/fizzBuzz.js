import httpStatus from 'http-status';

export const fizzBuzzCtrl = async (req, res) => {
    try {
        const count = req.query.count;
        let result = [];
        for (let counter = 1; counter <= count; counter++) {
            let fizBuzzStr = '';
            let multipleOf3 = counter % 3 == 0;
            let multipleOf5 = counter % 5 == 0;
            if (multipleOf3) {
                fizBuzzStr += "fizz"
            }
            if (multipleOf5) {
                fizBuzzStr += "buzz"
            }
            if (!(multipleOf3 || multipleOf5)) {
                fizBuzzStr = counter;
            }
            result.push(fizBuzzStr);
        }
        res.status(httpStatus.OK).json(result)
    } catch (error) {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ err: error })
    }

};

export default fizzBuzzCtrl;
