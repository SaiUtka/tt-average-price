import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";

import {getTeachersRequest} from "../../services";
import {postAveragePrice} from "../../store/slices";

function Category({category}) {

    const dispatch = useDispatch();

    const [teachers, setTeachers] = useState(null);
    const [value, setValue] = useState(0);

    useEffect(() => {
        getTeachersRequest(category.code, 10)
            .then(value => setValue(value.totalResults));
    }, [category.code]);

    useEffect(() => {
        getTeachersRequest(category.code, value)
            .then(value => setTeachers(value.teachers));
    }, [category.code, value]);

    const getAveragePrice = () => {
        let sum = 0;
        if (teachers) {
            for (const teacher of teachers) {
                sum = (sum + teacher.pricePerHour);
            }
            return sum / teachers.length;
        }
    };
    const averagePrice = getAveragePrice();
    const item = {
        "categoryName": category.name,
        "averagePrice": averagePrice
    };

    const handlePost = () => {
        if (category.name && !isNaN(averagePrice) && averagePrice) {
            dispatch(postAveragePrice(item));
        }
    };

    return (
            <button className={'task1__btn'}
            onClick={handlePost}>
                Calculate average price: {category.name}
            </button>
    );

}

export {Category};

