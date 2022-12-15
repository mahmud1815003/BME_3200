import api from '../API/api';

const doctorApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getDocInfo: builder.query({
            query: () => '/doctor/getDoctor',
        }),
    }),
});

export const {useGetDocInfoQuery} = doctorApi;