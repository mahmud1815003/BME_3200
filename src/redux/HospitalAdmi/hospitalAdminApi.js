import api from '../API/api';

const instituteApi = api.injectEndpoints({
    endpoints: (builder) => ({
        addDoctor: builder.mutation({
            query: (data) => ({
                url: '/hospitaladmin/doctor/add',
                method: 'POST',
                body: data,
            }),
        }),
        addStaff: builder.mutation({
            query: (data) => ({
                url: '/hospitaladmin/staff/add',
                method: 'POST',
                body: data,
            }),
        }),
    }),
});

export const {useAddDoctorMutation, useAddStaffMutation} = instituteApi;