import {createAsyncThunk} from "@reduxjs/toolkit";

import {postAveragePriceRequest} from "../../services";

const postAveragePrice = createAsyncThunk(
    'averagePrice/postAveragePrice',
    async function (item) {
        try {
            const response = await postAveragePriceRequest(item);
            if (!response.ok) {
                throw new Error('Server Error');
            }
            // alert(`Done. Average price - ${item.averagePrice}`)
        } catch (error) {
            alert('Server Error');
        }
    }
);

export {postAveragePrice};