import { ITeamRequest, ITeamResponse } from '../../types'
import rootApi from './rootApi'

const teamsApi = rootApi.injectEndpoints({
  endpoints: (builder) => ({
    getTeams: builder.query<ITeamResponse[], void>({
      query: () => '/teams/leadership',
    }),
    createTeam: builder.mutation<void, ITeamRequest>({
      query: (team) => ({
        url: '/teams',
        method: 'POST',
        body: team,
      }),
    }),
  }),
})

export const { useGetTeamsQuery, useCreateTeamMutation } = teamsApi
