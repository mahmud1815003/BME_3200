import api from '../API/api';

const hospitalApi = api.injectEndpoints({
    endpoints: (builder) => ({
        addHospital: builder.mutation({
            query: (data) => ({
                url: '/hospital/add',
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['getHospital']
        }),
        getHospital: builder.query({
            query: () => '/hospital/all',
            providesTags: ['getHospital'],
        }),
    }),
});

export const {useAddHospitalMutation, useGetHospitalQuery} = hospitalApi;