import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {Category} from "../category/Category";
import {getCategories} from "../../store/slices";

function Categories() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCategories());
    }, [dispatch]);

    const {categories, status, errors} = useSelector(state => state.categoriesReducer);

    return (
        <div className={'task1__wrapper wrapper'}>

            <h2>Task1</h2>

            {
                status === 'pending' && <div>Loading...</div>
            }
            {
                status === 'rejected' && <div>Error: {errors}</div>
            }
            {
                status === 'resolved' && categories.map(category => <Category
                    key={category.code}
                    category={category}
                />)
            }

        </div>
    );

}

export {Categories};